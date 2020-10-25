import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './home'
import Progress from './progress'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft: '160px', /* Same as the width of the sidenav */
        fontSize: '28px', /* Increased text to enable scrolling */
        padding: '0px 10px',
      }
      
}));

function Main() {
    const classes = useStyles();

    return (
      <div className={classes.main} >
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/progress" component={Progress} />
          {/* <Redirect from='*' to='/home' /> */}
        </Switch>
        <Footer />
      </div>
    )
  }


export default Main