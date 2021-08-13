import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'

class Payed extends Component {
    constructor(props){
        super(props)
        this.state={
            id: "", 
            number: "", 
            name:"",
            balanc: "", 
            datep: "", 
            

        }
    }
    handleChange=(e)=>{
      e.preventDefault()
      this.setState({
          [e.target.name] : e.target.value
      })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.pay(this.state)
        this.setState({
            id: "", 
            number: "", 
            name:"",
            balanc: "", 
            datep: "",  
        })
        console.log(this.state)
    }
    render() {
        return (
            <div style={{marginLeft:'15rem',marginTop:'2rem',marginRight:'15rem'}}>
                <h1 style={{textAlign:'center',marginTop:'3rem'}}>Add Clients</h1>
                <Form onSubmit={this.handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's Number" name="number" value={this.state.number} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Client's FullName" name="name" value={this.state.name} onChange={this.handleChange} required/>
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Balance</Form.Label>
                        <Form.Control type="number" placeholder="Enter Client's balance" name="balanc"  value={this.state.balanc} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter the date" name="datep" value={this.state.datep} onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Payed;
