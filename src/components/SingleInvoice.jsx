import React from 'react';
import SideBar from './SideBar';
import "../components/SingleInvoice.css";
import {Link} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {GoDotFill} from "react-icons/go"
const SingleInvoice = () => {
 

  return (
    <div className= 'containerr'>
        <SideBar />
        <div className="contentt">
          <Link to = {'/Landing'}> <IoIosArrowBack  style={{fontSize: '.9rem', fontWeight: 'bolder' , marginRight: '4rem'}} />Go Back</Link>
          <div className="navBtns">
            <div className="status">
              <label htmlFor="status" style={{color: 'white'}}>Status</label>
              <span><button style={{color: '#33D69F', backgroundColor: '#1F2C3F', border: 'none', marginLeft: '1rem', padding: '.5rem' }}> 
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
                <h4>{invoice.streetAddres1}</h4>
                <p>Re-rendering</p>
              </div>
              <div className="campanyAddress">
                <p>Street Address</p>
                <p>City</p>
                <p>Post Code</p>
                <p>Country</p>
              </div>
            </div>
            <div className="clientDetails">
              <div className="invoiceInfo">
                <p>Invoice date</p>
                <h4>22/3/2023</h4><br /> <br />
                <p>Payment Due</p>
                <h4>30/6/2023</h4>
                

              </div>
              <div className="clientInfo">
              <p>Bill To</p>
              <h4>IZANYIBUKA Yvette</h4> <br /> <br />
              <p>KN677</p>
              <p>Kigali</p>
              <p>GIS7882</p>
              <p>Rwanda</p>
              </div>
              <div className="clienttEmail">
              <p>Sent To</p>
              <h4>izanyibukayvette@gmail.com</h4> <br /> <br />
              </div>
            </div>
            <div className="productDetails">
              <div className="table">
              <table>
                <tbody>
  <tr>
    <th>Item Name</th>
    <th>Qty</th>
    <th>Price</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Mangoes</td>
    <td>2Kg</td>
    <td>500</td>
    <td>£ 1000</td>
  </tr>
  </tbody>
  </table>
              </div>
              <div className="amountt">
                <h3>Amount Due</h3>
                <h3>£ 300</h3>
                
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default SingleInvoice;
