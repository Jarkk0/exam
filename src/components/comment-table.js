import React, { Component } from 'react';

export default class DataTable extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        // Setting up state
        this.state = {
          id: '',
          comment: ''
        }
      }
     
      onChangeComment(e) {
        this.setState({ comment: e.target.value })
        //this.setState({ _id: e.target.id })
      }
    
      onSubmit(e) {
        e.preventDefault()
        const commentObject = {
          id: this.props.obj._id,   //postauksen id
          comment: this.state.comment
        };
        
        fetch('http://localhost:4000/comment/', {
          method: 'PUT', // or 'PUT'
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
        this.setState({ comment: ''})
      }
    
    
    
    
    render() {
        return (            
                <tr>
                    <td>
                        {this.props.obj.comment}
                    </td>
                </tr>
        )
        
    }
}
