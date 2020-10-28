import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    background: ' #FF2222 0% 0% no-repeat padding-box',
    opacity: '1',
    font: 'normal normal 900 12px/16px Avenir',
    borderRadius: '23px',
    color: '#FFFFFF',
    width: '146px',
    height: '34px',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'transparent',
      border: '1px solid  #FF2222',
      color: 'red',
      boxShadow: 'none',
    },
  },
  Main: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
}));

function ButtonCore(props) {
  const classes = useStyles(props);
  const {href,title} = props.data
  return (
    <div className={classes.Main}>
      <Button href={href} className={classes.button} type="submit">
        {title}
      </Button>
    </div>
  );
}

export default ButtonCore;