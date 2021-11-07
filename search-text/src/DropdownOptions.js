import React, {useEffect} from 'react';

const DropdownOptions = props => {
  // let {dropdownData, setDropdownData} = props;
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        if(res.ok) 
          return res.json()
      })
      .then(data => {
        const dropdownOptions = data.map(dataEl => dataEl.title);
        props.setDropdownData(dropdownOptions)
      }        
      )  

      // function searchDropdown(e) {
      //   let searchVal = e.target.value;
      //   let newDropOptions = dropdownData.filter(dropOption => 
      //     dropOption.includes(searchVal));
      //     renderDropmenu(newDropOptions);
      // }

      // let dropdownSearch = document.querySelectorAll('.dropdown-search');
      // dropdownSearch.forEach(search => search.addEventListener('keyup', searchDropdown)
      // )
  }, [])

  
  const dropdownDataOption = props.dropdownData 
  ? props.dropdownData.map(dropdownDataOption => <li>{dropdownDataOption}</li>)
  : null
  
  return (
    <ul>
      {dropdownDataOption}
    </ul>
  )
}

export default DropdownOptions;
