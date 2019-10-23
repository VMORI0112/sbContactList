import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { UserContext } from '../UserContext';

const Edit = (props) => {
    let history = useHistory();
    const {data} = useContext(UserContext);

    const [fullname, setFullname] = useState(data[props.match.params.id].full_name);
    const [email, setEmail] = useState(data[props.match.params.id].email);
    const [phone, setPhone] = useState(data[props.match.params.id].phone);
    const [address, setAddress] = useState(data[props.match.params.id].address);

    const [editedData, setEditedData] = useState();

    console.log(data);


useEffect(() => {
    setEditedData(JSON.stringify({
        agenda_slug: data[props.match.params.id].agenda_slug,   
        full_name: fullname,
        email: email,
        phone: phone,
        address: address
    }) );
},[data, props.match.params.id,fullname, email, phone, address])

const formEditHandler = () => {
    (data.full_name === "") ? alert("cannot be empty") : 

    fetch('https://assets.breatheco.de/apis/fake/contact/'+data[props.match.params.id].id, {
        method: 'PUT',
        body: editedData,
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => {
            alert('Success:', JSON.stringify(response));
            history.push('/');
        })
        .catch(error => alert('Error:', error));
}



    return (
        <>
            <div className="container">
                <h1 className="text-center">Edit {data[props.match.params.id].agenda_slug}</h1>
                <h3 className="text-center"><i>{data[props.match.params.id].full_name}</i></h3>

                <div>
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
                    <br/>
                    <div className="row">
                        <div className="col">
                            <Link to="/" className="btn btn-danger" >
                                <i className="fas fa-arrow-left"></i> Cancel
                            </Link>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                <input className="btn btn-success" type="button" value="Edit my contact" onClick={formEditHandler} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Edit;
