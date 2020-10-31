import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Listening from '../../../assects/image/image 6.png'
import Progress from '../../../assects/image/image 7.png'
import Settings from '../../../assects/image/image 8.png'

const useStyles = makeStyles((theme) => ({
    main: {
        maxWidth:'800px',
        minHeight:'236px',
        background: '#75D4F6 0% 0% no-repeat padding-box',
        boxShadow: ' 0px 12px 32px #383B470F',
        border: '0.24px solid rgba(221, 221, 221, 0.1)',
        borderRadius: '12px',
        opacity: '1',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10px',
        width: '100%',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            // padding:'10px',
            // backgroundColor:'red'
        },
      },
    mainSetting:{
        maxWidth:'390px',
        minHeight:'270px',
        background: '#FF9E3F 0% 0% no-repeat padding-box',
        boxShadow: ' 0px 12px 32px #383B470F',
        border: '0.24px solid rgba(221, 221, 221, 0.1)',
        borderRadius: '12px',
        opacity: '1',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10px',
        width: '100%',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            // padding:'10px',
            // backgroundColor:'red'
        },
    },

    container:{
        // display:'flex',
        justifyContent:'center',
        maxWidth:'800px',
        margin:'0 auto',
        textDecoration:'none',
        marginTop:'80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px',
        },
    },
    listendiv:{
        padding:'30px',
        display:'flex',
    },
    listen:{
        color:'white'
    },
    listenPara:{
        padding:'0 0 0 20px',
        color:'white',
        maxWidth:"500px"
    },
    listenText:{
        paddingLeft:"30px",
            [theme.breakpoints.down('sm')]: {
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    listening:{
        width:'130px',
        marginTop:"-93px",
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px',
        },
    },
    listrow:{
        display:'flex',
        justifyContent:"space-between",
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center',
            flexDirection: 'column',
            // padding:'10px',
            // backgroundColor:'red'
        },
    }
}));

function Dashboard() {
    const classes = useStyles();
    return (
      <div className={classes.container} >
          <Link to='/subject' style={{ textDecoration: 'none' }} >
              <div className={classes.main}  >
                 <div className={classes.listenText}>
                     <Typography className={classes.listen} variant="h3" >Listening </Typography>
                     <Typography className={classes.listenPara} variant="h5" >
                         Click here and listen to the subject that you want to listen to </Typography>
                 </div>
                  <div className={classes.listening} >
                      <img src={Listening} alt={Listening} className={classes.listening}/>
                  </div>
          </div>
          </Link>
              <div className={classes.listrow}>
                  <Link to='/process' style={{ textDecoration: 'none' }} >
                      <div className={classes.mainSetting}  >
                          <div className={classes.listenText}>
                              <Typography className={classes.listen} variant="h3" >Progress </Typography>
                              <Typography className={classes.listenPara} variant="h5" >
                                  check here about your progress </Typography>
                          </div>
                          <div className={classes.listening} >
                              <img src={Progress} alt={Listening} className={classes.listening}/>
                          </div>
                      </div>
                  </Link>

                  <Link to='/setting' style={{ textDecoration: 'none' }} >
                      <div className={classes.mainSetting} style={{backgroundColor:"#F372C7" }} >
                          <div className={classes.listenText}>
                              <Typography className={classes.listen} variant="h3" >Settings </Typography>
                              <Typography className={classes.listenPara} variant="h5" >
                                  Click here to go to settings</Typography>
                          </div>
                          <div className={classes.listening} >
                              <img src={Settings} alt={Listening} className={classes.listening}/>
                          </div>
                      </div>
                  </Link>
              </div>
      </div>
    )
  }


export default Dashboard