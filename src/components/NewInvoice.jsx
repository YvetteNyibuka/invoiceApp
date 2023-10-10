import React, {useState, useEffect} from 'react';
import '../components/NewInvoice.css'; 
import {AiOutlineDelete} from "react-icons/ai"


function NewInvoice({showModal, onClose, onSubmit }){
    const [formData, setFormData] = useState({
        streetAdress1: '',
        city1: '',
        postCode1: '',
        country1: '',
        clientName: '',
        clientEmail: '',
        streetAdress2: '',
        city2: '',
        postCode2: '',
        country2: '',
        invoiceDate: '',
        paymentTerms: '',
        projectDesc: '',
        status: '',
        items: []
      });

      const handleAddItem = () => {
        setIsItemList(true);
        const newItem = {
            itemName: '',
            quantity: '',
            price: '',
        };

        setFormData(prevState => ({
            ...prevState,
            items: [...prevState.items, newItem],
        }));
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...formData.items];
        updatedItems[index][field] = value;


        setFormData(prevState => ({
            ...prevState,
            items: updatedItems,
        }));
    };

    const handleRemoveItem = index => {
        const updatedItems = formData.items.filter((item, i) => i !== index);

        setFormData(prevState => ({
            ...prevState,
            items: updatedItems,
        }));
    };



      const [isItemList, setIsItemList] = useState(false);
      const handleDisplayList = () =>{
        setIsItemList(true);
      }
    
      

      const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    
        // Filter out empty items from formData.items
        const filteredItems = formData.items.filter(item => item.itemName !== '' && item.quantity !== '' && item.price !== '');
    
        const dataToSave = {
            streetAdress1: formData.streetAdress1,
            city1: formData.city1,
            postCode1: formData.postCode1,
            country1: formData.country1,
            clientName: formData.clientName,
            clientEmail: formData.clientEmail,
            streetAdress2: formData.streetAdress2,
            city2: formData.city2,
            postCode2: formData.postCode2,
            country2: formData.country2,
            invoiceDate: formData.invoiceDate,
            paymentTerms: formData.paymentTerms,
            projectDesc: formData.projectDesc,
            status: formData.status,
            items: filteredItems,
        };
    
        const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
        const newId = Math.max(...existingInvoices.map(invoice => invoice.id), 0) + 1;
        const newInvoice = { id: newId, ...dataToSave };
        const updatedInvoices = [...existingInvoices, newInvoice];
        
        // Save the updated invoices array to local storage
        localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
        
        // Reset the form fields and items list
        setFormData({
            streetAdress1: '',
            city1: '',
            postCode1: '',
            country1: '',
            clientName: '',
            clientEmail: '',
            streetAdress2: '',
            city2: '',
            postCode2: '',
            country2: '',
            invoiceDate: '',
            paymentTerms: '',
            projectDesc: '',
            status: '',
            items: [],
        });


    
        // Call the onSubmit function if it is defined
        if (onSubmit) {
            onSubmit(newInvoice);
        }
    };
console.log(formData);


