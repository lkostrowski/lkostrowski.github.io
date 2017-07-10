import React from 'react';
import Filter from '../../components/Filter/Filter';

// temp
const filters = [
    {
        open: true,
        name: 'Author',
        items: [
            {
                label: 'Frank Miller',
                id: '1',
                selected: true
            },
            {
                label: 'Greg Rucka',
                id: '2',
                selected: false
            },
            {
                label: 'Garth Ennis',
                id: '3',
                selected: false
            }
        ]
    },
    {
        name: 'Genre',
        items: [
            {
                label: 'Superhero',
                id: '1',
                selected: true
            },
            {
                label: 'Crime',
                id: '2',
                selected: false
            },
            {
                label: 'Noir',
                id: '3',
                selected: false
            }
        ]
    }
];

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: filters
        };

    }

    render() {
        return (
            <div className="filters">
                {this.state.filters.map((filter, i) => {
                    return (
                        <Filter key={i} open={filter.open} filterName={filter.name} filterItems={filter.items}/>
                    )
                })}
            </div>
        )
    }
}

export default Filters;