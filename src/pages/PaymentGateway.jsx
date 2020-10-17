import { CardContent, FormControl, InputLabel, OutlinedInput, Typography, Card, Grid, Button, makeStyles, CardActions } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const mapStateToProps = (state) => ({
  recipe: state.recipe.selectedRecipe,
});

const useStyles = makeStyles({
  card: {
    maxWidth: 520,
    margin: 50,
  },
});

const PaymentGateway = ({ recipe }) => {

  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('2020-10');
  const [cvv, setCVV] = useState('');

  if (recipe) {
    return (
      <div className="payContainer">
        <Typography variant="h2">{`Buy ${recipe.name} for $${recipe.price}`}</Typography>
        <Card className={classes.card} elevation={4}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>{'Name on Card'}</InputLabel>
                  <OutlinedInput
                    label='Name on Card'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>{'Card Number'}</InputLabel>
                  <OutlinedInput
                    type="number"
                    maxLength={16}
                    label='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16)
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>{'Valid Through'}</InputLabel>
                  <OutlinedInput
                    type="month"
                    label='Valid Through'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>{'CVV'}</InputLabel>
                  <OutlinedInput
                    type="number"
                    label='CVV'
                    value={cvv}
                    onChange={e => setCVV(e.target.value)}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant="contained">{`Pay Now`}</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
  else {
    return (
      <Redirect to="/" />
    )
  }
}

export default connect(mapStateToProps)(PaymentGateway);