import React, { Component } from "react";
import axios from 'axios';
import CodeTable from './code-table'


export default class ShowCode extends Component {
    constructor(props) {
        super(props);
        this.state = { codesCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/code')
            .then(res => {
                this.setState({ codesCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    codeTable() {
        return this.state.codesCollection.map((data, i) => {
            return <CodeTable obj={data} key={i} />;
        });
    }
    

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-white">
                        <thead className="thead-white">
                            <tr>
                                CODeE
                            </tr>
                        </thead>
                        <tbody>
                                {this.codeTable()}                           
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}