// src/components/CountryDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountries } from '../services/countries';
import './Country.css';

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  const formatPopulation = population => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountries();
        const selectedCountry = data.find(
          country => country.name.common === countryName
        );
        setCountry(selectedCountry);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [countryName]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <main className=' d-flex justif-content-center  align-items-center ' style={{height: "100vh", width: "100%"}}>
    <section className='d-flex mb-5 justify-content-evenly flex-wrap align-items-center  w-100'>

    <div className='countryFlagBox'>
    <img src={country.flags.png} className="imageBox display-1" style={{width: "600px",height: "400px", borderRadius: "10px"}} alt={`${country.name.common} Flag`} />
    </div>

    <div className='countryDetailSec  d-flex flex-column gap-5'>

    <div className='topSec'>
    <h3>{country.name.common}</h3>
    </div>

    <div className='bottomSec d-flex flex-row gap-5 justify-content-start align-items-start '>
    
    <ul className='firstSec list-unstyled d-flex flex-column m-0 gap-2'>
    {country.nativeName && (
              <li>Native Name: {country.nativeName.common} </li>
            )}
      <li><b>Population:</b> {formatPopulation(country.population)} </li>
      <li><b>Region:</b> {country.region} </li>
      <li><b>Sub Region:</b> {country.subregion} </li>
      <li><b>Capital:</b> {country.capital} </li>
    </ul>
    
    <ul className='secondSec list-unstyled d-flex flex-column m-0 gap-2'>
      <li><b>Top Level Domain:</b>  {country.tld[0]}</li>
      <li><b>Currencies:</b> {Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</li>
      <li className='' style={{maxWidth: "200px"}}><b>Languages:</b> {Object.values(country.languages).map(language => `${language} `).join(', ')} </li>
    </ul>

    </div>
      

    </div>

    </section>
      
    </main>
  );
};

export default CountryDetail;
