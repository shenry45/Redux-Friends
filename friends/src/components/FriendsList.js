import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';

import { getFriends } from '../actions/getFriends';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    return (
      <div>
        {
          this.props.friends.length > 0 && this.props.friends.map(friend => <Friend friend={friend} />)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);