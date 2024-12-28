import React, { createContext, useState/*, useContext*/ } from 'react';

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [startingLifeTotal, setStartingLifeTotal] = useState(0);

  return (
    <MyContext.Provider value={{startingLifeTotal, setStartingLifeTotal}}>
      {children}
    </MyContext.Provider>
  );
};