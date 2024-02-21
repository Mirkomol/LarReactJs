// import React, { Component } from "react";
//
// export default class NewComponent extends Component {
//     state = {
//         name: 'Jennifer',
//         age: 25,
//         mobile: 12345678,
//         skills: ['react', 'vue', 'laravel']
//     }
//
//     handleClick = (e) => {
//         console.log("Button is clicked")
//     }
//
//     handleMouseOver = (e) => {
//         console.log(e.target, e.pageX, e.pageY);
//     }
//
//     handleCopy = (e) => {
//         console.log("Paragraph has been copied")
//     }
//
//     handleChangeState = (e) => {
//         this.setState({
//             name: 'John',
//             age: 11,
//             mobile: 3332233111,
//             skills: ['php', 'js', 'html', 'css']
//         });
//     }
//
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Name', this.state.name);
//         console.log('Age', this.state.age);
//         console.log('Mobile', this.state.mobile);
//     }
//
//     render() {
//         return (
//             <div style={wrapperStyle}>
//                 <nav style={navStyle}>
//                     <ul style={ulStyle}>
//                         <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
//                         <li style={liStyle}><a href="/new" style={linkStyle}>New Component</a></li>
//                         <li style={liStyle}><a href="/color" style={linkStyle}>Color Component</a></li>
//                         <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
//                     </ul>
//                 </nav>
//                 <div style={containerStyle}>
//                     <h1 style={headerStyle}>This is a Class Component</h1>
//                     <p>Name: <span style={spanStyle}>{this.state.name}</span></p>
//                     <p>Age: <span style={spanStyle}>{this.state.age}</span></p>
//                     <p>Mobile: <span style={spanStyle}>{this.state.mobile}</span></p>
//                     <p>Skills: <span style={spanStyle}>{this.state.skills.join(',')}</span></p>
//
//                     <button style={buttonStyle} onClick={this.handleClick}>Click Me</button>
//                     <p style={paragraphStyle} onMouseOver={this.handleMouseOver} onCopy={this.handleCopy}>
//                         Hover over me or copy me
//                     </p>
//                     <button style={buttonStyle} onClick={this.handleChangeState}>Change State</button>
//
//                     <form onSubmit={this.handleSubmit}>
//                         <label style={labelStyle}>Name:</label>
//                         <input name="name" type="text" style={inputStyle} onChange={this.handleChange} /><br />
//                         <label style={labelStyle}>Age:</label>
//                         <input name="age" type="text" style={inputStyle} onChange={this.handleChange} /><br />
//                         <label style={labelStyle}>Mobile:</label>
//                         <input name="mobile" type="text" style={inputStyle} onChange={this.handleChange} /><br />
//                         <button style={submitStyle} type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
//
// const wrapperStyle = {
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f8f9fa',
//     padding: '20px'
// };
//
// const navStyle = {
//     backgroundColor: '#333',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px'
// };
//
// const ulStyle = {
//     listStyleType: 'none',
//     margin: 0,
//     padding: 0
// };
//
// const liStyle = {
//     display: 'inline',
//     marginRight: '10px'
// };
//
// const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
// };
//
// const containerStyle = {
//     margin: '20px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// };
//
// const headerStyle = {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px'
// };
//
// const spanStyle = {
//     fontWeight: 'bold',
//     color: '#007bff'
// };
//
// const buttonStyle = {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginRight: '10px'
// };
//
// const paragraphStyle = {
//     backgroundColor: '#f8f9fa',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginBottom: '20px'
// };
//
// const labelStyle = {
//     display: 'inline-block',
//     width: '80px',
//     marginBottom: '10px'
// };
//
// const inputStyle = {
//     padding: '5px',
//     borderRadius: '3px',
//     border: '1px solid #ccc',
//     marginBottom: '10px',
//     width: '200px'
// };
//
// const submitStyle = {
//     backgroundColor: '#28a745',
//     color: '#fff',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
// };



import React, { Component } from "react";

export default class NewComponent extends Component {
    state = {
        name: 'Jennifer',
        age: 25,
        mobile: 12345678,
        skills: ['React', 'Vue', 'Laravel'],
        showComments: false,
        comments: [],
        newComment: ''
    }

    handleClick = () => {
        console.log("Button is clicked")
    }

    handleMouseOver = (e) => {
        console.log(e.target, e.pageX, e.pageY);
    }

    handleCopy = () => {
        console.log("Paragraph has been copied")
    }

    handleChangeState = () => {
        this.setState({
            name: 'John',
            age: 11,
            mobile: 3332233111,
            skills: ['PHP', 'JavaScript', 'HTML', 'CSS']
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name', this.state.name);
        console.log('Age', this.state.age);
        console.log('Mobile', this.state.mobile);
    }

    toggleComments = () => {
        this.setState((prevState) => ({
            showComments: !prevState.showComments
        }));
    }

    handleAddComment = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            comments: [...prevState.comments, this.state.newComment],
            newComment: ''
        }));
    }

    render() {
        return (
            <div style={wrapperStyle}>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
                        <li style={liStyle}><a href="/new" style={linkStyle}>New Component</a></li>
                        <li style={liStyle}><a href="/color" style={linkStyle}>Color Component</a></li>
                        <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                    </ul>
                </nav>
                <div style={containerStyle}>
                    <h1 style={headerStyle}>This is a Class Component</h1>
                    <p>Name: <span style={spanStyle}>{this.state.name}</span></p>
                    <p>Age: <span style={spanStyle}>{this.state.age}</span></p>
                    <p>Mobile: <span style={spanStyle}>{this.state.mobile}</span></p>
                    <p>Skills: <span style={spanStyle}>{this.state.skills.join(', ')}</span></p>

                    <button style={buttonStyle} onClick={this.handleClick}>Click Me</button>
                    <p style={paragraphStyle} onMouseOver={this.handleMouseOver} onCopy={this.handleCopy}>
                        Hover over me or copy me
                    </p>
                    <button style={buttonStyle} onClick={this.handleChangeState}>Change State</button>

                    <form onSubmit={this.handleSubmit}>
                        <label style={labelStyle}>Name:</label>
                        <input name="name" type="text" style={inputStyle} onChange={this.handleChange} /><br />
                        <label style={labelStyle}>Age:</label>
                        <input name="age" type="text" style={inputStyle} onChange={this.handleChange} /><br />
                        <label style={labelStyle}>Mobile:</label>
                        <input name="mobile" type="text" style={inputStyle} onChange={this.handleChange} /><br />
                        <button style={submitStyle} type="submit">Submit</button>
                    </form>

                    <div style={commentsContainerStyle}>
                        <button style={buttonStyle} onClick={this.toggleComments}>
                            {this.state.showComments ? 'Hide Comments' : 'Show Comments'}
                        </button>
                        {this.state.showComments &&
                            <div>
                                {this.state.comments.map((comment, index) => (
                                    <p key={index}>{comment}</p>
                                ))}
                                <form onSubmit={this.handleAddComment}>
                                    <input
                                        type="text"
                                        name="newComment"
                                        value={this.state.newComment}
                                        onChange={this.handleChange}
                                        style={inputStyle}
                                        placeholder="Add a comment"
                                    />
                                    <button style={submitStyle} type="submit">Add Comment</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const wrapperStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '20px'
};

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
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const headerStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px'
};

const spanStyle = {
    fontWeight: 'bold',
    color: '#007bff'
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

const paragraphStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px'
};

const labelStyle = {
    display: 'inline-block',
    width: '80px',
    marginBottom: '10px'
};

const inputStyle = {
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '200px'
};

const submitStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

const commentsContainerStyle = {
    marginTop: '20px'
};
