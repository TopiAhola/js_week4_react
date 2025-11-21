import React, { useEffect } from "react";

import {useUserContext} from "../hooks/contextHooks.js";

const Logout = () => {

  const {user, handleLogin, handleLogout} = useUserContext();

  useEffect(() => {
    handleLogout();
  });

  return (
    <div>
      Logout view...



    </div>
  );
};

export default Logout;
