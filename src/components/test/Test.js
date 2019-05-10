import React, { Component } from "react";

export class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  //good place for AJAX calls, called when component output is added to DOM
  componentDidMount() {
    console.log("componentDidMount...");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // //deprecated
  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // //called when compnent updates (like if state changes), just after DOM update
  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // //deprecated
  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // //deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //can't use setState, must return state instead
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

/**
 * Better Comments Test
 *
 * * This is a very important line
 *
 * ! Warning: don't use this code!
 *
 * ? Questions?
 *
 * TODO: Remove Herobrine
 *
 * //REDACTED
 *
 * @param myParam example parameter string
 */

export default Test;
