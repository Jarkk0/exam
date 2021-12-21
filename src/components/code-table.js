import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'


export default class DataTable extends Component {
    constructor(props) {
        super(props)
        
        // Setting up functions
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = { commentsCollection: [] };
       
      }
     
      onChangeCode(e) {
        this.setState({ code: e.target.value })
      }

      onSubmit(e) {
        const commentObject = {
          id: this.props.obj._id,
          comment: this.state.code
        };
        
        fetch('http://localhost:4000/comment/create-comment/', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentObject),
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

      //FIND right comment
      componentDidMount() {
        axios.get('http://localhost:4000/comment/' + this.props.obj._id)
        .then(res => {
          this.setState({ commentsCollection: res.data });
      })
      .catch(function (error) {
          console.log(error);
      })
}
 
    render() {
      
        return (
                <Card>
                  <Card.Body>
                  <Card.Text column="lg">
                    {this.props.obj.code}
                    {}
                  </Card.Text>
                  <Card.Text>
                  <div className="comment">
                    {this.state.commentsCollection.map(function(data, i) {
                      return data.comment+ (" \n ");

                    })}
                  </div>
                  </Card.Text>
                  <Form onSubmit={this.onChangeCode}>
                    <Form.Group controlId="
                    
                    ">
                      <Form.Control placeholder="add comment" type="textarea" size="sm" rows="6" value={this.state.code} onChange={this.onChangeCode} />
                    </Form.Group>
              
                    <Button onClick={this.onSubmit} variant="success" size="sm" block="block" type="submit" className="mt-4">
                      Add comment
                    </Button>
                  </Form>
                  </Card.Body>
                </Card>                               
        )
    }
}
