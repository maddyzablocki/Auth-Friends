import React from 'react';
import Friend from './Friends'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
       axiosWithAuth()
       .get("/api/friends/")
       .then(res => {
           console.log(res.data);
           this.setState({
               friends: res.data
           });
       })
       .catch(err => console.log(err));
    };

    render() {
        console.log(this.state, "rendering");
        return(
            <div className="friends-list">
                <div className="header-section">
                <h1>F . R . I . E . N . D . S</h1>
                </div>
                <Friend/>
                <div className="friends-list-body">
                {this.state.friends.map(item => (
                    <div className="individual-friend"key={item.id}>
                    <h3> {item.name}</h3>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default FriendList;