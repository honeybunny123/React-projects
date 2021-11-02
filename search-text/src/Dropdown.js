import React, { useEffect } from 'react';
import './App.css';

function Dropdown() {
  
    
    useEffect(() => {
      
      let dropdownToggle = e => {
        let dropdown = e.target.closest('.dropdown');
        dropdown.classList.toggle('open')
      }

      let selectDropdownOption = e => {
        let dropdownBtnText = e.target.closest('.dropdown').querySelector('.dropbtn span');
        dropdownBtnText.textContent = e.target.textContent;
      }

      let dropdownClose = e => {
        if(!e.target.classList.contains('dropbtn') && !e.target.classList.contains('dropbtn-text')) {
          let dropdowns = document.querySelectorAll('.dropdown');
          dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
      }

      let dropdownBtn = document.querySelectorAll('.dropbtn');
      dropdownBtn.forEach(dropBtn => dropBtn.addEventListener('click', dropdownToggle))

      let dropdownOptions = document.querySelectorAll('.dropdown li');
      dropdownOptions.forEach(dropdownOption => dropdownOption.addEventListener('click', selectDropdownOption));

      document.addEventListener('click', dropdownClose);

      return () => {
        dropdownBtn.forEach(dropBtn => dropBtn.removeEventListener('click', dropdownToggle));
        dropdownOptions.forEach(dropdownOption => dropdownOption.removeEventListener('click', selectDropdownOption));
        document.removeEventListener('click', dropdownClose);
      }
    })

  return (
    <div class="dropdown">
      <button class="dropbtn">
        <span class="dropbtn-text">Select a value</span>
      </button>
      <ul class="dropmenu">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
	  </div>
  );
}

export default Dropdown;
