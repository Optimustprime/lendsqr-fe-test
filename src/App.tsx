import React, { FC } from "react";
import AllRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./globalState";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <AllRoutes />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
