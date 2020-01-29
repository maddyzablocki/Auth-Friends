import React, { useState } from 'react';
import { withRouter } from "react-router";
import {axiosWithAuth} from '../utils/axiosWithAuth';


class Friend extends React.Component {
    state = {
      addFriend: {
        id: "",
        name: "",
        age: "",
        email: ""
      }
    };

    handleChange = e => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [e.target.name]: e.target.value
            }
        });
    }
  
    addNewFriend = e => {
      e.preventDefault();
  
      axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.addFriend)
      .then(res => {
        this.setState({ addFriend: [...res.data]})
           this.props.history.push("/api/friends");
        })
        .catch(err => console.log(err));
    };
  
    render() {
      console.log();
      return (
        <div className="form-container-2">
          <form className="form-2" onSubmit={this.addNewFriend}>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.addFriend.name}
              onChange={this.handleChange}
            />
            Age:
            <input
              type="text"
              name="age"
              value={this.state.addFriend.age}
              onChange={this.handleChange}
            />
            Email:
            <input
              type="text"
              name="email"
              value={this.state.addFriend.email}
              onChange={this.handleChange}
            />
            <button>Add</button>
          </form>
        </div>
      );
    }
  }
  export default withRouter(Friend);


