import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: '100%',
        width: '160px',
        position: 'fixed',
        zIndex: '1',
        top: '0',
        left: '0',
        backgroundColor: '#111',
        overflowX: 'hidden',
        paddingTop: '20px',
    }
}));

function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            <div className={classes.sidebar} >
                <List component="nav" aria-label="secondary mailbox folder">
                    <NavLink className="nav-link" to='/home'>
                        <ListItem
                            button
                        >
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>
                    <NavLink className="nav-link" to='/progress'>
                        <ListItem
                            button
                        >
                            <ListItemText primary="Progress" />
                        </ListItem>
                    </NavLink>

                </List>
            </div>
        </div>

    )
}


export default Sidebar