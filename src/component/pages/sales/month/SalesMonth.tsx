import { DatePicker } from 'antd';
import dayjs from 'dayjs'
import { useState, SetStateAction, Dispatch } from 'react'

import ContentLayout from '../../../layout/ContentLayout';
import { ContentLayoutComp } from '../../../../type/layout';
import SalesMonthTable from './SalesMonthTable';
import { MonthDatepickerOnChange } from '../../../../type/common';

const SalesMonth: React.FC = () => {
  const [selectedDate, setSelecteDate]: [Date, Dispatch<SetStateAction<Date>>] = useState(new Date());

  const handleOnChangeDatePicker: MonthDatepickerOnChange = (date, dateString) => {
    if(!date) return;
    setSelecteDate(new Date(date.year(), date.month()));
  }

  const content = (<>
    <div className='sub-title'>
      <DateSelector selectedDate={selectedDate} handleOnChange={handleOnChangeDatePicker}/>
    </div>
    <SalesMonthTable year={selectedDate.getFullYear()} month={selectedDate.getMonth()} locate='loc'/>
  </>);

  const contentComp: ContentLayoutComp = {
    title: 'Sales Month',
    content: content,
    footer: <h5>'Sales Month'</h5>,
  };


  return (<>
    <ContentLayout {...contentComp}/>
  </>);
};

const DateSelector: React.FC<{selectedDate: Date, handleOnChange: MonthDatepickerOnChange}> = ({selectedDate, handleOnChange}) => {
  return (<>
    <DatePicker className='input' onChange={handleOnChange} picker="month"  defaultValue={dayjs(selectedDate)} size='large'/>
  </>);
};


export default SalesMonth;