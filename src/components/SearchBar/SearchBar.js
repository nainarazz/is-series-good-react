import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { tmbdInstance, tvMazeinstance } from '../../axios';
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
        this.getTvShow(value).then(suggestions => {
            this.setState({ suggestions });
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    getSuggestionValue = suggestion => suggestion.show.name;

    renderSuggestion = (suggestion, { query }) => {
        const suggestionText = suggestion.show.name;
        const matches = AutosuggestHighlightMatch(suggestionText, query);
        const parts = AutosuggestHighlightParse(suggestionText, matches);

        return (
            <span>
                {parts.map((part, index) => {
                    const styles = part.highlight ? { fontWeight: "bold", color: "red" } : null;

                    return (
                        <span style={styles} key={index}>
                            {part.text}
                        </span>
                    );
                })}
            </span>
        );
        // <div>{suggestion.show.name}</div>
    }

    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue });
    };

    getTvShow = (searchValue) => {
        return tvMazeinstance.get(`/search/shows?q=${searchValue}`)
            .then(r => {
                console.log(r.data);
                const englishShows = r.data.filter(s => s.show.language === "English");
                return englishShows;
            })
            .catch(error => {
                console.log(error.message);
                throw new Error('error getting tv show ', error.message);
            });
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
                onSuggestionSelected={(event, { suggestion }) => this.props.showSuggestionSelected(suggestion.show)}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showSuggestionSelected: (showData) => dispatch({ type: "SET_SHOW", showData })
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);