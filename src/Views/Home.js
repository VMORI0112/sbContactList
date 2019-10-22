import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import avatar from '../images/avatar.jpg';

const Home = () => {

    const {data} = useContext(UserContext);
    const [modalVisible, setModalVisible] = useState('invisible');
    const [modalTitle, setModalTitle] = useState();
    const [modalID, setModalID] = useState();

    const modalToggle = (name, id) => {
        setModalTitle(modalTitle ? "" : name);
        setModalID(modalID ? "" : id);
        setModalVisible(modalVisible === 'invisible' ? 'visible' : 'invisible');
    }

    const deleteHanfler = (id) => {
        fetch('https://assets.breatheco.de/apis/fake/contact/'+id, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => {
            alert('Deleted!');
            modalToggle();
        })
        .catch(error => alert('Error:', error));
    }

    return (
        <>
        <div className="container">
            <h1 className="text-center" >Home</h1>
            <div className="d-flex justify-content-end">
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
                                    agenda_slug: {item.agenda_slug}
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
                                <div className="col-2">
                                    <Link to={"/edit/"+index} >
                                        <i className="fas fa-user-edit iconsEdit"></i>
                                    </Link>
                                    <i onClick={() => modalToggle(item.full_name, item.id)} className="fas fa-trash-alt iconsDelete ml-2"></i>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div id="myModal" className={["modal", modalVisible].join(' ')}>
                <div className="modal-content">
                    <span onClick={modalToggle} className="close">&times;</span>
                    <h3 className="text-center">Are you sure to delete <b>{modalTitle}</b>?</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary" onClick={modalToggle}>CANCEL</button>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-danger" onClick={() => deleteHanfler(modalID)}>DELETE</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                    
        
        </div>
        </>
    );
};

export default Home;