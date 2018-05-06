import React from 'react';
import './../css/Goodlist1.css';

export default class GoodList1 extends React.Component{
    
    render=()=>{
        const {GoodList1Data} =this.props;
        // console.log(GoodList1Data);
        return(
            <div id='goodList1'>
            <div className='good'>
                {
                    GoodList1Data.map((item,i)=>(
                        <div key={i} className='List'>
                            <img src={item.imgUrl}/>
                            <p className='title'>{item.goodsName}</p>
                            <p className='price'>￥{item.mallPrice}</p>
                        </div>
                    ))
                }
            </div>
            </div>
        )
    }
}