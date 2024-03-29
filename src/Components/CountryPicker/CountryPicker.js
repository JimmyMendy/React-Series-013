import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import { fetchCountries } from '../../api';
//style
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    //console.log(fetchedCountries)
    fetchAPI();
  },[setFetchedCountries])

  return (
    <FormControl className={StylesProvider.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
