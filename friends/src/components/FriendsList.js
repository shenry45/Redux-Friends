import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Friend from './Friend';

import { getFriends } from '../actions/getFriends';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    return (
      <FriendContainer>
        <h1>My Friends</h1>
        {
          this.props.friends.length > 0 && this.props.friends.map(friend => <Friend friend={friend} />)
        }
      </FriendContainer>
    )
  }
}

const FriendContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);