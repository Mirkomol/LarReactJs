import React, { useState } from 'react';

export default function PostComponent() {
    const [likes, setLikes] = useState(0);

    const increaseLikes = () => {
        setLikes(likes + 1);
    };

    const decreaseLikes = () => {
        setLikes(likes - 1);
    };

    return (
        <div>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
                    <li style={liStyle}><a href="/new" style={linkStyle}>New Component</a></li>
                    <li style={liStyle}><a href="/color" style={linkStyle}>Color Component</a></li>
                    <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
            <div style={postStyle}>
                <h1 style={headingStyle}>
                    <img src="https://img.icons8.com/fluency/48/000000/laravel.png" alt="Laravel Logo" style={logoStyle} />
                    Welcome to
                    <img src="https://img.icons8.com/ios-filled/50/000000/react-native.png" alt="React.js Logo" style={logoStyle} />
                    <span style={{ verticalAlign: 'middle' }}>Mirkamol Rakhimov</span>
                </h1>
                <p style={paragraphStyle}>
                    "This project represents a foundational implementation, combining Laravel as the robust backend framework with React.js as the dynamic frontend, showcasing the seamless integration of these technologies."</p>
                <div style={buttonGroupStyle}>
                    <button style={buttonStyle} onClick={increaseLikes}>Like</button>
                    <button style={buttonStyle} onClick={decreaseLikes}>Dislike</button>
                    <span style={likeCountStyle}>{likes} Likes</span>
                </div>
            </div>
        </div>
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

const postStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const headingStyle = {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
};

const paragraphStyle = {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center'
};

const buttonGroupStyle = {
    textAlign: 'center',
    marginTop: '20px'
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
};

const likeCountStyle = {
    fontSize: '18px',
    color: '#333'
};

const logoStyle = {
    width: '50px',
    height: 'auto',
    marginRight: '10px'
};
