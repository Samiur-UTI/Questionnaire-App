import React from 'react';
import {options} from '../tempStorage/storage';
import { makeStyles,Grid,Typography } from '@material-ui/core';
import 'fontsource-roboto';
const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center'
    },
    content: {
        textAlign:'justify',
    },
    items: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
  }));
export default function Options() {
    const items = options();
    const classes = useStyles();
    return (
       <div className='ui segment ui container'>
           {items.map(element => (
               <Grid container className={classes.root}>
                   <Grid className={classes.items} item md={6} sm={12} lg={4} key={element.id}>
                        <Typography className={classes.content}>{element.content}</Typography>
                   </Grid>
               </Grid>
            ))}
       </div>
    )
}
