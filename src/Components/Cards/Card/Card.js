import React from 'react';
import { Card } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
//Style
import styles from './Card.module.css';

const Card = () => {
  return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>
      </Grid>
  )
}

export default Card
