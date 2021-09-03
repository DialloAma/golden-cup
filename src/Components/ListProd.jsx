import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux'
import {FcDeleteDatabase} from 'react-icons/fc';
import { FaEdit } from 'react-icons/fa'
import {DeletProd} from '../Actions/actionProd'


const ListProd = (props) => {
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
                        props.listProdt.map((prod,id)=>{
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.nameprod}</td>
                                    <td>{prod.quant}</td>
                                    <td>{prod.expi}</td>
                                    <td><FaEdit style={{cursor: 'pointer'}}/>     <FcDeleteDatabase style={{cursor: 'pointer'}} onClick={()=>props.deletprod(prod.id)}/></td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table> 
        </div>
    );
}
const mapStateToProps=(state)=>{
   // console.log(state)
    return{
    listProdt : state.prod.Product 
        }
   
}
const mapDispatchToProps={
 deletprod: DeletProd
}
export default connect(mapStateToProps,mapDispatchToProps) (ListProd);

