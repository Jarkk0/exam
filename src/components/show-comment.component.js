import React, { Component } from "react";
import axios from 'axios';
import CodeTable from './code-table'
import CommentTable from './comment-table'

export default class ShowCode extends Component {
    constructor(props) {
        super(props);
        this.commentState = { commentsCollection: [] };
    }


    componentDidMount2() {
        axios.get('http://localhost:4000/comment')
            .then(res => {
                console.log("kaksi")
                this.setCommentState({ commentsCollection: res.data });
                console.log(this.setCommentState)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    commentTable() {
        return this.commentState.commentsCollection.map((data, i) => {
            console.log(data);
            console.log("Niilo22");
            return <CommentTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-white">
                        <thead className="thead-white">
                            <tr>
                                <td>CODeE</td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                {this.codeTable()}
                                {/* {this.commentTable()} */}
                            </td>
                            <td>
                                
                            </td>    
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}