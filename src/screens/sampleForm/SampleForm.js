import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Grid, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import classes from './SampleForm.module.css';

const form = props => {
  console.log('props', props);
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

  const handleChange = name => event => {
    console.log('handleChange', name, event)
    props.onEditForm(name, event.target.value);
  };

  return (
    <Grid fluid>
      <div className='mt-md'>
        <Row>
          <TextField
            id='name'
            label='Nome'
            className={classes.TextField}
            value={props.form.name}
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
            value={props.form.age}
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
            value={props.form.multiline}
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
            value={props.form.password}
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
            value={props.form.currency}
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
  );
}

const mapStateToProps = state => {
  return {
    form: state.form.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditForm: (fieldName, value) => dispatch(actions.editForm(fieldName, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(form);
