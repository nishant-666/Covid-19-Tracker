import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import block4 from './block4.webp'
import block3 from './block3.jpg'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid justify="center" >
    <img src = {block3} style={{width:'90%',marginTop:30}}/>
    <img src = {block4} style={{width:'90%',marginTop:30}}/>
    </Grid>
  );
}
