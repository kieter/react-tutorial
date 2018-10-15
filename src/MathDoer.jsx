import React from "react";
import PropTypes from "prop-types";

class MathDoer extends React.Component {
    // We need a constructor for components that store state about themselves
    // Which most of them will
    constructor() {
        // Call super
        super()
        // React components have state and this is used to store information about itself
        this.state = {
            // In this case it's the number that is represented which can change
            number: 0
        }
    }

    // Here is the add function
    // Weird it gets the onAdd function from something called props? I'll explain.
    add = () => {
        // You've probably seen variables in JS are var, which you can still do
        // In ES6, the latest standard for JS, there are 3 variable declarations:
        // var: globally scoped 
        // let: locally scoped
        // const: locally scoped and doesn't change
        // It's bad to use var since namespaces might collide so just use let
        // ES6 just adds syntactic sugar on top of JS
        // Moving on...

        // Another ES6 thing is the {} around onAdd and number
        // This is called destructuring (google it)
        // An equivalent statement is if you went:
        // const onAdd = this.props.onAdd;
        // There are more complex uses of destructuring, this is just a basic one
        // We're just receiving the function add from App.jsx that was passed through props
        // props are explained in App.jsx after this file
        let {number} = this.state;
        const {onAdd} = this.props;

        // Here we update state
        // You can't go:
        // this.state.number = onAdd(number) just because
        // You have to call setState() and pass an object of what changed in state
        this.setState({
            number: onAdd(number)
        })
    }

    // A similar function for subtract
    subtract = () => {
        let {number} = this.state;
        const {onSubtract} = this.props;
        this.setState({
            number: onSubtract(number)
        })
    }

    // Render function, this is what <MathDoer></MathDoer> will display
    render() {
        // That destructuring thing again, this time we get the value of number from state
        const {number} = this.state;
        // We receive the symbols "+" and "-" from props as well
        // An argument could be, why would you pass down the strings + and -?
        // Couldn't you explicitly declare them here?
        // Coudln't you also define the add and subtract functions here instead of passing them down thorugh props?
        // The answer is yes but it's bad practice.
        // Components should only know how to display themselves and nothing about their functionality
        // By passing them down we can re use the functionality 
        // It also provides a layer of indirection, which is nice
        // I'll admit, passing all that stuff down like this through props is overkill for a small project like this
        // But is not overkill for homefinder so try to follow this pattern
        const {addSymbol, subtractSymbol} = this.props;
        return (
            // Render will return HTML that you define.
            // Using HTML inside javascript code like this is what's known as JSX i.e. JavaScript + XML
            // Hence the extension of the file name "MathDoer.jsx", "App.jsx"
            <div>
                {/* You'll see the use of {} again here but this is NOT the same as above */}
                {/* Again, this is NOT destructuring */}
                {/* When you see {} in HTML like this that means any code inside the {} is JavaScript */}
                {/* Here we use the {} to receive the function subtract from its definition above */}
                {/* subtractSymbol is from the this.props like above*/}
                <button onClick={this.subtract}>{subtractSymbol}</button>
                {/* We get the value of number displayed in the div in a similar way */}
                <div>{number}</div>
                {/* And again with the add function */}
                <button onClick={this.add}>{addSymbol}</button>
            </div>
        )
    }
}

// Now we're out of the JSX
// What's propTypes?
// Like I said before, passing down props is the React way of doing things
// But how do developers know what props a component accepts and needs to work properly?
// One way is to read the whole thing
// The faster way is to include propTypes at the bottom (or top) of your file
// Note: this is not syntactically required, it's for developers to communicate what props a component accepts
MathDoer.propTypes = {
    // So here we say that addSymbol is a string that is required to be passed down for MathDoer to display itself correctly
    addSymbol: PropTypes.string.isRequired,
    subtractSymbol: PropTypes.string.isRequired,
    // Here we say that an Add and Subtract function is required so that MathDoer works correctly
    onAdd: PropTypes.func.isRequired,
    onSubtract: PropTypes.func.isRequired
}

// Here we're saying that we "default" export the component MathDoer
// You'll see that at the top of App.jsx we import a few modules
// Namely React and MathDoer (which is this file)
// If we had only written, `export MathDoer` as opposed to what's beneath
// We'd need to write: 
// import {MathDoer} from "./MathDoer" at the top of App.jsx to get this component
// Basically `default` communicates the fact that MathDoer is the main thing you get from this file
// We could export other functions like add or subtract as we defined but we don't need to

// Back to App.jsx
export default MathDoer;