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
import ReactPlayer from 'react-player'

const useStyles = makeStyles(() => ({
  Main: {
    width: '350px',
    height: '250px',
    background: '#FAFAFA 0% 0% no-repeat padding-box',
    borderRadius: '12px',
    opacity: '1',
    textAlign: 'center',
    boxShadow: '0px 12px 32px #383B470F',
  },
  Text: {
    textAlign: 'center',
    fontSize:'14px',
    fontFamily:'Avenir',
    fontWeight:'400',
    letterSpacing: '0.53px',
    color: '#383B47',
    opacity: '1',
    padding: '10px',
    whiteSpace: 'pre-line'

  },
  Texts: {
    marginTop: '28px',
  },
  Image: {
    justify: 'center',
    marginTop: '30px',
    width:'100%',
    height:'48px',
    '&:hover': {
      color: 'primary',
    },
  },
}));

function PodcastAudio(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();

  const classes = useStyles(props);
  const { chapter, descripe, href,audio } = props
  return (
    <div>
      <div className={classes.Main}>
        <div className={classes.Image}>
          <img src="" alt=""/>
        </div>
        <div className={classes.Texts}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          <Typography className={classes.Text} variant="subtitle1">
            same
          </Typography>
          <audio controls>
            <source src={audio} type="audio/mpeg"/>
          </audio>
        </div>
      </div>
    </div>
  );
}


function ChapterAudio(props) {
  const classes = useStyles(props);
  const { chapter, descripe } = props
  return (
    <div>
      asdasdasd
      {/* <PodcastAudio     /> */}
    </div>
  );
}




export default PodcastAudio;