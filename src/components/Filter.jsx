import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div className="select" onChange={e => this.props.setFilter(e.target.value)}>
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="complete">Completed</option>
                <option value="incomplete">Uncompleted</option>
                </select>
            </div>
        )
    }
}

export default Filter

