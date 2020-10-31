import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Listening from "../assects/image/image 6.png";
import student from "../assects/image/stu01.jpeg";
import procast from '../assects/image/Vector.png'
import page from '../assects/image/Vector (1).png'
import germ from '../assects/image/dimons.png'
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth:'800px',
    minHeight:'236px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: ' 0px 12px 32px #383B470F',
    border: '0.24px solid rgba(221, 221, 221, 0.1)',
    borderRadius: '12px',
    opacity: '1',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10px',
    width: '100%',
    margin:'0 auto',
    paddingLeft:'20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      // padding:'10px',
      // backgroundColor:'red'
    },
  },
  avatarFrame: {
    height: 'auto',
    width: '146px',
  },
  avatar: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    border: '3px solid white',
    boxShadow: '0 12px 18px rgba(47, 47,51, 0.16)'
  },
  Photosynthasis:{
    color:'#0C0364'
  },
  cardDiv:{
      padding:"22px"
  },
  icons:{
    maxWidth:'700px',
    display:'flex',
    justifyContent:'flex-end',
    marginLeft:'20px'
  },
  icon:{
    display:"flex",
    width:'22px'
  },
  iconcontent:{
    display:'flex',
    maxWidth:'140px'
  },
  descripe:{
    color:'#0C0364',
    minHeight:'130px'
  }
}));

function Chapter(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();

  const classes = useStyles(props);
  const { chapter, descripe, href,podcast,page,gem } = props
  return (
    <div>
        <Link to={href} style={{ textDecoration: 'none' }}>
          <div className={classes.main}>
            <div  >
              <div className={classes.avatarFrame}>
              <img src={student} className={classes.avatar}/>
              </div>
            </div>
            <div className={classes.cardDiv} >
              <Typography className={classes.Photosynthasis} variant='h4' >{chapter}  </Typography>
              <Typography variant='h6' className={classes.descripe} >
               {descripe}
              </Typography>
              <div className={classes.icons} >
                <div className={classes.iconcontent} >
                  <img src={procast} className={classes.icon}/>
                  <Typography className={classes.Photosynthasis} > {podcast}  Podcasts</Typography>
                </div>
                <div className={classes.icons}>
                  <img src={page} className={classes.icon}/>
                  <Typography className={classes.Photosynthasis} >  Page No {page} </Typography>
                </div>
                <div className={classes.icons}>
                  <img src={germ} className={classes.icon}/>
                  <Typography className={classes.Photosynthasis} >{gem} Gems</Typography>
                </div>
              </div>
            </div>


            {/*<div>*/}
            {/*  {chapter}*/}
            {/*</div>*/}
            {/*<br />*/}
            {/*<div>*/}
            {/*  {descripe}*/}
            {/*</div>*/}
          </div>
        </Link>

     
    </div>
  );
}


function ChapterAudio(props) {
  const classes = useStyles(props);
  const { chapter, descripe } = props
  return (
    <div>
      asdasdasd
    </div>
  );
}




export default Chapter;