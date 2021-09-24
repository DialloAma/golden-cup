import React, { Component } from 'react';
import {AddProduct} from '../Actions/actionProd';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import {UpdProd} from '../Actions/actionProd'

class Editpro extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.prod.id,
            nameprod:props.prod.nameprod,
            quant:props.prod.quant,
            expi:props.prod.expi
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.updateprod(this.state)
        this.setState({
            id:"",
            nameprod:"",
            quant:"",
            expi:""   
        })

    }
    render() {
        return (
            <div >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" name="nameprod" value={this.state.nameprod} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Enter quantity" name="quant" value={this.state.quant} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date of expiration</Form.Label>
                        <Form.Control type="date" placeholder="Enter date of expiration" name="expi" value={this.state.expi} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
const mapDispatchToProps={
    updateprod: UpdProd
  }

export default connect(null,mapDispatchToProps)(Editpro);