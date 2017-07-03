import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../../components/board/Board';

class Game extends Component {
  render() {
    return (
      <Board />
    );
  }
}

const mapStateToProps = (state, props) => ({
  players: state.players,
  board: state.board
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
