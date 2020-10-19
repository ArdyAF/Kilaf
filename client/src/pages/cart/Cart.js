import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, makeStyles, Paper, Divider, Typography, Button, Grid } from '@material-ui/core';
import { getCarts } from '../../store/actions/actionsItem'


import CartDetail from '../../components/cards/CartDetail'

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [localAmount, setLocalAmount] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState('0');
  const [tax, setTax] = useState('0');

  const carts = useSelector(state => state.reducerItem.carts);
  console.log(carts,'carts');

  useEffect(() => {
    carts.map(cart => {
      let value = cart.amount + localAmount
      const formatted = new Intl.NumberFormat('id', { currency: 'IDR', style: 'currency'}).format(value)
      setLocalAmount(formatted)
      // console.log(cart, 'watch cart');
    })
  },[carts])

  useEffect(() => {
    dispatch(getCarts())
  }, [dispatch])

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={8}>
          <Paper elevation={2} className={classes.contentLeftTitle}>
            Your Cart
          </Paper>
          <Box className={classes.contentLeftBody}>
            {carts.map(cart => {
              return (
                <CartDetail cart={cart} />
              )
            })}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.contentRightItem}>
            <Typography style={{padding: 10}}>
              Summary
            </Typography>
            <Divider />
            <Box className={classes.boxItem}>
              <Typography>Subtotal</Typography>
              <Typography>{localAmount}</Typography>
            </Box>
            <Divider />
            <Box className={classes.boxItem}>
              <Typography>Biaya Pengiriman</Typography>
              <Typography>{deliveryPrice}</Typography>
            </Box>
            <Divider />
            <Box className={classes.boxItem}>
              <Typography>Tax</Typography>
              <Typography>{tax}</Typography>
            </Box>
            <Divider />
            <Box className={classes.boxItem}>
              <Typography>Total</Typography>
              <Typography>{localAmount}</Typography>
            </Box>
            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Button variant="outlined" color="primary">
                CHECKOUT
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    height: '100vh',
    margin: 10
  },
  contentLeft: {
    width: '65%',
    // border: '1px red solid',
    padding: 10
  },
  contentLeftTitle: {
    width: '93%',
    padding: 10
  },
  contentLeftBody: {
    width: '95%',
    // border: '1px black solid',
  },
  contentLeftList: {
    display: 'flex',
  },
  contentRight: {
    width: '35%',
    height: '40%',
    // border: '1px red solid',
    padding: 10
  },
  contentRightItem: {
    padding: 10,
    height: '45vh'
  },
  boxItem: {
    display: 'flex', 
    justifyContent: 'space-between',
    padding: 10,
  }
}))