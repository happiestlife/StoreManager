import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import SalesMonth from '../pages/sales/month/SalesMonth';
import SalesYear from '../pages/sales/year/SalesYear';
import ExpenseMonth from '../pages/expense/ExpenseMonth';
import ExpenseYear from '../pages/expense/ExpenseYear';
import ManageWorker from '../pages/manage/ManageWorker';
import ManageSchedule from '../pages/manage/ManageSchedule';
import ManageUser from '../pages/manage/ManageUser';

const AppRouter: React.FC = () => {
	const mainLayout = <MainLayout/>

	const salesYear = <SalesYear />
	const salesMonth = <SalesMonth />
	
	const expenseYear = <ExpenseYear />
	const expenseMonth = <ExpenseMonth />
	
	const manageWorker = <ManageWorker />
	const manageSchedule = <ManageSchedule />
	const manageUser = <ManageUser />

	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={mainLayout}>
					<Route path='sales'>
						<Route path='year' element={salesYear}></Route>
						<Route path='month' element={salesMonth}></Route>
						<Route path='day'></Route>
					</Route>
					<Route path='expense'>
						<Route path='year' element={expenseYear}></Route>
						<Route path='month' element={expenseMonth}></Route>
						<Route path='day'></Route>
					</Route>
					<Route path='manage'>
						<Route path='schedule' element={manageWorker}></Route>
						<Route path='worker' element={manageSchedule}></Route>
						<Route path='user' element={manageUser}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default AppRouter;