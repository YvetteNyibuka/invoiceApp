import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import "../components/SingleInvoice.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const SingleInvoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [totalAmountDue, setTotalAmountDue] = useState(0);

  useEffect(() => {
    const storedInvoices = localStorage.getItem("invoices");
    const initialInvoices = storedInvoices ? JSON.parse(storedInvoices) : [];
    const selectedInvoice = initialInvoices.find(
      (invoice) => invoice.id.toString() === id
    );

    setInvoice(selectedInvoice);
  }, [id]);

  useEffect(() => {
    if (invoice && invoice.items) {
      const calculatedTotalAmountDue = invoice.items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
      setTotalAmountDue(calculatedTotalAmountDue);
    }
  }, [invoice]);

  if (!invoice) {
    return null;
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
    projectDesc,
    status,
    items,
  } = invoice;

  return (
    <div className="containerr">
      <SideBar />
      <div className="contentt">
        <Link
          to={{
            pathname: "/Landing",
            state: {
              totalAmountDue: totalAmountDue, 
            }, 
          }}
        >
          <IoIosArrowBack
            style={{
              fontSize: ".9rem",
              fontWeight: "bolder",
              marginRight: "4rem",
            }}
          />
          Go Back
        </Link>
        <div className="navBtns">
          <div className="status">
            <label htmlFor="status" style={{ color: "white" }}>
              Status
            </label>
            <span>
              <button
                style={{
                  color: "#33D69F",
                  backgroundColor: "#1F2C3F",
                  border: "none",
                  marginLeft: "1rem",
                  padding: ".5rem",
                }}
              >
                <GoDotFill
                  style={{ fontSize: ".5rem", marginRight: ".5rem" }}
                />
                {invoice.status}
              </button>
            </span>
          </div>
          <div className="buttons">
            <button className="btnn" id="eBtn">
              Edit
            </button>
            <button className="btnn" id="dBtn">
              Delete
            </button>
            <button className="btnn" id="mBtn">
              Mark
            </button>
          </div>
        </div>
        <div className="invoiceDetails">
          <div className="companyDetails">
            <div className="companyInfo">
              <h4>{invoice.streetAdress1}</h4>
              <p>{invoice.projectDesc}</p>
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
              <h4>{invoice.invoiceDate}</h4>
              <br /> <br />
              <p>Payment Due</p>
              <h4>{invoice.paymentTerms}</h4>
            </div>
            <div className="clientInfo">
              <p style={{color: "#7C5DFA"}} >Bill To</p>
              <h4>{invoice.clientName}</h4> <br />
              <p>{invoice.streetAdress2}</p>
              <p>{invoice.city2}</p>
              <p>{invoice.postCode2}</p>
              <p>{invoice.country2}</p>
            </div>
            <div className="clienttEmail">
              <p style={{color: "#7C5DFA"}}>Sent To</p>
              <h4>{invoice.clientEmail}</h4> <br /> <br />
            </div>
          </div>
          <div className="productDetails">
            {/* Labels */}
            <div className="table">
              <div className="itemNamee" id="det">
                <label htmlFor="">Item Name</label>
              </div>
              <div className="qty" id="det">
                <label htmlFor="">Qty</label>
              </div>
              <div className="price" id="det">
                <label htmlFor="">Price</label>
              </div>
              <div className="total" id="det">
                <label htmlFor="">Total</label>
              </div>
            </div>
            {/* Data */}
            {items.map((item, index) => (
              <div className="table" key={index}>
                <div className="itemNamee" id="det">
                  <p id="value">{item.itemName}</p>
                </div>
                <div className="qty" id="det">
                  <p id="value">{item.quantity}</p>
                </div>
                <div className="price" id="det">
                  <p id="value">{item.price}</p>
                </div>
                <div className="total" id="det">
                  <p id="value">{item.quantity * item.price}</p>
                </div>
              </div>
            ))}
            <div className="amountt">
              <h3>Amount Due</h3>
              <h3>£ {totalAmountDue}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInvoice;
