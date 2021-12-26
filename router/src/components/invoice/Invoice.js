import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {getInvoiceByNum, deleteInvoice} from './invoiceData';


export default function Invoice() {
  let params = useParams();
  let invoice = getInvoiceByNum(Number(params.invoiceId));
  let navigate = useNavigate();
  
  return (
    <section className="text-center py-4">
      <h2>Invoice - #{params.invoiceId}</h2>
      <p>
        An invoice of {invoice.amount} has been initiated in the name of {invoice.name} due {invoice.due}
      </p>
      <button className="btn btn-primary" onClick={()=> {
        deleteInvoice(params.invoiceId);
        navigate("/invoices");
      }}>Delete</button>
    </section>
    
  )
}


