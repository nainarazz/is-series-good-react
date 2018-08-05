import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import MovieList from './containers/GridList/MovieList';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MovieList />
        </Layout>
      </div>
    );
  }
}

export default App;
