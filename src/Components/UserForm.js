import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import UserDetails from './FormUserDetails'

import PersonalDetails from './FormPersonal'
import Confirm from './confirm'

import Success from './Success'

class UserForm extends Component{

       state={
           step:1,
           firstName:'',
           lastName:"",
           email:"",
           occupation:"",
           city:'',
           bio:''
       }
nextStep=()=>{
    this.setState({step:this.state.step+1})
  }
  prevStep=()=>{
    this.setState({step:this.state.step-1})
  }

  changeHandler=(val,input)=>{
        this.setState({
            [input]:val
        })
  }


    render() {
          const {step}=this.state;
          const {firstName,lastName,email,occupation,city,bio}=this.state;
          const values={firstName,lastName,email,occupation,city,bio};
           
          
     switch (step){
         case 1: 
         return (
            <UserDetails  nextStep={this.nextStep} values={values} changeHandler={this.changeHandler}/>
              )
         case 2:
            return (
                   <PersonalDetails prevStep={this.prevStep} nextStep={this.nextStep} values={values} changeHandler={this.changeHandler}/>
                  )
         case 3:
             return (
                   <Confirm prevStep={this.prevStep} nextStep={this.nextStep} values={values}/>
             )  
         case 4:
               return (
                   <Success/>
               )           
        default :
        return null;
                

     }
        
    }
}

export default UserForm
