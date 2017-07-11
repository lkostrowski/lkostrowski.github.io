import  React from 'react';
import './MainSearch.css';
import IconMagnify from '../Icons/IconMagnify';
import classNames from 'class-names';

export default class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputActive: false
        }
    }

    setInputState(e) {
        const isInputActive = e.target.value.length;

        this.setState({inputActive: isInputActive});
    }

    handleInputChange(e) {
        this.setInputState(e);
    }

    handleInputBlur(e) {
        if (e.target.value.length) {
            this.setState({inputActive: true});
        } else {
            this.setState({inputActive: false});
        }
    }

    handleInputFocus(e) {
        this.setState({inputActive: true});

    }

    render() {
        const labelClasses = classNames({
            'main-search__label': true,
            'main-search__label--hidden': this.state.inputActive
        });

        return (
            <div className={this.props.className + ' main-search'}>
                <input type="search"
                       onChange={(e) => this.handleInputChange(e) }
                       onBlur={(e) => this.handleInputBlur(e) }
                       onFocus={(e) => this.handleInputFocus(e) }
                       className="main-search__input"/>
                <span className={labelClasses}>
                <IconMagnify className="main-search__icon"/> <span className="main-search__label-text">Search</span>
            </span>
            </div>
        )
    }
}
