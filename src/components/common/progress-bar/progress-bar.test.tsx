import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from './progress-bar.component';
import { ProgressTypes } from './progress-bar.const';

describe('ProgressBar', () => {
  it('renders a normal-typed ProgressBar component', () => {
    const normalProgressBar = render(
      <ProgressBar type={ProgressTypes.normal} curr={100} goal={200} />
    );
    expect(normalProgressBar).toMatchSnapshot();
  });

  it('renders a positive budget-typed ProgressBar component', () => {
    const positiveBudgetProgressBar = render(
      <ProgressBar type={ProgressTypes.budget} curr={100} goal={200} />
    );
    expect(positiveBudgetProgressBar).toMatchSnapshot();
  });

  it('renders a negative budget-typed ProgressBar component', () => {
    const negativeBudgetProgressBar = render(
      <ProgressBar type={ProgressTypes.budget} curr={300} goal={200} />
    );
    expect(negativeBudgetProgressBar).toMatchSnapshot();
  });
});
