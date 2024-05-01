import React from 'react';
import { Dropdown, Menu } from 'antd';

interface Option {
  value: string;
  label: string;
}

const TextSelectBox: React.FC<{ options: Option[] }> = ({ options }) => {
  const menu = (
    <Menu>
      {options.map(option => (
        <Menu.Item key={option.value}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span style={{ cursor: 'pointer' }}>user name</span>
    </Dropdown>
  );
};

// 사용 예시
const options: Option[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

// TODO 이름 변경
const TestComp: React.FC = () => {
  return (
    <div className="app">
      <TextSelectBox options={options} />
    </div>
  );
};

export default TestComp;