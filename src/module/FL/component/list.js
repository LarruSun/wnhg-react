import React from 'react';
// import axios from 'axios';
import './../css/list.less';

export default class List extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
    }


    render=()=>{
        const {listData} =this.props;

        return(
            <div id='FlList'>
                {
                    listData.map((item,i)=>(
                        <div key={i} className='FlLists'>
                                <p className='title'>{item.name}</p>
                                {
                                    item.threeCategoryList.map((items,is)=>(
                                        <div key={is} className='goodlist'>
                                            <img src={items.imgUrl}/>
                                            <p>{items.threeName}</p>
                                        </div> 
                                    ))                                    
                                }       
                        </div>
                    ))
                }
            </div>
        )
    }
    
}