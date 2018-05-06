import React from 'react';
import {Redirect} from 'react-router-dom';


export default class Person extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isLogin:true
        }
    }

    render(){
        return(
            <div >
                {this.state.isLogin?'':<Redirect to="/login" />}
                Person
            </div>
        )
    }
}