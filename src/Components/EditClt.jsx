import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {UpdateClt} from '../Actions/clientAction'


class EditClt extends Component {
   constructor(props) {
        super(props)
        this.state = {
            id: props.clt.id,
            name: props.clt.name,
            phone: props.clt.phone,
            address: props.clt.address,
            solde: props.clt.solde,
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
            id:"",
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
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's FullName" name="name" value={this.state.id} onChange={this.handleChange} required/>
                    </Form.Group>
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
                        <Form.Control type="hidden" placeholder="Enter Client's Solde" name="solde"  value={this.state.solde} onChange={this.handleChange} />
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
 UpdateClt: UpdateClt
}


export default connect(null,mapDispatchToProps) (EditClt);
