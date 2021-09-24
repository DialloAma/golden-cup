import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Modal} from 'react-bootstrap';
import {connect} from 'react-redux'
import {FcDeleteDatabase} from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa'
import {DeletProd} from '../Actions/actionProd'
import EditProd from './EditProd';



const ListProd = (props) => {
    const [show, setShow] = useState(false);
    const [prod,setProd] = useState()
    const handleClose = () => setShow(false);
    const handleShow = (prod) => {
        setShow(true);
        setProd(prod)
    }
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'3rem'}}>Produt's List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       <th>IDt</th>
                        <th>Name Product</th>
                        <th>Quantite</th>
                        <th>Date Expiration</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listProdt.map((prod)=>{
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nameprod}</td>
                                    <td>{prod.quant}</td>
                                    <td>{prod.expi}</td>
                                    <td><FaEdit style={{cursor: 'pointer'}} onClick={()=>handleShow(prod)}/>     <FcDeleteDatabase style={{cursor: 'pointer'}} onClick={()=>{
                                        const msg = window.confirm("Do you really want to delet  " +prod.nameprod)
                                        if (msg===true){
                                            props.deletprod(prod.id)
                                        }
                                       }}/>
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

                     <EditProd prod={prod} closemodal={handleClose}/>                      
                </Modal.Body>

            </Modal>    
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
         listProdt : state.prod.Product 
    }
}
const mapDispatchToProps={
 deletprod: DeletProd
}
export default connect(mapStateToProps,mapDispatchToProps) (ListProd);

