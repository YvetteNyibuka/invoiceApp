import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import "../components/display.css";

const SingleInvoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    const selectedInvoice = existingInvoices.find(invoice => invoice.id === parseInt(id));
    setInvoice(selectedInvoice);
  }, [id]);

  if (!invoice) {
    return <div>No invoice found with ID: {id}</div>;
  }

  return (
    <div className={`container  ? "dark-mode" : ""}`}>
        <SideBar />
        <div className="content">
   
          <h2>Invoice Details</h2>
          <p>ID: {invoice.id}</p>
          <p>Company: {invoice.company}</p>
          <p>Client: {invoice.client}</p>
          <p>Invoice ID: {invoice.invoiceId}</p>
          <p>Due Date: {invoice.dueDate}</p>
          <p>Amount: {invoice.status}{invoice.amount}</p>
          <p>Status: </p> 

    </div>
    </div>
  );
};

export default SingleInvoice;
