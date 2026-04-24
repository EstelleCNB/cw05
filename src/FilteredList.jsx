import React, { Component } from 'react';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "All"
        };
    }

    onFilter = (e) => {
        this.setState({ type: e.target.value });
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .search(this.state.search) !== -1;
        const matchesType = this.state.type === "All"
            || item.type === this.state.type;
        return matchesSearch && matchesType;
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => this.setState({ search: e.target.value })}
                />
                <select onChange={this.onFilter}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <ul>
                    {this.props.items
                        .filter(this.filterItem)
                        .map(item => (
                            <li key={item.name}>{item.name}</li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;