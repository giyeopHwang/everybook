import dayjs from 'dayjs';
import { ColDef } from 'ag-grid-community';
import { Expense } from '@/types/types';
import { suppressKeyboardEvent } from '@/utils/utils';

export const mockExpenseRowData: Expense[] = [
  {
    id: '1',
    isSelected: false,
    date: new Date('2024.01.01'),
    place: '다이소',
    item: '주방세제',
    cash: 2_000,
    card: 0,
    cashAccount: 'PAYCO',
    cardAccount: null,
    category: '생활용품>주방/욕실',
    isWaste: false,
  },
  {
    id: '2',
    isSelected: false,
    date: new Date('2024.01.01'),
    place: '서울호떡',
    item: '호떡',
    cash: 3_000,
    card: 0,
    cashAccount: '네이버페이머니통장',
    cardAccount: '네이버페이체크카드',
    category: '식비>간식',
    isWaste: false,
  },
  {
    id: '3',
    isSelected: false,
    date: new Date('2024.01.01'),
    place: '농부의아들',
    item: '고구마',
    cash: 3_000,
    card: 0,
    cashAccount: '네이버페이머니통장',
    cardAccount: '네이버페이체크카드',
    category: '식비>간식',
    isWaste: false,
  },
  {
    id: '4',
    isSelected: false,
    date: new Date('2024.01.02'),
    place: '롯데리아',
    item: '핫크리스피버거세트',
    cash: 0,
    card: 7_800,
    cashAccount: null,
    cardAccount: '톡톡 my point 카드',
    category: '식비>외식',
    isWaste: true,
  },
  {
    id: '5',
    isSelected: false,
    date: new Date('2024.01.02'),
    place: '쿠팡',
    item: '에어프라이어',
    cash: 0,
    card: 150_000,
    cashAccount: null,
    cardAccount: '톡톡 my point 카드',
    category: '생활용품>가구/가전',
    isWaste: false,
  },
  {
    id: '6',
    isSelected: false,
    date: new Date('2024.01.03'),
    place: '국민건강보험',
    item: '건강보험료',
    cash: 45_000,
    card: 0,
    cashAccount: '하나주거래통장',
    cardAccount: null,
    category: '건강/문화>보장성보험',
    isWaste: false,
  },
  {
    id: '7',
    isSelected: false,
    date: new Date('2024.01.03'),
    place: '어머니',
    item: '용돈',
    cash: 200_000,
    card: 0,
    cashAccount: '하나주거래통장',
    cardAccount: null,
    category: '용돈/기타>용돈',
    isWaste: false,
  },
  {
    id: '8',
    isSelected: false,
    date: new Date('2024.01.04'),
    place: 'GAK',
    item: '커트',
    cash: 23_000,
    card: 0,
    cashAccount: '네이버페이머니통장',
    cardAccount: '네이버페이체크카드',
    category: '의복/미용>헤어/뷰티',
    isWaste: false,
  },
  {
    id: '9',
    isSelected: false,
    date: new Date('2024.01.04'),
    place: '농부의아들',
    item: '귤',
    cash: 5_000,
    card: 0,
    cashAccount: '네이버페이머니통장',
    cardAccount: '네이버페이체크카드',
    category: '식비>간식',
    isWaste: false,
  },
  {
    id: '10',
    isSelected: false,
    date: new Date('2024.01.05'),
    place: '전통한우푸줏간',
    item: '삼겹살',
    cash: 0,
    card: 13_000,
    cashAccount: null,
    cardAccount: '현대카드ZERO',
    category: '식비>주식',
    isWaste: false,
  },
  {
    id: '11',
    isSelected: false,
    date: new Date('2024.01.05'),
    place: 'GS25',
    item: '과자',
    cash: 3_000,
    card: 0,
    cashAccount: 'PAYCO',
    cardAccount: null,
    category: '식비>간식',
    isWaste: true,
  },
  {
    id: '12',
    isSelected: false,
    date: new Date('2024.01.05'),
    place: '마이프로틴',
    item: '보충제',
    cash: 0,
    card: 70_000,
    cashAccount: null,
    cardAccount: '톡톡 my point 카드',
    category: '건강/문화>기타',
    isWaste: false,
  },
  {
    id: '13',
    isSelected: false,
    date: new Date('2024.01.06'),
    place: '다이소',
    item: '밀폐용기',
    cash: 3_000,
    card: 0,
    cashAccount: 'PAYCO',
    cardAccount: null,
    category: '생활용품>주방/욕실',
    isWaste: true,
  },
  {
    id: '14',
    isSelected: false,
    date: new Date('2024.01.06'),
    place: '인터넷등기소',
    item: '수수료',
    cash: 700,
    card: 0,
    cashAccount: '네이버페이머니통장',
    cardAccount: '네이버페이체크카드',
    category: '주거/통신>기타',
    isWaste: false,
  },
  {
    id: '15',
    isSelected: false,
    date: new Date('2024.01.07'),
    place: '하나은행',
    item: '대출이자',
    cash: 250_000,
    card: 0,
    cashAccount: '하나주거래통장',
    cardAccount: '',
    category: '세금/이자>이자',
    isWaste: false,
  },
];

export const mockExpenseColDefs: ColDef<Expense>[] = [
  { field: 'isSelected', headerName: '선택', editable: true, flex: 0.5 },
  {
    field: 'date',
    headerName: '날짜',
    editable: true,
    valueFormatter: (params) => `${dayjs(params.value).format('YYYY.MM.DD')}`,
    flex: 0.75,
  },
  {
    field: 'place',
    headerName: '사용처',
    editable: true,
    suppressKeyboardEvent,
    flex: 1,
  },
  {
    field: 'item',
    headerName: '사용내역',
    editable: true,
    suppressKeyboardEvent,
    flex: 1,
  },
  {
    field: 'cash',
    headerName: '현금',
    editable: true,
    valueFormatter: (params) =>
      params.value && `₩${params.value.toLocaleString()}`,
    flex: 1,
  },
  {
    field: 'card',
    headerName: '카드',
    editable: true,
    valueFormatter: (params) =>
      params.value && `₩${params.value.toLocaleString()}`,
    flex: 1,
  },
  {
    field: 'cashAccount',
    headerName: '출금통장',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: ['선택없음', '하나주거래통장', '네이버페이머니통장', 'PAYCO'],
    },
    valueSetter: (params) => {
      params.data.cashAccount =
        params.newValue === '선택없음' ? null : params.newValue;
      return true;
    },
    flex: 1,
  },
  {
    field: 'cardAccount',
    headerName: '카드분류',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: [
        '선택없음',
        '네이버페이체크카드',
        '톡톡 my point 카드',
        '현대카드ZERO',
      ],
    },
    valueSetter: (params) => {
      params.data.cardAccount =
        params.newValue === '선택없음' ? null : params.newValue;
      return true;
    },
    flex: 1,
  },
  { field: 'category', headerName: '분류', editable: true, flex: 1 },
  {
    field: 'isWaste',
    headerName: '낭비',
    editable: true,
    flex: 0.5,
  },
];
