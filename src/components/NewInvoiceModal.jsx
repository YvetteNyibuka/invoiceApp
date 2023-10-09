// import React, { useState, useEffect } from 'react';
// import '../components/Modal.css';

// function NewInvoiceModal({ showModal, onClose, onSubmit }) {
//   const [formData, setFormData] = useState({
//     company: '',
//     client: '',
//     invoiceId: '',
//     dueDate: '',
//     amount: '',
//     status: 'paid',
//   });

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Form validation

//     // Get existing invoices from local storage or initialize an empty array if not present
//     const existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];

//     // Find the maximum id among existing invoices and add 1 to get the new id
//     const newId = Math.max(...existingInvoices.map(invoice => invoice.id), 0) + 1;

//     // Create a new invoice object with the new id and the form data
//     const newInvoice = { id: newId, ...formData };

//     // Add the new invoice data to the existing invoices array
//     const updatedInvoices = [...existingInvoices, newInvoice];

//     // Update local storage with the updated invoices data
//     localStorage.setItem('invoices', JSON.stringify(updatedInvoices));

//     // Call the onSubmit function passed as a prop to update the state in your parent component
//     onSubmit(newInvoice);

//     // Reset the form data and close the modal
//     setFormData({
//       company: '',
//       client: '',
//       invoiceId: '',
//       dueDate: '',
//       amount: '',
//       status: 'paid',
//     });
//     onClose();
//   };

//   if (!showModal) return null;
  

//   return (
//     <div className={`modal ${showModal ? 'show' : ''}`}>
//       <div className="modal-content">
//         <form onSubmit={handleFormSubmit}>
//           <label htmlFor="company">Company:</label>
//           <input className='input'
//             type="text"
//             id="company"
//             name="company"
//             required            onChange={(e) => setFormData({ ...formData, company: e.target.value })}

//             value={formData.company}
//           /><br />

//           <label htmlFor="client">Client:</label>
//           <input  className='input'
//             type="text"
//             id="client"
//             name="client"
//             required
//             value={formData.client}
//             onChange={(e) => setFormData({ ...formData, client: e.target.value })}
//           /><br />

//           <label htmlFor="invoiceId">Invoice ID:</label>
//           <input className='input'
//             type="text"
//             id="invoiceId"
//             name="invoiceId"
//             required
//             value={formData.invoiceId}
//             onChange={(e) => setFormData({ ...formData, invoiceId: e.target.value })}
//           /><br />

//           <label htmlFor="dueDate">Due Date:</label>
//           <input  className='input'
//             type="date"
//             id="dueDate"
//             name="dueDate"
//             required
//             value={formData.dueDate}
//             onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
//           /><br />

//           <label htmlFor="amount">Amount:</label>
//           <input className='input'
//             type="number"
//             id="amount"
//             name="amount"
//             required
//             value={formData.amount}
//             onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//           /><br />

          
//           <label htmlFor="status">Status:</label>
//           <select className='input'
//             id="status"
//             name="status"
//             required
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//           >
//             <option value="paid">Paid</option>
//             <option value="pending">Pending</option>
//             <option value="draft">Draft</option>
//           </select><br />

//           <button type="submit">Create Invoice</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default NewInvoiceModal;