//    if (!showModal) return [];
    return (
        <div className= "modals">
       <div className="modalcontainer">
        <form action="" id="invoiceForm" onSubmit={handleFormSubmit}>
            <p className="from">Bill From</p>
    
            <div className="sec">
                <label htmlFor="adress">Street Address</label>
                <input type="text" 
                id="streetAdress1" 
                className="input"
                name='streetAdress1' 
                onChange={(e) => setFormData({ ...formData, streetAdress1: e.target.value })}
              value={formData.streetAdress1}
                /> <br/>
            </div>
        <div className="location">
            <div className="city">
                <div className="sec">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city1" className="input1"
                    name='city1' 
                    onChange={(e) => setFormData({ ...formData, city1: e.target.value })}
                  value={formData.city1}/>
                </div>
            </div>
            <div className="postcode">
                <div className="sec">
                    <label htmlFor="postcode">Post Code</label>
                    <input type="text" id="postCode1"className="input1" 
                    name='postCode1' 
                    onChange={(e) => setFormData({ ...formData, postCode1: e.target.value })}
                  value={formData.postCode1}/>
                </div>
            </div>
            <div className="country">
                <div className="sec">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country1"  className="input1" 
                     name='country1' 
                     onChange={(e) => setFormData({ ...formData, country1: e.target.value })}
                   value={formData.country1}/>
                </div>
            </div>
        </div>
    
        <p className="from">Bill To</p>
        <div className="sec">
            <label htmlFor="name">Client's Name</label>
            <input type="text" id="clientName" className="input"
            name='clientName' 
            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
          value={formData.clientName}/>
        </div>
        <div className="sec">
            <label htmlFor="email">Client's Email</label>
            <input type="text" id="clientEmail" className="input"
            name='clientEmail' 
            onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
          value={formData.clientEmail}/>
        </div>
        <div className="sec">
            <label htmlFor="Address2">Street address</label>
            <input type="text" id="streetAdress2" className="input"
             name='streetAdress2' 
             onChange={(e) => setFormData({ ...formData, streetAdress2: e.target.value })}
           value={formData.streetAdress2}/>
        </div> <br/>
    
        <div className="location">
            <div className="city">
                <div className="sec">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city2" className="input1"
                    name='city2' 
                    onChange={(e) => setFormData({ ...formData, city2: e.target.value })}
                  value={formData.city2}/>
                </div>
            </div>
            <div className="postcode">
                <div className="sec">
                    <label htmlFor="postcode">Post Code</label>
                    <input type="text" id="postCode2" className="input1"
                    name='postCode2' 
                    onChange={(e) => setFormData({ ...formData, postCode2: e.target.value })}
                  value={formData.postCode2}/>
                </div>
            </div>
            <div className="country">
                <div className="sec1">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country2" className="input1"
                    name='country2' 
                    onChange={(e) => setFormData({ ...formData, country2: e.target.value })}
                  value={formData.country2}/>
                </div>
            </div>
        </div>
    
         <div className="invoice">
            <div className="date">
                <div className="sec3">
                    <label htmlFor="date">Invoice Date</label>
                    <input type="date" id="invoiceDate" className="input1"
                    name='invoiceDate' 
                    onChange={(e) => setFormData({ ...formData, invoiceDate: e.target.value })}
                  value={formData.invoiceDate}/>
                </div>
            </div>
            <div className="payment">
                <div className="sec3">
                    <label htmlFor="payment">Payment Terms</label>
                    <input type="text" id="paymentTerms" className="input1"
                    name='paymentTerms' 
                    onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                  value={formData.paymentTerms}/>
                </div>
            </div>
         </div>
    
         <div className="sec">
            <label htmlFor="projectdesc">Project Description</label>
            <input type="text" id="projectDesc" className="input"
            name='projectDesc' 
            onChange={(e) => setFormData({ ...formData, projectDesc: e.target.value })}
          value={formData.projectDesc}/>
        </div> <br/>
         <div className="sec">
            <label htmlFor="status">Status</label>
            <input type="text" id="status" className="input"
            name='status' 
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          value={formData.status}/>
        </div> <br/>
    
        <h3>Item List</h3>
        {formData.items.map((item, index) => (
                    <div className="item" id={`itemContainer${index}`} key={index}>
                    <div className="itemName">
                        <label htmlFor={`itemName${index}`}>Item Name</label>
                        <input
                            type="text"
                            id={`itemName${index}`}
                            className="itemd"
                            value={item.itemName}
                            onChange={e => handleItemChange(index, 'itemName', e.target.value)}
                        />
                    </div>
                    <div className="qty">
                        <label htmlFor={`qty${index}`}>Qty</label>
                        <input
                            type="text"
                            id={`qty${index}`}
                            className="itemd"
                            value={item.quantity}
                            onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                        />
                    </div>
                    <div className="price">
                        <label htmlFor={`price${index}`}>Price</label>
                        <input
                            type="number"
                            id={`price${index}`}
                            className="itemd"
                            value={item.price}
                            onChange={e => handleItemChange(index, 'price', e.target.value)}
                        />
                    </div>
                    <div className="total">
                     <label htmlFor="total">Total</label>
                     <p id='total'>{item.price * item.quantity}</p>
                    </div>
                    
                    <div className="delete">
                        <br />
                        <button id='delete' type="button" onClick={() => handleRemoveItem(index)}>
                        <AiOutlineDelete style={{backgroundColor: 'black', fontSize: '2rem', color: 'white'}}/>
                        </button>
                    </div>
                </div>
            ))}
            <div className="addItem">
                <button type="button" className="addItemBtn" onClick={handleAddItem}>
                    + Add New Item
                </button>
            </div>
        <button className="submit">Create Invoice</button>
        </form>
        </div>
        </div>

      );
}
  


export default NewInvoice