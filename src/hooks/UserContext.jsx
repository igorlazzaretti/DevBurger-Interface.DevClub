import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ id:1, name: 'Igor' });

  function soma(a,b) {
    return a+b;
  }

  return (
    <UserContext.Provider value={{soma, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error('useUser must be a valid context');
  }
  return context;
}