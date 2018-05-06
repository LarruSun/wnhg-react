import React from 'react';
import './../css/navBar.css';
import {NavLink} from 'react-router-dom';
// import {BrowserRouter,Route,Link, NavLink} from 'react-router-dom';


// import Home from './../../module/Home/home';
// import Fl from './../../module/FL/fl';

export default class NavBar extends React.Component{


    render(){
        return(
                <ul id='publicNavBar'>
                    <li> <NavLink  exact activeClassName='active' to='/'>首页</NavLink></li>
                    <li> <NavLink activeClassName='active' to='/fl'>分类</NavLink></li>
                    <li> <NavLink activeClassName='active' to='/shopingcar'>购物车</NavLink></li>
                    <li><NavLink activeClassName='active' to='/person'>我的</NavLink></li>
                </ul>

        )
    }
}