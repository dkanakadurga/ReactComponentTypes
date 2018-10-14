import React from 'react';
import ListOfWords from 'components/ListOfWords';
import PropTypes from 'prop-types';

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: props.words,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({ words });

    this.setState(state => ({
      words: state.words.concat(['marklar']),
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          click me
        </button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

WordAdder.propTypes = {
  words: PropTypes.array,
};

export default WordAdder;
