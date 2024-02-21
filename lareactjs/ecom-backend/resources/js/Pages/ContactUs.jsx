import React, { useState } from 'react';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // You can add further logic here, like sending the form data to a server
    };

    return (
        <>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
                    <li style={liStyle}><a href="/new" style={linkStyle}>New Component</a></li>
                    <li style={liStyle}><a href="/color" style={linkStyle}>Color Component</a></li>
                    <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
            <div style={containerStyle}>
                <h1 style={headingStyle}>Contact Us</h1>
                {submitted ? (
                    <p style={successMessageStyle}>Thank you, {name}, for your submission!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label style={labelStyle}>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                        /><br />
                        <label style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                        /><br />
                        <label style={labelStyle}>Message:</label><br />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={textareaStyle}
                        /><br />
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </form>
                )}
            </div>
        </>
    );
}

const navStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0
};

const liStyle = {
    display: 'inline',
    marginRight: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

const containerStyle = {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const headingStyle = {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px'
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px'
};

const inputStyle = {
    padding: '5px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box'
};

const textareaStyle = {
    padding: '5px',
    marginBottom: '10px',
    width: '100%',
    height: '100px',
    boxSizing: 'border-box'
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

const successMessageStyle = {
    fontSize: '18px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '5px',
    margin: '20px 0'
};
