import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Grid, Row } from 'react-flexbox-grid';

import classes from './SampleForm.module.css';

export default props => {
  const [values, setValues] = React.useState({
    name: 'Victor',
    age: '',
    multiline: 'Controlled',
    select: 'EUR',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <Grid fluid>
      <div className='mt-md'>
        <Row>
          <TextField
            id='name'
            label='Nome'
            className={classes.TextField}
            value={values.name}
            onChange={handleChange('name')}
            margin='normal'
          />
        </Row>
      </div>

      <div className='mt-md'>
        <Row>
          <TextField
            id='age'
            label='Idade'
            className={classes.TextField}
            value={values.age}
            type='number'
            onChange={handleChange('age')}
          />
        </Row>
      </div>

      <div className='mt-md'>
        <Row>
          <TextField
            id='multiline'
            label='Várias linhas'
            className={classes.TextField}
            value={values.multiline}
            multiline
            rows='4'
            onChange={handleChange('multiline')}
          />
        </Row>
      </div>

      <div className='mt-md'>
        <Row>
          <TextField
            id='password'
            label='Senha'
            type='password'
            className={classes.TextField}
            value={values.password}
            onChange={handleChange('password')}
          />
        </Row>
      </div>

      <div className='mt-md'>
        <Row>
          <TextField
            id='select'
            label='Selecione um valor'
            className={classes.TextField}
            value={values.currency}
            select
            onChange={handleChange('currency')}
            helperText='Selecione a moeda'
            margin='normal'
            SelectProps={{
              MenuProps: {
                className: classes.Menu,
              }
            }}
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Row>
      </div>
    </Grid>
  )
}