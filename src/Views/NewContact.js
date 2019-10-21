import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewContact = () => {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    const formHandler = () => {
        let data = {
            slug: "harry_potter",
            full_name: fullname,
            email: email,
            phone: phone,
            address: address,
            create_at: new Date()
        }
        fetch("url", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrer: 'no-referrer',
              body: JSON.stringify(data)
        })
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center">New Contact</h1>

                <form onClick={formHandler}>
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                        id="fullname" 
                        type="text" 
                        className="form-control" 
                        placeholder="Full Name" 
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        id="phone" 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="address">Address</label>
                    <input 
                        id="address" 
                        type="text" 
                        className="form-control" 
                        placeholder="Address" 
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <input type="submit" value="send"/>
                </form>
                <br/>
                <Link to="/" >
                    <i class="fas fa-arrow-left"></i> go back to Home
                </Link>
            </div>
        </>
    );
};

export default NewContact;