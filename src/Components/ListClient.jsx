import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Button } from 'react-bootstrap';
import { FcDeleteDatabase } from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa'
import { DeletClt } from '../Actions/clientAction'
import { connect } from 'react-redux'
import EditClt from './EditClt';

const ListClient = (props,{list}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>



            <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>Client's List</h1>
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
                        props.listclt.map((clt, id) => {

                            return (

                                <tr key={clt.id}>
                                    <Modal show={show} onHide={handleClose}>
                                    <Modal.Header >
                                            <Modal.Title>Client's Modification</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <EditClt list={clt} closemodal={handleClose}/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            

                                        </Modal.Footer>
                                    </Modal>
                                    <td>{clt.id}</td>
                                    <td>{clt.name}</td>
                                    <td>{clt.phone}</td>
                                    <td>{clt.address}</td>
                                    <td>{clt.solde}</td>
                                    <td><FaEdit style={{ cursor: 'pointer' }} onClick={handleShow} />     <FcDeleteDatabase style={{ cursor: 'pointer' }} onClick={() => props.deletClt(clt.id)} />   </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}
const mapStateToProps = (state) => {
    //  console.log(state)
    return {
        listclt: state.clt.Client
    }

}
const mapDispatchToProps = {

    deletClt: DeletClt


}

export default connect(mapStateToProps, mapDispatchToProps)(ListClient);

