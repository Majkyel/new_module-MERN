import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const style = {
    textAlign: 'center',
}

class Home extends Component {
  render() {
    return (
        <div style={style}>
            <h2>EXAMPLE HEADER FOR HOME PAGE</h2>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
