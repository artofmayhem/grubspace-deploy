import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import initialFormValues from '../state/initial-states/index'
import {api} from '../api/api'

export default function Register() {
  const history = useHistory();
  const [formValues, setFormValues] = useState({initialFormValues});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const errors = validateForm();
    api
      .post('/users', formValues)
      .then(response => {
        history.push('/about');
      })
      .catch(error => {
        // setFormErrors({...formErrors, ...errors});
      });
    }
  return null
}