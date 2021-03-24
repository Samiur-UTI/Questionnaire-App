import React from 'react';
import { makeStyles,Grid} from '@material-ui/core';
import 'fontsource-roboto';
import Option from '../components/option';
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
const roughStyle = () => {
    return (
        {
            borderRadius:20,
            background: '#009DC4'
        }
    )
}
export default function Options() {
    const classes = useStyles();
    return (
       <div style ={roughStyle()} className='ui segment ui container'>
               <Grid container className={classes.root}>
                   <Grid className={classes.items} item md={6} sm={12} lg={4}>
                        <Option/>
                   </Grid>
               </Grid>
       </div>
    )
}
