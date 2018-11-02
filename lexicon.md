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

pure component - a main benefit of immutability

function components - components that only contain a render and 
don't have their own state.

"lifting up state" - when state is placed in the top-level component as
part of a refactor.
```
To collect data from multiple children, or to have two child components 
communicate with each other, you need to declare the shared state in their 
parent component instead. The parent component can pass the state back down 
to the children by using props; this keeps the child components in sync 
with each other and with the parent component.
```

key - is a special and reserved property in React (along with *ref*, a 
more advanced feature). When an element is created, React extracts the 
key property and stores the key directly on the returned element.

