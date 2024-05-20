import React from 'react';
import { Table } from 'antd';
import { SalesMonthType } from '../../../type/expends';
import ContentLayout from '../../layout/ContentLayout';
import { ContentLayoutComp } from '../../../type/layout';

import { salesMonthCols } from './SalesItems';

const data: SalesMonthType[] = [
  {
    key: '1',
    date: 1,
    dayOfWeek: '월',
    cache: 100,
    card: 200,
    daySales: 300,
    sumOfWeekSales: 300,
    sumOfSales: 300,
    cardPercentage: 12,
    dayExpense: 50,
    sumOfExpense: 50,
    variableExpense: 50,
    sumOfVariableExpense: 50,
    comment: 'test 1day',
  },
  {
    key: '2',
    date: 2,
    dayOfWeek: '화',
    cache: 110,
    card: 510,
    daySales: 620,
    sumOfWeekSales: 920,
    sumOfSales: 920,
    cardPercentage: 24,
    dayExpense: 510,
    sumOfExpense: 1010,
    variableExpense: 510,
    sumOfVariableExpense: 1010,
    comment: 'test 2day',
  },
  {
    key: '3',
    date: 3,
    dayOfWeek: '수',
    cache: 120,
    card: 220,
    daySales: 340,
    sumOfWeekSales: 1260,
    sumOfSales: 1260,
    cardPercentage: 36,
    dayExpense: 520,
    sumOfExpense: 1530,
    variableExpense: 520,
    sumOfVariableExpense: 1530,
    comment: 'test 3day',
  },
  {
    key: '4',
    date: 4,
    dayOfWeek: '목',
    cache: 130,
    card: 230,
    daySales: 360,
    sumOfWeekSales: 1620,
    sumOfSales: 1620,
    cardPercentage: 48,
    dayExpense: 530,
    sumOfExpense: 2060,
    variableExpense: 530,
    sumOfVariableExpense: 2060,
    comment: 'test 4day',
  },
  {
    key: '5',
    date: 5,
    dayOfWeek: '금',
    cache: 140,
    card: 240,
    daySales: 380,
    sumOfWeekSales: 2000,
    sumOfSales: 2000,
    cardPercentage: 60,
    dayExpense: 540,
    sumOfExpense: 2600,
    variableExpense: 540,
    sumOfVariableExpense: 2600,
    comment: 'test 5day',
  },
  {
    key: '6',
    date: 6,
    dayOfWeek: '토',
    cache: 150,
    card: 250,
    daySales: 400,
    sumOfWeekSales: 2400,
    sumOfSales: 2400,
    cardPercentage: 72,
    dayExpense: 550,
    sumOfExpense: 3150,
    variableExpense: 550,
    sumOfVariableExpense: 3150,
    comment: 'test 6day',
  },
  {
    key: '7',
    date: 7,
    dayOfWeek: '일',
    cache: 160,
    card: 260,
    daySales: 420,
    sumOfWeekSales: 2820,
    sumOfSales: 2820,
    cardPercentage: 84,
    dayExpense: 560,
    sumOfExpense: 3710,
    variableExpense: 560,
    sumOfVariableExpense: 3710,
    comment: 'test 7day',
  },
];


const SalesMonth: React.FC = () => {
  const contentComp: ContentLayoutComp = {
    title: 'Sales Month',
    content: 
      <Table columns={salesMonthCols} 
             dataSource={data}
             bordered
             className='table' 
             rowClassName={(record, index) => {
              return index >= 5 ? 'red' : '';
            }}
            pagination={{
              hideOnSinglePage: true
            }}
      />,
    footer: <h5>'Sales Month'</h5>,
  };

  return (<>
    <ContentLayout {...contentComp}/>
  </>);
};

export default SalesMonth;