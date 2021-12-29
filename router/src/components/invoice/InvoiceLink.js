import invoiceData from "./invoiceData";
import {Link, useSearchParams} from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';

const InvoiceLink = ()=> {
  const invoices = invoiceData();
  const [invoiceList, updateInvoiceList ] = useState(invoices);
  const searchInput = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();  

   useEffect (()=> {
     let searchVal = searchParams.get('searchVal');
     if(searchVal) {
      renderInvoiceList(searchVal)
     }    
    },[]);

  const renderInvoiceList = (searchVal, type='render')=> {    
    let price = 2000;
      if(type==='search') {
        setSearchParams({searchVal, price });
      }      
      let regEx = new RegExp(searchVal, 'i');
      let match = invoices.filter(invoice => invoice.name.match(regEx));
      updateInvoiceList(match);       
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
          
        <Link to={`/invoices/${invoice.number}`} key={invoice.number} invoice={invoice}>{invoice.name} </Link> 
      ))}
      </div>
    </>
  )
}

export default InvoiceLink;