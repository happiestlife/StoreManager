interface SalesMonthType {
  key: string;
  date: number;
  dayOfWeek: string;
  cache: number;
  card: number;
  daySales: number;
  sumOfWeekSales: number;
  sumOfSales: number;
  cardPercentage: number;
  dayExpense: number;
  sumOfExpense: number;
  variableExpense: number;
  sumOfVariableExpense: number;
  comment: string;
};

export type {SalesMonthType};