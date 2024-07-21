import { Table, DatePicker } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';

import { salesMonthCols } from '../SalesItems';
import { SalesMonthType } from '../../../type/expends';

const dayOfWeek: string[] = ["월", "화", "수", "목", "금", "토", "일"];
let sales: SalesMonthType[] = [];
for(let i = 1; i <= 31; i++) {
  let sumOfExpense: number = 0;
  let sumOfSales: number = 0;
  for(let j = 0; j < i - 1; j++) {
    sumOfSales += sales[j].daySales;
    sumOfExpense += sales[j].dayExpense;
  }
  const cache: number = i * 100;
  const card: number = i * 100 * 2;

  sales.push({
    key: i.toString(),
    date: i,
    dayOfWeek: dayOfWeek[(i - 1) % dayOfWeek.length],
    cache: cache,
    card: card,
    daySales: cache + card,
    sumOfWeekSales: sumOfSales,
    sumOfSales: sumOfSales,
    cardPercentage: +(card / (card + cache) * 100).toFixed(2),
    dayExpense: i * 10,
    sumOfExpense: sumOfExpense,
    variableExpense: i * 10,
    sumOfVariableExpense: sumOfExpense,
    comment: i + ' test',
  });
}

const SalesMonthTable: React.FC<{year:number, month:number, locate:string}> = ({year, month, locate}) => {
  // TODO year, month, 지점을 통해 불러오기
  return (
  <Table columns={salesMonthCols} 
             dataSource={sales}
             size='small'
             bordered
             className='table' 
             rowClassName={(record, index) => {
              return index % dayOfWeek.length >= 5 ? 'red' : '';
            }}
            pagination={{
              hideOnSinglePage: true,
              defaultPageSize: 32 
            }}
  />);
};

export default SalesMonthTable;
