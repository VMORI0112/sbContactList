import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

            {/* <ul class="list-group mt-5" id="contact-list">
                <li class="list-group-item">
                    <div class="col-xs-12 col-sm-3">
                        <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" class="img-fluid rounded-circle" />
                    </div>
                    <div class="col-xs-12 col-sm-9">
                        <span class="name">Scott Stevens</span><br/>
                        <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                        <span class="visible-xs"> <span class="text-muted">5842 Hillcrest Rd</span><br/></span>
                        <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                        <span class="visible-xs"> <span class="text-muted">(870) 288-4149</span><br/></span>
                        <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                        <span class="visible-xs"> <span class="text-muted">scott.stevens@example.com</span><br/></span>
                    </div>
                    <div class="clearfix"></div>
                </li>
            </ul> */}


            <ul>
                {!data ? ('Loading...') : data.map((item, index) => {
                    return (
                        <li key={index}>
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
                        
                        </li>
                    )
                })}
            </ul>
        
        
        </div>
        </>
    );
};

export default Home;