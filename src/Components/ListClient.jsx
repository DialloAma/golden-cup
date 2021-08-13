import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

const ListClient = (props) => {
    return (
        <div>
            <h1 style={{textAlign:'center',marginTop:'3rem'}}>Client's List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Balance</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listclt.map((clt,id)=>{
                            return (
                                <tr key={clt.id}>
                                    <td>{clt.name}</td>
                                    <td>{clt.phone}</td>
                                    <td>{clt.address}</td>
                                    <td>{clt.solde}</td>
                                    <td></td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}

export default ListClient;

