/* trackr */
/* My Context [MyContext.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React, { createContext, useState } from 'react';

export const MyContext = createContext({});

export const MyProvider = ({ children }) => {
  const [startingLifeTotal, setStartingLifeTotal] = useState(0);
  const [thirdPlayerVisibility, setThirdPlayerVisibility] = useState(false);
  const [fourthPlayerVisibility, setFourthPlayerVisibility] = useState(false);

  return (
    <MyContext.Provider value={{
      startingLifeTotal,
      setStartingLifeTotal,
      thirdPlayerVisibility,
      setThirdPlayerVisibility,
      fourthPlayerVisibility,
      setFourthPlayerVisibility,
    }}>
      {children}
    </MyContext.Provider>
  );
};
