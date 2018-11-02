# Lexicon

React - a declarative, efficient flexible JavaScript library for building
user interfaces.

components - the building blocks of a React UI

React component class - takes in parameters called *props* and returns a 
hierarchy of views to display via the *render* method

render - returns a description of what is to be seen on the screen. React 
takes the description and displays the result. React returns a React element,
usually JSX.

JSX - JavaScript XML

"passing props" - is how information flows in React apps from parents to 
children.

state - what components use in order to "remember" things

immutability - where data is not directly mutated. Instead, a copy of
data is made.

Data change with Mutation
```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```
Data change without Mutation
```
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
```
