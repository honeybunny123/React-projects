import React, {useEffect} from 'react';
import '../css/dropdown.css';

const Dropdown = (props)=> {

  useEffect(()=> {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownOptions = dropdownMenu.querySelectorAll('li');
    
      document.addEventListener('click', e=> {
        if(!e.target.classList.contains('dropdown-btn'))
          dropdownMenu.style.display = 'none';
      })
      

    function openDropdown() {
      dropdownMenu.style.display = 'block';
    }

    dropdownBtn.addEventListener('click', openDropdown);

    function AddDropdownHandler(e) {
      dropdownHandler(e, dropdownOptions, dropdownMenu, dropdownBtn)
    }

    dropdownOptions.forEach(option=> option.addEventListener('click', AddDropdownHandler));
    
    return function cleanup() {

      dropdownBtn.removeEventListener('click', openDropdown);

      dropdownOptions.forEach(option=> option.removeEventListener('click',AddDropdownHandler)); 
    }
    
    
  });

    function sortRows(e) {

      const compare = attr => (a, b)=> a[attr] < b[attr] ? -1 : 1 ; 

      if(props.data) {
        if(e.target.innerText === 'Sort by Name') {
          props.data.sort(compare('name'));
        } else if(e.target.innerText === 'Sort by ID') {
          props.data.sort(compare('id'));
        }
  
        props.setData([...props.data]);
      }

      
  }
  
  function dropdownHandler(e, dropdownOptions, dropdownMenu, dropdownBtn) {
    
      

      dropdownOptions.forEach(option => option.classList.remove('selected'));
      e.target.classList.add('selected');
      dropdownBtn.innerText = e.target.innerText;  
      dropdownMenu.style.display = 'block';
    
     sortRows(e);
    
  }

  return (
    <div className="dropdown">
      <p className="dropdown-btn">Sort by ID</p>
      <div className="dropdown-menu">
        <ul>
          <li className="selected" >Sort by ID</li>
          <li >Sort by Name</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;