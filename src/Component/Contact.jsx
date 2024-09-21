import React, { useState, useEffect } from 'react';
import './Contact.css';
import { PostMessage, GetMessage } from '../Api/Coreapi';
import { Pagination } from 'antd';  // Import Pagination from Ant Design

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);  // State to store messages fetched from the backend
  const [currentPage, setCurrentPage] = useState(1);  // State to manage pagination
  const [totalMessages, setTotalMessages] = useState(0);  // Total number of messages

  // Number of messages per page
  const pageSize = 5;

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);  // Reset submitted status initially
    setError(null);  // Reset any previous errors

    try {
      // Send form data to the backend
      await PostMessage(formData);
      setSubmitted(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Fetch the latest messages after submission
      fetchMessages();

    } catch (err) {
      console.error("Error submitting form:", err);
      setError("There was an error submitting your message. Please try again.");
    }
  };

  // Function to fetch messages from the backend
  const fetchMessages = async (page = currentPage) => {
    try {
      // Assuming GetMessage takes page and pageSize as arguments and returns an object with messages and total properties
      const response = await GetMessage(page, pageSize);  
      // Check the response structure
      console.log("API Response:", response);
      if (response && Array.isArray(response.messages)) {
        setMessages(response.messages);  // Update the messages state with the fetched data
        setTotalMessages(response.total);  // Update the total number of messages
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
      // setError("There was an error fetching messages.");
    }
  };

  // Fetch messages when the component mounts or page changes
  useEffect(() => {
    fetchMessages();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className={`contact-form ${submitted ? 'submitted' : ''}`} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        {submitted && <p className="success-message">Thank you for your feedback!</p>}
        {error && <p className="error-message">{error}</p>}
      </form>

      {/* Display fetched messages in a table */}
      <div className="messages-list">
        {/* <h3>Previous Messages</h3> */}
        {messages.length > 0 ? (
          <>
            <table className="messages-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination component */}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalMessages}
              onChange={handlePageChange}
              showSizeChanger={false}  // Hide page size changer
            />
          </>
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
