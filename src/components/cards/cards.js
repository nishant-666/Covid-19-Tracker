import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './cards.css';



const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return '';
  }

  return (
    <div className="App">
        
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
        <CardContent style={{backgroundColor:" #f48a04",color:"White", padding:20}}>
            <Typography variant="h5" color="White" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="White">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
        <CardContent style={{backgroundColor:" #02ab02",color:"White", padding:20}}>
            <Typography variant="h5" color="white" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="white">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent style={{backgroundColor:" #bf0325",color:"White", padding:20}}>
            <Typography variant="h5" color="white" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="white" >
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;