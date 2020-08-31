import React,{Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {AppBar,TextField,RaisedButton} from 'material-ui'
import './FormPersonal.css'
 class  FormPersonal extends Component {

      Continue=(e)=>{
          e.preventDefault();
          this.props.nextStep()
      }

      goBack=(e)=>{
        e.preventDefault();
        this.props.prevStep()
      }

    render(){
    return (
        <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter User Details"  />
            <TextField
                id="filled-basic"
                label="Filled" 
                variant="filled"
                placeholder="Occupation"
                floatingLabelText="Occupation"
                defaultValue={this.props.values.occupation}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'occupation')
                }
             }
            />
            <br/>
             <TextField
                id="filled-basic"
                label="Filled" 
                variant="filled"
                placeholder="City"
                floatingLabelText="City"
                defaultValue={this.props.values.city}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'city')
                }
             }
            />
            <br/>
             <TextField
                id="filled-basic"
                label="Filled" 
                variant="filled"
                placeholder="Bio"
                floatingLabelText="Bio"
                defaultValue={this.props.values.bio}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'bio')
                }
             }
            />
            <br/>
            <div id='div-button'>
            <RaisedButton label="Continue" primary={true} onClick={this.Continue}  className="btn"/>
            <RaisedButton label="Go back" secondary={true} onClick={this.goBack}  className='btn'/>
            </div>
        </React.Fragment>

    </MuiThemeProvider>    
    )
}
 }
export default FormPersonal;