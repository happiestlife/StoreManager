import type { TableProps } from 'antd';
import { SalesMonthType } from '../../type/expends';

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
    width: 100,
    align: 'right',
  },
  {
    title: '카드',
    dataIndex: 'card',
    key: 'card',
    width: 100,
    align: 'right',
  },
  {
    title: '매출액계',
    dataIndex: 'daySales',
    key: 'daySales',
    width: 120,
    align: 'right',
  },
  {
    title: '주간매출 합계',
    dataIndex: 'sumOfWeekSales',
    key: 'sumOfWeekSales',
    width: 120,
    align: 'right',
  },
  {
    title: '매출누계',
    dataIndex: 'sumOfSales',
    key: 'sumOfSales',
    width: 120,
    align: 'right',
  },
  {
    title: '카드%',
    dataIndex: 'cardPercentage',
    key: 'cardPercentage',
    width: 65,
    align: 'right',
  },
  {
    title: '매입지출',
    dataIndex: 'dayExpense',
    key: 'dayExpense',
    width: 85,
    align: 'right',
  },
  {
    title: '매입누계',
    dataIndex: 'sumOfExpense',
    key: 'sumOfExpense',
    width: 85,
    align: 'right',
  },
  {
    title: '변동비',
    dataIndex: 'variableExpense',
    key: 'variableExpense',
    width: 85,
    align: 'right',
  },
  {
    title: '변동비누계',
    dataIndex: 'sumOfVariableExpense',
    key: 'sumOfVariableExpense',
    width: 90,
    align: 'right',
  },
  {
    title: '비고',
    dataIndex: 'comment',
    key: 'comment',
  },
];

export { salesMonthCols };