import type { TableProps } from 'antd';
import { SalesMonthType } from '../../../type/expends';

const salesMonthCols: TableProps<SalesMonthType>['columns'] = [
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
    width: 65,
    align: 'center',
    render: (date) => date + '일'
  },
  {
    title: '요일',
    dataIndex: 'dayOfWeek',
    key: 'dayOfWeek',
    width: 65,
    align: 'center',
  },
  {
    title: '현금',
    dataIndex: 'cache',
    key: 'cache',
    align: 'right',
  },
  {
    title: '카드',
    dataIndex: 'card',
    key: 'card',
    align: 'right',
  },
  {
    title: '매출액계',
    dataIndex: 'daySales',
    key: 'daySales',
    align: 'right',
  },
  {
    title: '주간매출 합계',
    dataIndex: 'sumOfWeekSales',
    key: 'sumOfWeekSales',
    align: 'right',
  },
  {
    title: '매출누계',
    dataIndex: 'sumOfSales',
    key: 'sumOfSales',
    align: 'right',
  },
  {
    title: '카드%',
    dataIndex: 'cardPercentage',
    key: 'cardPercentage',
    align: 'right',
  },
  {
    title: '매입지출',
    dataIndex: 'dayExpense',
    key: 'dayExpense',
    align: 'right',
  },
  {
    title: '매입누계',
    dataIndex: 'sumOfExpense',
    key: 'sumOfExpense',
    align: 'right',
  },
  {
    title: '변동비',
    dataIndex: 'variableExpense',
    key: 'variableExpense',
    align: 'right',
  },
  {
    title: '변동비누계',
    dataIndex: 'sumOfVariableExpense',
    key: 'sumOfVariableExpense',
    align: 'right',
  },
  {
    title: '비고',
    dataIndex: 'comment',
    key: 'comment',
  },
];

export { salesMonthCols };