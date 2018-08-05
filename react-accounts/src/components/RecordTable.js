import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as RecordsAPI from '../utils/RecordsAPI'

export default class RecordTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: true
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleEdit = () => {
        const data = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: Number.parseInt(this.refs.amount.value, 0)
        }

        RecordsAPI.update(this.props.id, data).then(
            response => console.log(response.data)
        ).catch(
            error => console.log(error.message)
        )
    }


    recordRow() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.amount}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-info" onClick={this.handleToggle}>
                            <i className="fa fa-pencil" />
                        </button>
                        <button type="button" className="btn btn-sm btn-danger">
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        )
    }

    recordNewRow() {
        return (
            <tr>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.date} ref="date" />
                    </div>
                </td>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.title} ref="title" />
                    </div>
                </td>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.amount} ref="amount" />
                    </div>
                </td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-success" onClick={this.handleEdit}>
                            <i className="fa fa-check" />
                        </button>
                        <button type="button" className="btn btn-sm btn-secondary" onClick={this.handleToggle}>
                            <i className="fa fa-close" />
                        </button>
                    </div>
                </td>
            </tr>
        )
    }

    render() {
        if (this.state.edit) {
            return this.recordRow();
        } else {
            return this.recordNewRow();
        }
    }
}

RecordTable.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
}
