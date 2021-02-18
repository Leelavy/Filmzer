import React from 'react';
//Styles
import styled from 'styled-components';

const Chat = () => {

  return (
    <StyledChatContainer>
      Chat
    </StyledChatContainer>
  );
}

const StyledChatContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  width: 30%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;



export default Chat;