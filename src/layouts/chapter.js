import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  Main: {
    // display: 'flex',
    width: '100%',
    justifyContent: 'center',
    maxWidth:'800px',
// backgroundColor:'red'
  },
}));

function Chapter(props) {
  const classes = useStyles(props);
  const {chapter, descripe  } = props
  return (
    <div className={classes.Main}>
      <div>
          {chapter}
      </div>
      <br/>
      <div>
          {descripe}
        </div>
    </div>
  );
}





export default Chapter;