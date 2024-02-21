import React, { useState } from 'react';

export default function ColorComponent() {
    const [color, setColor] = useState('red');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const changeColor = (newColor) => {
        setColor(newColor);
        setShowColorPicker(false);
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
                <h1 style={headingStyle}>My favorite color is <span style={{color}}>{color}</span></h1>
                <button style={buttonStyle} onClick={() => setShowColorPicker(!showColorPicker)}>Change Color</button>
                {showColorPicker && (
                    <div>
                    <input type="color" onChange={(e) => changeColor(e.target.value)} />
                        <button style={buttonStyle} onClick={() => changeColor('red')}>Reset Color</button>
                    </div>
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
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const headingStyle = {
    fontSize: '24px',
    textAlign: 'center'
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginRight: '10px'
};
