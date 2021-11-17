import invoiceData from "./invoiceData";
import {Link, Outlet} from 'react-router-dom';

const InvoiceLink = ()=> {
  const invoices = invoiceData();

  return (
    <div className="invoice">{
      invoices.map(invoice => (
        <Link to={`/invoices/${invoice.number}`} key={invoice.number} invoice={invoice}>{invoice.name}</Link> 
      ))
    }
    <Outlet/>
    </div>
  )
}

export default InvoiceLink;