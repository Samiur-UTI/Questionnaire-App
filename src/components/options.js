import React from 'react';
import {options} from '../tempStorage/storage';
import { makeStyles,Grid} from '@material-ui/core';
import 'fontsource-roboto';
import Option from '../components/option';
const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      
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
       <div style ={{borderRadius: 20}} className='ui segment ui container'>
               <Grid container className={classes.root}>
                   <Grid className={classes.items} item md={6} sm={12} lg={4}>
                        <Option/>
                   </Grid>
               </Grid>
       </div>
    )
}
