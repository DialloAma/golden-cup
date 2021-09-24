import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
import {UpdProd} from '../Actions/actionProd'
import {connect} from 'react-redux'

const EditProd = (props) => {
    const [state, setState] = useState({
        id: props.prod.id,
        nameprod: props.prod.nameprod,
        quant: props.prod.quant,
        expi: props.prod.expi,
    });
    const handleChange=(e)=>{
        e.preventDefault()
        setState({[e.target.name]: e.target.value})
       
    }
    const handleSubmit=(e)=>{
    e.preventDefault()
      props.updateprod(state)
      console.log(state)
      setState({
        id:"",
        nameprod:"",
        quant:"",
        expi:""
      })
      props.closemodal();
    }
    
    return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" name="id" value={state.id} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" name="nameprod" value={state.nameprod} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter quantity" name="quant" value={state.quant} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date of expiration</Form.Label>
                <Form.Control type="date" placeholder="Enter date of expiration" name="expi" value={state.expi} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    );
}
const mapDispatchToProps={
  updateprod: UpdProd
}


export default connect(null,mapDispatchToProps)(EditProd);
