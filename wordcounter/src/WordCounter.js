/* global React: false, ReactDOM: false*/
import React from 'react';
import ProgressBar from './ProgressBar';
import Counter from './Counter';
import Editor from './Editor';
import SaveManager from './SaveManager';
import countWords from './countWords';
import makeFakeRequest from './makeFakeRequest';

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const WAITING = 'WAITING';
const IDLE = 'IDLE';



function AlertBox({ status }) {
  if (status === FAILURE) {
    return <div className="mv2">Save failed</div>;
  } else if (status === SUCCESS) {
    return <div className="mv2">Save successful</div>;
  } else if (status === WAITING) {
    return <div className="mv2">Saving…</div>;
  } else {
    return null;
  }
}

class WordCounter extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(currentText) {
    this.setState(() => ({ text: currentText }));
  }
  render() {
    const { targetWordCount } = this.props;
    const { text } = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;


    return (
      <form className="measure pa4 sans-serif">
        <Editor
          onTextChange={this.handleTextChange}
          text={text}
        />
        <Counter count={wordCount} />
        <ProgressBar completion={progress} />
        <SaveManager saveFunction={makeFakeRequest} data={this.state} />
      </form>
    );
  }
}

export default WordCounter;
