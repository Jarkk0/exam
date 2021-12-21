import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateCode extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeCode = this.onChangeCode.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        code: ''
      }
    }
   
    onChangeCode(e) {
      this.setState({ code: e.target.value })
    }
  
    onSubmit(e) {
      e.preventDefault()
  
      const codeObject = {
        code: this.state.code
      };
      fetch('http://localhost:4000/code/create-code', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(codeObject),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      this.setState({ code: ''})
    }
  
    render() {
      return (<div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="
          
          ">
            <Form.Label>Code</Form.Label>
            <Form.Control type="textarea" rows="6" value={this.state.code} onChange={this.onChangeCode} />
          </Form.Group>
    
          <Button variant="success" size="lg" block="block" type="submit" className="mt-4">
            Create Code post
          </Button>
        </Form>
      </div>);
    }
  }