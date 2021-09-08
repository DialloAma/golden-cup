import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {UpdateClt} from '../Actions/clientAction'

class EditClt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.list.id,
            name: props.list.name,
            phone: props.list.phone,
            address: props.list.address,
            solde: '0',
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
        this.props.UpdateClt(this.state)
        this.setState({
            
            name: "",
            phone: "",
            address: ""
        })
        this.props.closemodal()

    }
     
    render() {
        return (
            <div >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's FullName" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's Number" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's Address" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's Solde" name="solde"  value={this.state.solde} onChange={this.handleChange} type="hidden"/>
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
 UpdateClt
}


export default connect(null,mapDispatchToProps) (EditClt);
