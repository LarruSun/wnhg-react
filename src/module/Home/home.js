import React from 'react';


//引入获取数据的插件
import axios from 'axios';  
import './css/home.css';

import HomeNavBar from './component/HomeNavBar';
import ScrollAD from './component/ScrollAd';
import CenterImgs from './component/CenterImgs';
import GoodList1 from './component/goodList1';
import GoodList from './component/GoodList';



export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            myData:[],
            scrollAdData:[],
            CenterImgData1:[],
            CenterImgData2:[],
            GoodList1Data:[]
        }
    }
    //钩子函数
    componentDidMount(){
        var url = `http://localhost:3000/api/home/Top`;
        axios.get(url).then(axiosData=>{
            // console.log(axiosData);
            this.setState({
                myData:axiosData.data.result,
                scrollAdData:axiosData.data.result.banner,
                CenterImgData1:axiosData.data.result.subject,
                CenterImgData2:axiosData.data.result.newSubject,
                GoodList1Data:axiosData.data.result.newSubject[0].goodsList
            })
            console.log(this.state.myData);
        console.log(this.state.CenterImgData1)
        })
    }


    render=()=>(
        <div id='Home'>
            <ScrollAD scrollAdData={this.state.scrollAdData}/>
            <HomeNavBar />
            <CenterImgs CenterImgData1={this.state.CenterImgData1} CenterImgData2={this.state.CenterImgData2}/>
            <GoodList1  GoodList1Data={this.state.GoodList1Data} />
            <GoodList />
        </div>
    )
}  