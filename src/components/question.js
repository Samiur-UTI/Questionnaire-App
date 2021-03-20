import React from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles,Card,CardContent,Typography,Container } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      minWidth: 500,
      minHeight:300,
      backgroundColor: 'rgb(96, 120, 153)',
      borderRadius : '2em'
     },
    title: {
      fontSize: 35,
      fontFamily: 'aerial',
      marginLeft: 350,
      color: 'rgb(37, 4, 46)'
    },
    body: {
        marginLeft: 350,
        fontSize: 25
    }
  });
export default function Question() {
    const classes = useStyles();
    return (
        <Container maxWidth='inherit'>
            <Card className={classes.root}>
              <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <em>Question 1</em>
                    </Typography>
                    <Typography className={classes.body} variant="body2" component="p">
                        Real Question
                    </Typography>
                </CardContent>
            </Card>
        </Container>
          );
    
}
