import React from 'react';
import './../css/GoodList.css';
import axios from 'axios';

export default class GoodList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        var url = `http://localhost:3000/api/home/goodList`;
        axios.get(url).then(axiosData=>{
            this.setState({
                myData:axiosData.data.result
            })
            console.log(this.state.myData)
        })
    }

    render=()=>(
        <div id='GoodList'>
            {
                this.state.myData.map((item,i)=>(
                    <div className='list' key={i}>
                        <img src={item.imgUrl} />
                        <p className='title'>{item.goodsName}</p>
                        <p className='price'>
                            <span>￥{item.showPrice}</span>
                            <s>￥{item.marketPrice}</s>
                        </p>                        
                    </div>
                ))
            }
        </div>
    )
}