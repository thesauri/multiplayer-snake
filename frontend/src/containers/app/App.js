import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from '../game/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
