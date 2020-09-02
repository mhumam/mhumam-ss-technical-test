/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:33:08
 * @modify date 2020-09-02 21:33:08
 * @desc Main Layout
 */

import React from 'react';
import MainLayout from './pages/home/Index';
import 'antd/dist/antd.css';
import './App.css';

class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<MainLayout />
			</React.Fragment>
		)
	}
}

export default Layout;