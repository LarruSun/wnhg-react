import React from 'react';
import './../css/ScrollAD.css'

//引入轮播插件
import ReactSwipe from 'react-swipe';
//引入获取数据的插件
// import axios from 'axios';


export default class ScrollAD extends React.Component{


    // constructor(props){
        // super(props);
    //     // this.state={
    //     //     myData:this.props.myData
    //     // }
        // console.log(props);
    // };

    //钩子函数
    componentDidMount(){
    }

    render=()=>{
        const {scrollAdData} = this.props;
        return (
            <ReactSwipe swipeOptions={{continuous:true,auto:1000}} key={scrollAdData.length}>
                {
                   scrollAdData.map((item,i)=>(
                        <div key={item.id}>
                            <img src={item.url} style={{width:"100%"}}/>
                        </div>
                    ))
                }
            </ReactSwipe>
        )
    }

}