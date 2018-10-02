import React from 'react';
import PropTypes from 'prop-types';

const styleMenuContainer = {
    position: 'absolute',
    left: '18%'
}

const styleListItem = {
    display: 'inline-block',
    margin: '10px',
    padding: '5px'
}

const styleItem = {
    color: 'black',
    textDecoration: 'none'
}

const Navigation= (props, context) => {
  return (
      <div style={styleMenuContainer}>
        <ul>
            <li style={styleListItem}><a style={styleItem} href='/Home'>Home</a></li>
            <li style={styleListItem}><a style={styleItem} href='/'>Posts</a></li>
            <li style={styleListItem}><a style={styleItem} href='/About'>About</a></li>
        </ul>
      </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
