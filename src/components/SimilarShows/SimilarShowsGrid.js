import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import classes from './similarShows.css';
import { TMBD_IMAGE_BASE_URL } from '../../api-constants';

class SimilarShowGrid extends Component {
  render() {
    const similarShows = this.props.similarShows;
    console.log("SIMILAR SHOWS GRID", similarShows);

    return (
      <div className={classes.root}>
        <h3 style={{ color: "white" }}>Similar Shows</h3>
        <GridList className={classes.gridList} cols={2.5}>
          {similarShows.map(show => (
            <GridListTile className={classes.gridListTile} key={show.poster_path}>
              <img src={show.poster_path ? TMBD_IMAGE_BASE_URL + '/w500' + show.poster_path : ""}
                alt={show.original_name} />
              <GridListTileBar
                title={show.original_name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    similarShows: state.similarShows
  }
}

export default connect(mapStateToProps, null)(SimilarShowGrid);