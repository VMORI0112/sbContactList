import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../images/avatar.jpg';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://assets.breatheco.de/apis/fake/contact/agenda/harry_potter')
        .then(res => res.json())
        .then(data => setData(data));
    },[data])

    return (
        <>
        <div className="container">
            <h1>Home</h1>
            <div class="d-flex justify-content-end">
                <Link to="/NewContact" >
                    <button className="btn btn-primary">+ New Contact</button>
                </Link>
            </div>


            <ul className="list-group mt-5" >
                {!data ? ('Loading...') : data.map((item, index) => {
                    return (
                        <li key={index} className="list-group-item" >
                            <div className="row">
                                <div className="col-2">
                                    <img src={avatar} alt="..." className="img-fluid rounded-circle" />
                                </div>
                                <div className="col">
                                    id: {item.id}
                                    <br/>
                                    slug: {item.agenda_slug}
                                    <br/>
                                    full_name: {item.full_name}
                                    <br/>
                                    email: {item.email}
                                    <br/>
                                    phone: {item.phone}
                                    <br/>
                                    address: {item.address}
                                    <br/>
                                    create: {item.created_at}
                                </div>
                            
                            </div>
                        </li>
                    )
                })}
            </ul>
        
        
        </div>
        </>
    );
};

export default Home;