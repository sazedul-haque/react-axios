import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './App';
import PersonList from './PersonList';
import Products from './Products';
import AddProduct from './AddProduct';
import AddUser from './AddUser';
import Notfound from './Notfound';

const routing = (
	<Router>
		<div className="container">
			<ul>
		        <li>
		          <NavLink exact activeClassName="active" to="/">Home</NavLink>
		        </li>
		        <li>
		          <NavLink activeClassName="active" to="/users">Users</NavLink>
		        </li>
		        <li>
		          <NavLink activeClassName="active" to="/products">Products</NavLink>
		        </li>
		        <li>
		          <NavLink activeClassName="active" to="/add-product">Add Products</NavLink>
		        </li>
		        <li>
		          <NavLink activeClassName="active" to="/add-user">Add User</NavLink>
		        </li>
		      </ul>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/users" component={PersonList} />
				<Route path="/products" component={Products} />
				<Route path="/add-product" component={AddProduct} />
				<Route path="/add-user" component={AddUser} />
				<Route component={Notfound}></Route>
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));
