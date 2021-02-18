import React, { useState, useEffect } from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styled from 'styled-components';
//MUI Components
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from './ui-elements/CustomTextField';
import { Button } from "@material-ui/core";
//Socket
import * as io from 'socket.io-client';

const socket = io.connect("http://localhost:8080");

const Chat = () => {

  socket.on('join', "lobby");

  const userName = useSelector(state => state.user.user.username);
  const [messageInput, setMessageInput] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', ({ user, message }) => {
      setChat([...chat, { user, message }])
    })
  })

  const handleMessageInputChange = (e) => {
    setMessageInput(e.target.value);
  }

  const handleSendClick = () => {
    console.log(messageInput)
    if (messageInput.length) {
      console.log({ user: userName, message: messageInput });
      socket.emit('message', { user: userName, message: messageInput });
      setMessageInput('');
    }
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => {
      <div key={index}>
        <h3>
          {name} : <span>{message}</span>
        </h3>
      </div>
    })
  }

  return (
    <StyledChatContainer>
      <ChatSpace>
        {renderChat()}
      </ChatSpace>
      <MessageBar>
        <StyledTextContainer>
          <CustomTextField
            id="standard-basic"
            label="Message..."
            autoComplete="false"
            autoFocus="false"
            fullWidth
            onChange={handleMessageInputChange}
            value={messageInput}
          />
        </StyledTextContainer>
        <StyledButtonContainer>
          <StyledButton
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSendClick}
          >
            SEND
        </StyledButton>
        </StyledButtonContainer>
      </MessageBar>
    </StyledChatContainer>
  );
}

const StyledChatContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  width: 40%;
  height: 40vh;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 1px 0px 50px -3px rgba(0,0,0,0.78);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
`;

const ChatSpace = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: #252525;
`;

const MessageBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 1rem;
  padding: 1rem 1rem;
  width: 100%;
`;

const StyledTextContainer = styled.div`
  width: 75%;
`;

const StyledButtonContainer = styled.div`
  width: 20%;
`;

const StyledButton = styled(Button)`
  &.MuiButton-root	 {
    margin-top: 0.5rem;
    background-color: red;
    color: white;
    padding: 1rem 0;

    &:hover {
      transition: 0.5s;
      background-color: #b90000;
    }
  }
`;

export default Chat;