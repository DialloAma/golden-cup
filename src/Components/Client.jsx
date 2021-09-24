import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {AddClient} from '../Actions/clientAction';
class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            phone: "",
            address: "",
            solde: 0
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
        alert("has been added whit succes")
        this.setState({
            id: "",
            name: "",
            phone: "",
            address: "",
            solde: 0,

        })
    }
    render() {
        return (
            <div style={{marginLeft:'15rem',marginTop:'2rem',marginRight:'15rem'}}>
                <h1 style={{textAlign:'center',marginTop:'3rem'}}>Add Clients</h1>
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
                        <Form.Label>Balance</Form.Label>
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
const mapDispatchToProps={
 client : AddClient
}

 
export default connect(null,mapDispatchToProps)(Client);
