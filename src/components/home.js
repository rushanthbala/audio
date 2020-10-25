import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft: '160px', /* Same as the width of the sidenav */
        fontSize: '28px', /* Increased text to enable scrolling */
        padding: '0px 10px',
      }
      
}));

function Home() {
    const classes = useStyles();
    return (
      <div  >
       Home
      </div>
    )
  }


export default Home