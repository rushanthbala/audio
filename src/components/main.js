import React, { Component } from 'react'
import Navbar from '../navbar'
import Footer from './footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './main/dashboard/dashboard'
import Progress from './main/process/progress'
import Lesson from './main/subject/lesson/lesson'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft: '260px', /* Same as the width of the sidenav */
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
          <Route path="/home" component={Dashboard} />
          <Route path="/progress" component={Progress} />
          <Route path="/subject" component={Lesson}  />
          {/* <Redirect from='*' to='/home' /> */}
        </Switch>
        <Footer />
      </div>
    )
  }


export default Main