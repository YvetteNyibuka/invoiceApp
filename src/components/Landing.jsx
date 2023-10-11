import React, { useState } from "react";
import "./display.css";
import NewInvoice from "./NewInvoice";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { FaPlusCircle } from "react-icons/fa";
import {BsFillCircleFill} from "react-icons/bs";
import {IoIosArrowForward} from "react-icons/io";

function Landing() {
  const location = useLocation();
  const totalAmountDue =
    location.state && location.state.totalAmountDue
      ? location.state.totalAmountDue
      : 0;

  const storedInvoices = localStorage.getItem("invoices");
  const initialInvoices = storedInvoices ? JSON.parse(storedInvoices) : [];
  const [invoices, setInvoices] = useState(initialInvoices);
  const [showModal, setShowModal] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "#1F2C3F";
      case "Pending":
        return "#2B2736";
      case "Draft":
        return "#292C45";
      default:
        return "gray";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "Paid":
        return "#33D69F";
      case "Pending":
        return "#FF8F00";
      case "Draft":
        return "#FFFFFF";
      default:
        return "black";
    }
  };

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
    setShowModal(true);
  };

  const closeModal = () => {
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
              <h3 id="navv">Invoices</h3>
              <p   id="nav">There are {invoices.length} Invoice(s)</p>
            </div>
            <div className="filterinvoice">
              <p id="nav">
                Filter by Staus:
                <select name="statuss" id="statuss" onChange={handleFilterChange}>
                  <option value="all">All</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="draft">Draft</option>
                </select>
              </p>
            </div>

            <button id="add" onClick={openModal}>
              <FaPlusCircle /> New 
            </button>
          </div>

          <div className="invoicelist">
            {invoices.map((invoice) => (
              <Link
                to={{
                  pathname: `/single_invoice/${invoice.id}`,
                  state: { invoiceData: invoice }, 
                }}
                className="invoiceRow"
                key={invoice.id}
              >
                <div className="left">
                <div className="invoiceElement">{invoice.streetAdress1}</div>
                <div className="invoiceElement">{invoice.invoiceDate}</div>
                <div className="invoiceElement">{invoice.clientName}</div>
                </div>
                <div className="right">
                <div
                  className="invoiceElement">
                  £{totalAmountDue}
                </div>
                <div className="invoiceElement">
                  <button
                    id="statusBtn"
                    style={{
                      backgroundColor: getStatusColor(invoice.status),
                      color: getStatusTextColor(invoice.status),
                    }}
                  >
                    <BsFillCircleFill id="circleFill"
                    />
                    {invoice.status}
                  </button> <IoIosArrowForward style={{ fontSize: "1rem", color: "#7C5DFA" }}/>
                </div>
                </div>
                
              </Link>
            ))}
          </div>
        </div>
        {console.log(showModal)}
        {showModal && <NewInvoice />}
      </div>
    </>
  );
}

export default Landing;
