import React, {useEffect, useRef} from 'react';

const DropdownMenu = props => {
   let {dropdownData, setDropdownData} = props;
   let dropdownOptions = useRef(null);
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        if(res.ok) 
          return res.json()
      })
      .then(data => {
        dropdownOptions.current = data.map(dataEl => dataEl.title);
        setDropdownData(dropdownOptions.current);        
      }        
      )         
  }, [])
  
  const dropdownDataOption =dropdownData 
  ? dropdownData.map(dropdownDataOption => <li>{dropdownDataOption}</li>)
  : null

  function searchDropdown(e) {
    let searchVal = e.target.value;
    if(dropdownOptions.current) {
     let newDropOptions = dropdownOptions.current.filter(dropOption => 
       dropOption.includes(searchVal));
       setDropdownData(newDropOptions);
    }
   
 }
  
  return (
    <div className="dropmenu">
      <input className="dropdown-search" placeholder="Search in Dropdown" onKeyUp={searchDropdown}/>
      <ul>
        {dropdownDataOption}
      </ul>
    </div>
    
  )
}

export default DropdownMenu;
