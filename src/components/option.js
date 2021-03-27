import React from 'react';
import {options} from '../tempStorage/storage';
import {makeStyles,Typography,Button} from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display: 'inline-flex',
        margin: '5px 5px 5px 5px',
        color: '#0b275b'
    }
})
export default function Option() {
    const classes = useStyles();
    const items = options();
    return (
        <div className='ui item'>
                {items.map((element) => (
                    <Button className={classes.root} variant="outlined" key={element.id}><Typography variant="h5">{element.content}</Typography></Button>
                ))}
        </div>
    )
}
