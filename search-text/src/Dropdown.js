import React, { useEffect, useState } from 'react';
import './App.css';
import DropdownOptions from './DropdownOptions'

const Dropdown = ()=> {

  const [dropdownData, setDropdownData] = useState(null);
     
    useEffect(() => {    
      
      let dropdownToggle = e => {
        let dropdown = e.target.closest('.dropdown');
        dropdown.classList.toggle('open')
      }

      let dropdownBtn = document.querySelectorAll('.dropbtn');
      dropdownBtn.forEach(dropBtn => dropBtn.addEventListener('click', dropdownToggle))

      let selectDropdownOption = e => {
        let dropdownBtnText = e.target.closest('.dropdown').querySelector('.dropbtn span');
        dropdownBtnText.textContent = e.target.textContent;
      }

      let dropdownOptions = document.querySelectorAll('.dropdown li');
      dropdownOptions.forEach(dropdownOption => dropdownOption.addEventListener('click', selectDropdownOption));

      let dropdownClose = e => {
        if(!e.target.classList.contains('dropbtn') && !e.target.classList.contains('dropbtn-text') && !e.target.classList.contains('dropdown-search')) {
          let dropdowns = document.querySelectorAll('.dropdown');
          dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
      }

      document.addEventListener('click', dropdownClose);

      


      return () => {
        dropdownBtn.forEach(dropBtn => dropBtn.removeEventListener('click', dropdownToggle));
        dropdownOptions.forEach(dropdownOption => dropdownOption.removeEventListener('click', selectDropdownOption));
        document.removeEventListener('click', dropdownClose);
        // dropdownSearch.forEach(search => search.removeEventListener('keyup', searchDropdown))
      }
    })

  return (
    <div className="dropdown">
      <button className="dropbtn">
        <span className="dropbtn-text">Select a value</span>
      </button>
      <div className="dropmenu">
        <input className="dropdown-search" placeholder="Search in Dropdown"/>
        <DropdownOptions dropdownData={dropdownData} setDropdownData={setDropdownData}/>     
      </div>       
	  </div>
  );
}

export default Dropdown;
