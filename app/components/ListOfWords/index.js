import React from 'react';
import PropTypes from 'prop-types';

class ListOfWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
  }

  render() {
    return <div>{this.props.words.join(',')}</div>;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.words === this.state.words;
  }
}

ListOfWords.propTypes = {
  words: PropTypes.array,
};

export default ListOfWords;
