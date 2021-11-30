import invoiceData from "./invoiceData";
import {Link, useSearchParams, useLocation} from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';

const InvoiceLink = ()=> {
  const invoices = invoiceData();
  const [invoiceList, updateInvoiceList ] = useState(invoices);
  const searchInput = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();  
  let location = useLocation(); 
  console.log(location);

   useEffect (()=> renderInvoiceList( searchParams.get('searchVal')),[searchParams]);

  const renderInvoiceList = (searchVal, type='render')=> {    
    
    if(searchVal){
      if(type==='search') {
        setSearchParams({searchVal});
      }      
      let regEx = new RegExp(searchVal, 'i');
      let match = invoices.filter(invoice => invoice.name.match(regEx));
      updateInvoiceList(match);      
    }    
  }

  const clearInput = ()=> {
    searchInput.current.value = null
  }

  const search = ()=>{
    renderInvoiceList(searchInput.current.value, 'search')
  }

  return (
    <>
      <div className="input-group mb-3 ms-3">
        <input type="text" className="form-control" placeholder="Search invoice" ref={searchInput}/>
        <button className="btn btn-secondary" onClick={clearInput}>Clear</button>
        <button className="btn btn-primary" onClick={search}>Search</button>
      </div>
      <div className="d-flex justify-content-around">
        {invoiceList.map(invoice => (
          
        <Link to={`/invoices/${invoice.number}${location.search}`} key={invoice.number} invoice={invoice}>{invoice.name}</Link> 
      ))}
      </div>
    </>
  )
}

export default InvoiceLink;