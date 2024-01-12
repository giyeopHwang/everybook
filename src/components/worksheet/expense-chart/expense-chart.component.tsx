import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  ChartData,
  ChartOptions,
  TooltipItem,
} from 'chart.js';

import { ExpenseCategories } from '@/types/types';
import { ExpenseChartDatasets } from './expense-chart.const';
import { formatTick } from './expense-chart.utils';
import { selectDisplayOptions } from '@/store/display-options/display-options-slice';

import { Bar } from 'react-chartjs-2';
import { ExpenseChartContainer } from './expense-chart.styles';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ExpenseChart = () => {
  const { showNavBar } = useSelector(selectDisplayOptions);
  const theme = useTheme();

  const labels: ExpenseCategories[] = [
    '식비',
    '주거/통신',
    '생활용품',
    '의복/미용',
    '건강/문화',
    '교육/육아',
    '교통/차량',
    '경조사/회비',
    '세금/이자',
    '용돈/기타',
    '미분류',
  ];

  const expenses: number[] = [
    350_000, 850_000, 300_000, 450_000, 0, 500_000, 0, 100_000, 0, 0, 0,
  ];

  const budgets: number[] = [
    600_000, 1_000_000, 300_000, 300_000, 150_000, 150_000, 0, 0, 0, 0, 0,
  ];

  const overruns = expenses.map((expense, i) =>
    Math.max(expense - budgets[i], 0)
  );

  const expensesHeights = expenses.map((expense, i) =>
    Math.min(expense, budgets[i])
  );
  const budgetsHeights = budgets;
  const overrunsHeights = overruns.map((overrun, i) => overrun + budgets[i]);

  const generateTooltip = (context: TooltipItem<'bar'>) => {
    const { dataIndex, dataset } = context;
    const { label } = dataset;

    const expense = expenses[dataIndex].toLocaleString();
    const budget = budgets[dataIndex].toLocaleString();
    const overrun = overruns[dataIndex].toLocaleString();

    switch (label) {
      case ExpenseChartDatasets.expenses:
        return `${label}: ${expense}`;
      case ExpenseChartDatasets.budgets:
        return `${label}: ${budget}`;
      case ExpenseChartDatasets.overruns:
        if (overruns[dataIndex] === 0) {
          return '';
        }

        return `${label}: ${overrun}`;
      default:
        return '';
    }
  };

  const data: ChartData<'bar'> = {
    labels: labels,
    datasets: [
      {
        label: ExpenseChartDatasets.expenses,
        data: expensesHeights,
        barPercentage: 0.15,
        backgroundColor: theme.palette.success.main,
      },
      {
        label: ExpenseChartDatasets.budgets,
        data: budgetsHeights,
        barPercentage: 0.15,
        backgroundColor: '#EFEEF3',
      },
      {
        label: ExpenseChartDatasets.overruns,
        data: overrunsHeights,
        barPercentage: 0.15,
        backgroundColor: theme.palette.error.main,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        ticks: {
          callback: (value) => {
            return formatTick(+value);
          },
        },
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        bottom: 10,
        left: 15,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: generateTooltip,
        },
      },
    },
    interaction: {
      mode: 'x',
    },
    locale: 'ko-KR',
  };

  return (
    // NOTE: Chart should be resized whenever `showNavBar` value changes
    <ExpenseChartContainer
      key={showNavBar.toString()}
      bgcolor="background.paper"
    >
      <Bar data={data} options={options} />
    </ExpenseChartContainer>
  );
};

export default ExpenseChart;
