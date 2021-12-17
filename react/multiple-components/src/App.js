import React from 'react' ;

function Hello(props) {
  return <div>Hello {props.name}</div>;
}

export default function App() {
  return (
      <div>
        <Hello name="Manuel" />
        <Hello name="Tom" />
      </div>
  );
}
