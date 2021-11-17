import React from 'react'
import { useParams } from 'react-router-dom';
import {getInvoiceByNum} from './invoiceData';


export default function Invoice() {
  let params = useParams();
  let invoice = getInvoiceByNum(Number(params.invoiceId));
  console.log(invoice);
  return (
    <section>
      <h2>Invoice - #{params.invoiceId}</h2>
      <p>
        An invoice of {invoice.amount} has been initiated in the name of {invoice.name} due {invoice.due}
      </p>
    </section>
    
  )
}


