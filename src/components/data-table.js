import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class DataTable extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        const id = this.props.obj._id;
        console.log(id)
        const url = "http://localhost:4000/code/create-code/" + id;
        console.log(url);
        // Setting up state
        this.state = {
          comment: ''
        }
      }
     
      onChangeComment(e) {
        this.setState({ comment: e.target.value2 })
        //this.setState({ _id: e.target.id })
      }
    
      onSubmit(e) {
        e.preventDefault()
        const commentObject = {
          comment: this.state.comment
        };
        
        fetch('http://localhost:4000/code/create-code/61be1cfc9de406b1147a70b6', {
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
                        {this.props.obj.code}
                    </td>
                    <td>
                    {this.props.obj.comment}
                    <div className="form-wrapper">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="
                            
                            ">
                                <Form.Label>| Comment |</Form.Label>
                                <Form.Control type="textarea" rows="6" value={this.state.comment} value2={this.props.obj.comment +("\n")+ this.state.comment} onChange={this.onChangeComment} />
                            </Form.Group>
                        
                            <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                                Create comment post
                            </Button>
                        </Form>
                        </div>
                    </td>
                </tr>
        )
        
    }
}




// render() {
//     return (
//         <tr>
//             <td>
//                 {this.props.obj.comment}
//             </td>
//             <td>
//                 <Button>lisää kommentti</Button>
//                 {console.log(this.props.obj._id)}
//             </td>
//             {/* kommentti komponentti tohon ylös
//             <td>
//                 {this.props.obj.name}
//             </td>
//             <td>
//                 {this.props.obj.email}
//             </td> */}
//         </tr>
//     );
// }