import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from '../axios';
import { TMBD_API_KEY } from '../store/api-constants';
import theme from './searchBar.css';

class SearchBar extends Component {
    state = {
        suggestions: [],
        value: ''
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.getTvShow(value);
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    getSuggestionValue = suggestion => suggestion.original_name;

    renderSuggestion = suggestion => (
        <div>{suggestion.original_name}</div>
    );

    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue });
    };

    getTvShow = (searchValue) => {
        axios.get(`/search/tv?api_key=${TMBD_API_KEY}&language=en-US&query=${searchValue}`)
            .then(r => {
                this.setState({ suggestions : r.data.results})
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
        console.log("suggestion selected ", {suggestion, suggestionValue, suggestionIndex, sectionIndex, method});
    }

    render() {
        const { value, suggestions } = this.state;
        console.log("SUGGESTIONS", suggestions);

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
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default SearchBar;