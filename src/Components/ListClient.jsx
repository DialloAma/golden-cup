import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcDeleteDatabase } from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa'
import { Table, Modal } from 'react-bootstrap';
import { DeletClt } from '../Actions/clientAction'
import { connect } from 'react-redux'
import EditClt from './EditClt';

const ListClient = ({ listclt, deletClt }) => {
    const [show, setShow] = useState(false);
    const [clt,setClt] = useState()
    const handleClose = () => setShow(false);
    const handleShow = (clt) => {
        setShow(true);
        setClt(clt)
    }
      return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>List of Clients</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Balance</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
               <tbody>
                    {
                        listclt.map((clt)=>{
                            return(
                                 <tr key={clt.id}>
                                     <td>{clt.id}</td>
                                     <td>{clt.name}</td>
                                     <td>{clt.phone}</td>
                                     <td>{clt.address}</td>
                                     <td>{clt.solde}</td>
                                     <td><FaEdit style={{ cursor: 'pointer' }} onClick={() => handleShow(clt)} /><FcDeleteDatabase style={{ cursor: 'pointer' }} onClick={() => {
                                          const textBox = window.confirm("Do you really want to delete " + clt.name)
                                              if (textBox === true) {
                                                   deletClt(clt.id)
                                                   }
                                            }} />   
                                     </td>
                                 </tr>

                            )
                        })
                    }

               </tbody>
               
           </Table>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Client's Modification</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                     <EditClt clt={clt} closemodal={handleClose}/>                      
                </Modal.Body>

            </Modal>    
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        listclt: state.clt.Client
    }

}
const mapDispatchToProps = {
    deletClt: DeletClt
}

export default connect(mapStateToProps, mapDispatchToProps)(ListClient);

