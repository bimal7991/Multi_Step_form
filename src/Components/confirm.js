import React,{Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {AppBar,List,ListItem,RaisedButton} from 'material-ui'
import './FormPersonal.css'
 class  Confirm extends Component {
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
            <AppBar title="Confirm User Data"  />
             <List>
                 <ListItem primaryText="First Name" secondaryText={this.props.values.firstName}></ListItem>
                 <ListItem primaryText="Last Name" secondaryText={this.props.values.lastName}></ListItem>
                 <ListItem primaryText="Email" secondaryText={this.props.values.email}></ListItem>
                 <ListItem primaryText="Occupation" secondaryText={this.props.values.occupation}></ListItem>
                 <ListItem primaryText="City" secondaryText={this.props.values.city}></ListItem>
                 <ListItem primaryText="Bio" secondaryText={this.props.values.bio}></ListItem>
             </List>

            
            <br/>
            <div id='div-button'>
            <RaisedButton label="Confirm & Continue" primary={true} onClick={this.Continue}  className="btn"/>
            <RaisedButton label="Go back" secondary={true} onClick={this.goBack}  className='btn'/>
            </div>
        </React.Fragment>

    </MuiThemeProvider>    
    )
}
 }
export default Confirm;