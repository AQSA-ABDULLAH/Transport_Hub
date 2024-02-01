import React from "react";
import GlobalRoute from "./routes/GlobalRoute";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="*" element={<GlobalRoute />} />
      </Routes>
     
    </>
  );
};

export default App;
