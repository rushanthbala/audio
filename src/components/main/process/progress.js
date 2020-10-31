import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

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
       <div>
           {/*<Typography>adf</Typography>*/}

       </div>
      </div>
    )
  }


export default Home