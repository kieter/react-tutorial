import React from "react";
import MathDoer from "./MathDoer";
// To get started run `yarn install` and then `yarn start` and it should open on some port in your browser
// You'll see that the app is just a number and you can click + or - to change it


// There are two ways to create and render a component to the DOM
// The first way is to call ReactDOM.render() itself directly like we did in index.js.
// This is called a functional component .
// The second way is to make a class component and define the render function ourselves.
// This is more flexible since the component can have its own methods too.
// This is called a class component which is what this is

// Class components always have to extend React.Component
// This app is just a div with a number you can add and subtract
class App extends React.Component {
    // You'll see that there's some functions here and we render <MathDoer></MathDoer>
    // Just go to MathDoer.jsx for now and com back

    // READ MathDoer.jsx before going on...

    // Here we define what add and subtract from MathDoer.jsx ACTUALLY are
    // i.e. we manipulate the number received
    // btw (parameter) => is the same as just function() from vanilla JS
    // It's an ES6 thing
    // It does ONE MORE THING though which is really important
    // So you know the keyword `this`
    // (Pay attention this is confusing)
    // if we DIDN'T use the arrow function here, when we refer to this.handleAdd in render()..
    // it would think we were referring to the handleAdd function defined WITHIN render
    // But there isn't one!
    // => will do what's called "bind" this (the keyword)
    // Every function has this (the keyword) which it can use to refer to itself
    // => will essentially make the this (the keyword) in FUNCTION refer to the this (the keyword) of the CLASS
    // So we have a useful way of referring to all the functions in a class by referring to this
    
    // An equivalent way to bind this would be at the top of the class and you'd write:
    // this.bind(function-name(this))
    // or something... I don't actually know just never not do the arrow function k.
    
    // btw the function render automatically binds this
    // also if there is only one parameter for the function like below you can leave out the () when doing arrow functions
    // but I won't approve your PR if you do that since it's good styling to leave it in
    handleAdd = (number) => {
        return ++number;
    }

    handleSubtract = (number) => {
        return --number;
    }

    // K so here's the real shit

    render() {
        return (
            // Right here is where we render MathDoer and pass down
            // addSymbol = "+", and subtractSymbol="-"
            // The REAL add function
            // The REAL subtract function
            <MathDoer addSymbol="+" onAdd={this.handleAdd} subtractSymbol="-" onSubtract={this.handleSubtract}/>
        );
    }
}

export default App;
