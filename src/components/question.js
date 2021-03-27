import React from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles,Card,CardContent,Typography,Container,Grid } from '@material-ui/core';
import Options from './options';
const useStyles = makeStyles({
    root: {
      minWidth: 100,
      minHeight: 400,
      backgroundColor: '#009DC4',
      borderRadius : '2em',
      marginTop:'5%',
      borderStyle: 'inset',
      boxShadow: '5px 5px 5px 5px #58427C'
     },
    title: {
      fontSize: 35,
      fontFamily: 'roboto',
      color: 'rgb(37, 4, 46)',
      display: 'flex',
      justifyContent: 'center'
    },
    body: {
        marginLeft: 50,
        fontSize: 25,
        display: 'flex',
        justifyContent: 'center'
    }
  });
export default function Question() {
    const classes = useStyles();
    return (
        <Container className={classes.section} maxWidth='lg'>
            <Card variant='outlined' className={classes.root}>
              <CardContent>
                    <Grid container>
                        <Grid item sm={12} md={6} lg={6}>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                              <em>Question 1</em>
                          </Typography>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <Options/>
                        </Grid>
                      </Grid>
                </CardContent>
            </Card>
        </Container>
          );
    
}
