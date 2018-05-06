import React from 'react';

import './../css/HomeNavBar.css';

export default class HomeNavBar extends React.Component{


    render(){
        return(
            <ul id='HomeNavBar'>
                <li>国家馆</li>
                <li>品牌街</li>
                <li>新品</li>
                <li>超值量贩</li>
            </ul>
        )

    }

}