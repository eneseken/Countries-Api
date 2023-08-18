// src/components/CountryFilter.js
import React from 'react';
import './Country.css'

const CountryFilter = ({ regions, selectedRegion, onRegionChange, searchQuery, onSearchChange }) => {
  return (
    <div className="country-filter  container  d-flex justify-content-between my-4 align-items-center ">
      
      <div class="input-group w-50">
      <span class="input-group-text bg-transparent border-0" id="basic-addon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
</svg>
                </span>
      <input 
      type="text" 
      class="form-control outline-0 border-0 "
      placeholder="Search..." 
      ria-label="Input group example" 
      aria-describedby="basic-addon1"
      value={searchQuery}
      onChange={onSearchChange}
      />

      </div>
              
                

      <select className='form-select p-2 h-100' style={{width: "200px"}} value={selectedRegion} onChange={onRegionChange}>
        <option value="">All Regions</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryFilter;
