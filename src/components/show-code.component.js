import React, { Component } from "react";
import axios from 'axios';
import DataTable from './data-table'

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

    dataTable() {
        return this.state.codesCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>CODE</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}