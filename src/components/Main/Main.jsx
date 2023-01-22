// Import React and necessary hooks
import React, { useState, useEffect, useContext } from 'react';

// Import Material-UI components
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

// Import Speechly hooks
import { useSpeechContext } from '@speechly/react-client';

// Import custom context and styles
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';

// Import child components
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

// ExpenseTracker component that displays the current balance and allows for expense tracker
const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
