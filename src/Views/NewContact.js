import React from 'react';
import { Link } from 'react-router-dom';

const NewContact = () => {
    return (
        <>
        <h1>New Contact</h1>
        <Link to="/" >
            <button className="btn btn-primary">Home</button>
        </Link>
        </>
    );
};

export default NewContact;