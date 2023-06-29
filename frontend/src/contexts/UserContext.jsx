import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const userMemo = useMemo(() => ({ user, setUser }));
  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = { children: PropTypes.elementType.isRequired };

export { UserContextProvider, useUserContext };
