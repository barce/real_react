/* global React: false, ReactDOM: false*/
import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './WordCounter';

ReactDOM.render(
  <WordCounter text="Count the words in here." targetWordCount={10} />,
  document.getElementById('app')
);

ReactDOM.render(
  <WordCounter targetWordCount={10} />,
  document.getElementById('app')
);

