import React, { useState } from "react";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const ConnectionModal = () => {
  const [signUp, setsignUp] = useState(false);

  return (
    <div className="app-header">
      <div className="connect-modal">
        <div className="header-btn">
          <button onClick={() => setsignUp(true)}> s'inscrire </button>
          <button onClick={() => setsignUp(false)}> se connecter </button>
        </div>
        {signUp ? <Signup /> : <Signin />}
      </div>
    </div>
  );
};

export default ConnectionModal;
