import React,{Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {AppBar,TextField,RaisedButton} from 'material-ui'
 class  FormUserDetails extends Component {

      Continue=(e)=>{
          e.preventDefault();
          this.props.nextStep()
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
                floatingLabelText="First Name"
                placeholder="First Name"
                defaultValue={this.props.values.firstName}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'firstName')
                }
             }
            />
            <br/>
             <TextField
                id="filled-basic"
                label="Filled" 
                variant="filled"
                placeholder="Last Name"
                floatingLabelText="Last Name"
                defaultValue={this.props.values.lastName}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'lastName')
                }
             }
            />
            <br/>
             <TextField
                id="filled-basic"
                label="Filled" 
                variant="filled" 
                floatingLabelText="Email"
                defaultValue={this.props.values.email}
                onChange={(e)=>{
                    this.props.changeHandler(e.target.value,'email')
                }
             }
            />
            <br/>
            <RaisedButton label="Continue" primary={true} onClick={this.Continue} />
        </React.Fragment>

    </MuiThemeProvider>    
    )
}
 }
export default FormUserDetails;