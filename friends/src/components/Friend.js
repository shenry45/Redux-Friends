import React from 'react';
import styled from 'styled-components';

const Friend = props => {
  console.log(props);
  
  return(
    <FriendDiv>
      <p>Name: <strong>{props.friend.name}</strong></p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </FriendDiv>
  )
}

const FriendDiv = styled.div`
  margin-bottom: 15px;
  background: #ececec;
  padding: 10px 20px;
  border-top: 2px solid #a5a5a5;

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export default Friend;