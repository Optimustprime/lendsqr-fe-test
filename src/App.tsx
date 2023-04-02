import React, { FC } from "react";
import AllRoutes from "./routes";
import {
    HashRouter as Router, Route, Routes
} from "react-router-dom";
import UserProvider from "./globalAuth";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
            <UserProvider>
                <AllRoutes />
            </UserProvider>
      </Router>
    </div>
  );
};

export default App;
