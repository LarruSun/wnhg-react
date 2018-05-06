import React from 'react';
// import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import axios from 'axios';

import './css/fl.less';
import './css/left.less';
import Top from './../FL/component/top';
// import Left from './../FL/component/left';
import List from './../FL/component/list';

export default class Fl extends React.Component{
    constructor(props){
        super(props);


        this.state={
            myData:[],
            listData:[],
            isActive:[]
        }
    };


    componentDidMount(){
        var url='/category/getCategory.shtml';
        axios.get(url).then(axiosData=>{
            // console.log(axiosData.data.result);
            this.setState({
                myData:axiosData.data.result,
                isActive:[true,false,false,false,false,false]
            })
            console.log(this.state.isActive);
        })
        url=`http://localhost:3000/api/Fl/FlRight?classid=4`;
        axios.get(url).then((axiosData)=>{
            // console.log(axiosData.data.result.classTwoList);
            this.setState({
                listData:axiosData.data.result.classTwoList,
            })
            console.log(this.state.listData);
        })
    };

    select=(event)=>{
        var arr=[];
        for(var i=0;i<this.state.isActive.length;i++){
            arr.push(false);
        };
        arr[event.target.id]=true;
        // console.log(arr);
        this.setState({
            isActive:arr
        });
        // setTimeout(()=>{console.log(this.state.isActive);},500)
        var classid=this.state.myData[event.target.id].classid;
        var url=`http://localhost:3000/api/Fl/FlRight?classid=${classid}`;
        axios.get(url).then((axiosData)=>{
            this.setState({
                listData:axiosData.data.result.classTwoList,
            })
        })
    };

    render(){
        return(
            <div id='Fl'>
                <Top/>
                <div className='FlList'>
                    <ul id='FlLeft'>
                        {
                            this.state.myData.map((item,i)=>(
                                <li className={this.state.isActive[i]?'active':''} key={i} onClick={this.select} id={i}>
                                    {item.classdesc}
                                </li>
                            ))
                        }
                    </ul>
                    < List  listData={this.state.listData}/>
                </div>
            </div>
        )
    };
} 