import React, { useContext } from 'react';

const AccountContext = React.createContext({});

const ContextExample = () => {
  const accountData = useContext(AccountContext);

  return (
    <div>
      <p>Name: {accountData.name}</p>
      <p>Role: {accountData.role}</p>
    </div>
  );
};

const App = () => (
  <AccountContext.Provider value={{ name: 'Manuel', role: 'admin' }}>
    <ContextExample />
  </AccountContext.Provider>
);

export default App;