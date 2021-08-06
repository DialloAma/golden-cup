import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            phone: "",
            address: "",
            solde: "",
        }
    }
    handleChange=(e)=>{
       e.preventDefault()
       this.setState({
           [e.target.name]: e.target.value
           })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.client(this.state)
        this.setState({
            id: "",
            name: "",
            phone: "",
            address: "",
            solde: "",

        })
    }
    render() {
        return (
            <div style={{marginLeft:'15rem',marginTop:'2rem',marginRight:'15rem'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's FullName" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's Number" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's Address" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's Solde" name="solde"  value={this.state.solde} onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Client;
