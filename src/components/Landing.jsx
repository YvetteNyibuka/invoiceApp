import React, { useState } from "react";
import "./display.css";
import NewInvoice from "./NewInvoice";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { GrAddCircle } from 'react-icons/gr';

function Landing() {
  const storedInvoices = localStorage.getItem("invoices");
  console.log(storedInvoices)
  const initialInvoices = storedInvoices ? JSON.parse(storedInvoices) : [];
  const [invoices, setInvoices] = useState(initialInvoices);
  console.log("======",invoices[0])
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    if (selectedValue === "all" || !selectedValue) {
      setInvoices(initialInvoices);
    } else {
      const filteredInvoices = initialInvoices.filter(
        (invoice) => invoice.status.toLowerCase() === selectedValue
      );
      setInvoices(filteredInvoices);
    }
  };

  const openModal = () => {
    console.log("Opening modal"); // Debugging statement
    setShowModal(true);
  };

   const closeModal = () => {
    console.log("Closing modal"); // Debugging statement
    setShowModal(false);
  };

  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
    closeModal();
  };

  return (
    <>
    <div className="contain">
      
      <SideBar />
      <div className="content">
        <div className="nav">
          <div className="totalinvoice">
            <h3>Invoices</h3>
            <p>There are {invoices.length} Invoice(s)</p>
          </div>
          <div className="filterinvoice">
            <p>
              Filter by
              <select name="cars" id="cars" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
              </select>
            </p>
          </div>
          
          <button id="add" onClick={openModal}>
            <GrAddCircle style={{ color: 'white', fontSize: '1.5rem' }} />
            New Invoice
          </button>
        </div>

        <div className="invoicelist">
        
          {invoices.map((invoice) => (
            <Link to={`/single_invoice/${invoice.id}`} className="invoiceRow" key={invoice.id}>
              <div className="invoiceElement">{invoice.streetAdress1}</div>
              <div className="invoiceElement">{invoice.invoiceDate}</div>
              <div className="invoiceElement">{invoice.clientName}</div>
              <div className="invoiceElement">{invoice.clientEmail}</div>
              <div className="invoiceElement">{invoice.paymentTerms}</div>
            </Link>
          ))}
        </div>
      </div>
      {console.log(showModal)}
       {showModal && (
       
            <NewInvoice/>
      )}

    </div>
    </>
  );
}

export default Landing;
