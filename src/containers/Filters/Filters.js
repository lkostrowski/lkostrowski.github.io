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
                id: '4',
                selected: true
            },
            {
                label: 'Crime',
                id: '6',
                selected: false
            },
            {
                label: 'Noir',
                id: '11',
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

    changeHandler(item) {
        const newState = Object.assign({}, this.state);

        newState.filters.map(filter => {
            filter.items.map(currentItem => {
                if (item.id === currentItem.id) {
                    currentItem.selected = item.selected;
                }

                return currentItem;
            });

            return filter;
        });

        this.setState({filters: newState.filters})
    }

    toggleHandler(open, index) {
        const newState = Object.assign({}, this.state);

        newState.filters[index].open = open;

        this.setState({filters: newState.filters});
    }

    render() {
        return (
            <div className="filters">
                {this.state.filters.map((filter, i) => {
                    return (
                        <Filter filterChanged={(item) => this.changeHandler(item)}
                                key={i}
                                open={filter.open}
                                accordionToggled={({open, index}) => this.toggleHandler(open, i) }
                                filterName={filter.name}
                                filterItems={filter.items}/>
                    )
                })}
            </div>
        )
    }
}

export default Filters;