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
const useStyles = makeStyles(() => ({
  Main: {
    // display: 'flex',
    width: '100%',
    maxWidth: '400px',
    border: '0.22px solid #DDDDDD80'
    // backgroundColor:'red'
  },
}));

function PodcastAudio(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();

  const classes = useStyles(props);
  const { chapter, descripe, href } = props
  return (
    <div>
    
        {/* <Link to={href} > */}
          <div className={classes.Main}>
            <div>
              {chapter}
            </div>
            <br />
            <div>
              {descripe}asds
            </div>
          </div>
        {/* </Link> */}

     
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