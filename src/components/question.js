import React,{useRef,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { makeStyles,Card,CardContent,Typography,Container,Grid } from '@material-ui/core';
import Options from './options';
import {TweenLite, Power2, TimelineLite} from 'gsap';
const useStyles = makeStyles({
    root: {
      minWidth: 100,
      minHeight: 400,
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,157,196,1) 0%, rgba(71,209,255,1) 100%);',
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
    let content = useRef(null);
    useEffect(() => {
      TweenLite.fromTo(content,1.5,{
        y: 50,
        opacity: 0.2,
        ease: Power2.easeIn
      },{
        y:-10,
        opacity:1
      })
    },[])
    return (
        <Container className={classes.section} maxWidth='lg'>
            <Card ref={el => {content = el}} variant='outlined' className={classes.root}>
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
