import React,{Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {AppBar,GridTile} from 'material-ui'
 class  Success extends Component {

      
    render(){
    return (
        <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Data Is submitted" />
             <h1>Your Data is Submitted successfully</h1>
             <p>Thank You for your submission</p>
            
         </React.Fragment>
         </MuiThemeProvider>
           )

           }
} 

export default Success;