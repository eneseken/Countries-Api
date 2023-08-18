import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCountries } from '../services/countries';
import CountryFilter from './CountryFilter';
import './Country.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const formatPopulation = population => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const regions = [...new Set(countries.map(country => country.region))];

  const handleRegionChange = event => {
    const region = event.target.value;
    setSelectedRegion(region);
    
    if (region === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country => country.region === region);
      setFilteredCountries(filtered);
    }
  };

  const handleSearchChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = countries.filter(
      country => country.name.common.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };
  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <CountryFilter
        regions={regions}
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
    <section className=' container d-flex flex-wrap  justify-content-center flex-row gap-3 align-items-start'>
    {filteredCountries.map(country => (
      <div className='cardMain  d-flex flex-column mt-5' style={{width: "300px", height: "100%"}}>

          <div className='imgBox'>
          <img src={country.flags.png} className="" style={{width: "300px",height: "150px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} alt={`${country.name.common} Flag`} />
          </div>

          <div className='countryInfo   d-flex flex-column gap-2 p-3 justify-content-start align-items-start' style={{borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
          <h5 style={{maxWidth: "300px", fontSize: "16px"}}>{country.name.common}</h5>
          <span style={{maxWidth: "300px", fontSize: "16px"}}><b>Population:</b> {formatPopulation(country.population)}  </span>
          <span style={{maxWidth: "300px", fontSize: "16px"}}><b>Region:</b> {country.region}</span>
          <span style={{maxWidth: "250px", fontSize: "16px"}} className="text-truncate"><b>Capital:</b> {country.capital}</span>
          <Link to={`/countries/${country.name.common}`} className="d-flex justify-content-start align-items-start w-100" style={{outline: "0", border: "0", textDecoration: "none", }}> More </Link>
          </div>

        </div>
    ))}
    </section>
  
        
    </div>
    );
};

export default CountryList;
