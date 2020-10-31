import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import dimons from './assects/image/dimons.png'
import {Typography} from "@material-ui/core";
import student from './assects/image/stu01.jpeg'
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    main: {
        margin: '40px 0 0 0', /* Same as the width of the sidenav */
        // fontSize: '28px', /* Increased text to enable scrolling */
        padding: '20px 0px 0 0',
        // backgroundColor:'red'
        width:'100%',
        display:'flex',
        justifyContent:'flex-end'
      },
    side:{
        display:'flex',
        justifyContent:"",
        maxWidth:"400px",
    },
    iconAndNo:{
        width:'200px',
        display:'flex',
        alignItems:'center'
    },
    image:{
        width:'40px'
    },
    no:{
        padding: "0 0 0 10px"
    },
    testimonials : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '604px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0',
            paddingBottom: '20px'
        },
    },
    avatarFrame: {
        height: '64px',
        width: '64px',
    },
    avatar: {
        width: '100%',
        height: 'auto',
        borderRadius: '50%',
        border: '3px solid white',
        boxShadow: '0 12px 18px rgba(47, 47,51, 0.16)'
    },
    name: {
        maxWidth: '189px',
        fontSize: ' 12px',
        fontFamily: 'Poppins',
        fontWeight: '900',
        lineHeight: '16px',
        width: '100%',
        letterSpacing: '0px',
        color: '#201F1F',
        opacity: '1',
        padding:'0 0 0 10px'
    },
}));

function Home() {
    const classes = useStyles();
    return (
      <div className={classes.main} >
          <div className={classes.side} >
              <div className={classes.iconAndNo}>
                  <div className={classes.image}>
                      <img src={dimons} alt="sdsd" className={classes.image}/>
                  </div>
                  <Typography variant= "h5" className={classes.no} >75 </Typography>
                  {/*<Dimaon/>*/}
              </div>
              <div className={classes.testimonials}>
                  <div className={classes.avatarFrame}>
                      <Link to='/setting' >
                      <img src={student} className={classes.avatar}/>
                      </Link>
                  </div>
                  <div>
                      <Typography className={classes.name}> Natasha</Typography>
                  </div>
              </div>
          </div>
      </div>
    )
  }


export default Home