import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { tmbdAxiosInstance } from '../../axios';
import { TMBD_API_KEY } from '../../api-constants';
import * as actions from '../../store/actions/tvShow';
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

    getSuggestionValue = suggestion => suggestion.original_name;

    renderSuggestion = (suggestion, { query }) => {
        const suggestionText = suggestion.original_name;
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
    }

    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue });
    };

    getTvShow = (searchValue) => {
        return tmbdAxiosInstance.get(`search/tv?api_key=${TMBD_API_KEY}&language=en-US&query=${searchValue}&page=1`)
            .then(r => {
                const englishShows = r.data.results.filter(s => {
                    return s.original_language === "en" &&
                        s.vote_count > 10
                });
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
        showSuggestionSelected: (showData) => dispatch(actions.fetchShowDetail(showData.id))
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);