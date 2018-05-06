import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
// 页面引入

import NavBar from './../public/component/navBar'

import Home from './../module/Home/home.js';
import Fl from './../module/FL/fl.js';
import ShopingCar from './../module/ShopingCar/ShopingCar';
import Person from './../module/Person/Person';
import Login from './../module/Login/Login'

//路由
const AppRouters=()=>{
    return(
        <BrowserRouter basename="/" keyLength={4}>

            <div>
                <NavBar/>

                <Route exact path='/' component={Home}/>
                <Route path='/fl' component={Fl}/>
                <Route path='/shopingcar' component={ShopingCar}/>
                <Route path='/person' component={Person}/>
                <Route path='/login' component={Login}/>
            </div>
        </BrowserRouter>


    )
}
export default AppRouters