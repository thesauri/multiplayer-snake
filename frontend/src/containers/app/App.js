import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
