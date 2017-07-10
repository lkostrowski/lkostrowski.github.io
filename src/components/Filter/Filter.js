import React from 'react';
import FilterAccordion from '../FilterAccordion/FilterAccordion';
import FilterName from '../FilterName/FilterName';
import FilterResults from '../FilterResults/FilterResults';

import './Filter.css'

export default class Filter extends React.Component {
    constructor(props) {
        super(props);

        // temp
        this.state = {active: false};
    }

    filterChangeHandler(val) {
        this.setState({active: val});
    }
    opened() {
        this.setState({active: true});

    }

    closed (){
        this.setState({active: false});
    }

    render() {
        return (
            <FilterAccordion onOpen={() => this.opened()}
                             onClose={() => this.closed()}
                             bar={<FilterName active={this.state.active} name="Author"/>}
                             content={<FilterResults items={['dupa', 'asd']} />}/>

        )
    }
}