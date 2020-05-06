import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { fetchCountries } from '../../api';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './country.css';
import Grid from '@material-ui/core/Grid';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
    <FormControl style={{width:"300px",marginBottom:20}}  variant="outlined" className={styles.formControl}>
       <InputLabel id="demo-simple-select-outlined-label">Worldwide</InputLabel>
      <Select label="WorldWide"  onChange={(e) => handleCountryChange(e.target.value)}>
      <option value="">WorldWide</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Select>
    </FormControl>
    </Grid>
    </Grid>

  );
};

export default Countries;