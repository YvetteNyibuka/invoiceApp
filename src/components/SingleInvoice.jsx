import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import "../components/SingleInvoice.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const SingleInvoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const storedInvoices = localStorage.getItem("invoices");
    const initialInvoices = storedInvoices ? JSON.parse(storedInvoices) : [];
    console.log("Initial Invoices:", initialInvoices);
    const selectedInvoice = initialInvoices.find(invoice => invoice.id.toString() === id);

    // Log the selected invoice to ensure it is correct
    console.log('Selected Invoice:', selectedInvoice);
    setInvoice(selectedInvoice);
  }, [id]);

  if (!invoice) {
    return null; // Add a loading state or a message while data is being fetched
  }

  const {
    streetAdress1,
    city1,
    postCode1,
    country1,
    clientName,
    clientEmail,
    streetAdress2,
    city2,
    postCode2,
    country2,
    invoiceDate,
    paymentTerms,
    items
  } = invoice;

  return (
    <div className= 'containerr'>
        <SideBar />
        <div className="contentt">
          <Link to = {'/Landing'}> <IoIosArrowBack  style={{fontSize: '.9rem', 
          fontWeight: 'bolder' , marginRight: '4rem'}} />Go Back</Link>
          <div className="navBtns">
            <div className="status">
              <label htmlFor="status" style={{color: 'white'}}>Status</label>
              <span><button style={{color: '#33D69F', backgroundColor: '#1F2C3F', 
              border: 'none', marginLeft: '1rem', padding: '.5rem' }}> 
              <GoDotFill style={{fontSize: '.5rem', marginRight: '.5rem'}}/>Paid</button></span>
            </div>
            <div className="buttons">
              <button className='btnn' id='eBtn'>Edit</button>
              <button className='btnn' id='dBtn'>Delete</button>
              <button className='btnn' id='mBtn'>Mark</button>
            </div>
          </div>
          <div className="invoiceDetails">
            <div className="companyDetails">
              <div className="companyInfo">
                <h4>{invoice.streetAdress1}</h4>
                <p>Re-branding</p>
              </div>
              <div className="campanyAddress">
                <p>{invoice.streetAdress1}</p>
                <p>{invoice.city1}</p>
                <p>{invoice.postCode1}</p>
                <p>{invoice.country1}</p>
              </div>
            </div>
            <div className="clientDetails">
              <div className="invoiceInfo">
                <p>Invoice date</p>
                <h4>{invoice.invoiceDate}</h4><br /> <br />
                <p>Payment Due</p>
                <h4>{invoice.paymentTerms}</h4>
                

              </div>
              <div className="clientInfo">
              <p>Bill To</p>
              <h4>{invoice.clientName}</h4> <br /> 
              <p>{invoice.streetAdress2}</p>
              <p>{invoice.city2}</p>
              <p>{invoice.postCode2}</p>
              <p>{invoice.country2}</p>
              </div>
              <div className="clienttEmail">
              <p>Sent To</p>
              <h4>{invoice.clientEmail}</h4> <br /> <br />
              </div>
            </div>
            {items.map((item, index) => (
            <div className="productDetails">
            
            <div className="table" key={index}>
              <div className="itemNamee" id='det'>
              <label htmlFor="">item Name</label>
              <p id='value'>{item.itemName}</p>
              </div>
              <div className="qty" id='det'>
              <label htmlFor="">Qty</label>
              <p id='value'>{item.quantity}</p>
              </div>
              <div className="price" id='det'>
              <label htmlFor="">Price</label>
              <p id='value'>{item.price}</p>
              </div>
              <div className="total" id='det'>
              <label htmlFor="">Total</label>
              <p id='value'>{item.quantity * item.price}</p>
              </div>
              </div>

              <div className="amountt">
              <h3>Amount Due</h3>
              <h3>£ {item.quantity * item.price}</h3>
              </div>
            
            </div>
            ))}
          </div>

        </div>
    </div>
  );
};

export default SingleInvoice;
