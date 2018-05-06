import React from 'react';
import './../css/CenterImgs.css';

export default class CenterImgs extends React.Component{
    
    constructor(props){
        super(props);
        console.log(props);
    }


    render=()=>{
        const {CenterImgData1}=this.props;
        const {CenterImgData2}=this.props;
        // console.log(CenterImgData2);
        return (
        <div id='CenterImgs'>
            <div className='CenterImg1'>
                {
                    CenterImgData1.map((item,i)=>(
                        <img src={item.url} key={i}/>
                    ))
                }
            </div>
            <div className='CenterImg2'>
                {
                    CenterImgData2.map((item,i)=>(
                        <img src={item.url} key={i}/>
                    ))
                }
            </div>
        </div>
        )
    }
}