import React, { Component } from 'react';
import {AddProduct} from '../Actions/actionProd';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'

class Product extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            nameprod:"",
            quant:"",
            expi:""
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
        this.props.prod(this.state)
        this.setState({
            id:"",
            nameprod:"",
            quant:"",
            expi:""   
        })

    }
    render() {
        return (
            <div style={{marginLeft:'15rem',marginTop:'2rem',marginRight:'15rem'}}>
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
    prod : AddProduct
}

export default connect(null,mapDispatchToProps)(Product);
