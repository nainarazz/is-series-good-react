import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from '../../axios';
import { TMBD_API_KEY } from '../../store/api-constants';
import theme from './searchBar.css';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = {
        suggestions: [],
        value: '',
        selectedShow: {}
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.getTvShow(value);
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    getSuggestionValue = suggestion => suggestion.original_name;

    renderSuggestion = suggestion => (
        <div>{suggestion.name}</div>
    );

    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue });
    };

    getTvShow = (searchValue) => {
        axios.get(`/search/tv?api_key=${TMBD_API_KEY}&language=en-US&query=${searchValue}`)
            .then(r => {
                const suggestions = r.data.results.filter(show => show.original_language === "en");
                this.setState({ suggestions });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
        console.log(suggestion);
    }

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Enter TV Serie',
            value,
            type: 'search',
            onChange: this.onChange
        };

        return (
            <Autosuggest
                theme={theme}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={(event, { suggestion }) => this.props.showSuggestionSelected(suggestion)}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showSuggestionSelected: (showData) => dispatch({type: "SET_SHOW", showData})
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);