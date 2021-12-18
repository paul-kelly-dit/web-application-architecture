import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: yellow;
  border: 2px solid black;
  color: black;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  :hover {
    background: gold;
  }
`;

const App = () => {
    return (
        <div>
            <h1>An example of a styled component</h1>
            <Button disabled={ true }>Button</Button>
        </div>
    );
};

export default App;