
import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "this is a string",
            placeholder: "Write something!",
            inputVal: ""

        }
    }

    handleInput = (e) => this.setState({ inputVal: e.target.value });

        toggleLoaded(){
            this.setState({ hasLoaded: !hasloaded})
        }
    

    render() {
        if (this.state.hasLoaded) {
        return (

            <React.Fragment>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
                <h4>{this.props.job}</h4>
                <input type="text" onChange={(e) => this.handleInput(e)} placeholder={this.state.placeholder} value={this.state.inputVal} />
            </React.Fragment>
        )
        }else {
            return (
                <React.Fragment>
                    <h1>loading...</h1>
                    <input type="button" value="Press to load" onClick={() => this.toggleLoaded ()}/>
                </React.Fragment>

            )
        }

    }
}



export default App