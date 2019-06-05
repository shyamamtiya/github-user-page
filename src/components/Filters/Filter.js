import React, { Component } from 'react'
import './Filter.css';
import Popup from '../Popup/Popup';
import { filterType, filterLanguage } from './FilterTypes';

export default class Filter extends Component {
    state = {
        filterTypeOpen: false,
        filterLangOpen: false,
    };

    openTypeFilter() {
        this.setState({
            filterTypeOpen: !this.state.filterTypeOpen,
            filterLangOpen: false,
        });
    }

    openLangFilter() {
        this.setState({
            filterLangOpen: !this.state.filterLangOpen,
            filterTypeOpen: false,
        });
    }

    filterSet(filterType, filterInfo) {
        this.props.filterRepos(filterType, filterInfo);
        this.setState({
            filterLangOpen: false,
            filterTypeOpen: false
        });
    }

    render() {
        const { searchRepos } = this.props;
        return (
            <React.Fragment>
                <div className="filter">
                    <input type="text" placeholder="Find a repository..." onChange={ev => { searchRepos(ev.target.value) }} />
                    <div> <button onClick={() => this.openTypeFilter()}>Type : <span>All</span></button>
                    <Popup filterItem={filterType}
                        filterToggle={this.state.filterTypeOpen}
                        handleClick={(filterInfo) => { this.filterSet('REPO_TYPE', filterInfo); }} /></div>
                    <div><button onClick={() => this.openLangFilter()}>Language : <span>All</span></button>
                    <Popup filterItem={filterLanguage}
                        filterToggle={this.state.filterLangOpen}
                        handleClick={(filterInfo) => { this.filterSet('LANGUAGE_TYPE', filterInfo); }} /></div>
                </div>

            </React.Fragment>)
    }
}