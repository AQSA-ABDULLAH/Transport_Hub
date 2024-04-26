import { BrowserRouter, Route, Routes } from "react-router-dom";
import PickupBoyDashboard from "./pages/PickupBoyDashboard.js"
import LoginDetails from "./pages/SidebarPages/LoginDetails.js";
import PickupRequests from "./pages/SidebarPages/PickupRequests.js";
import Settings from "./pages/SidebarPages/Settings.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/PickupBoyDashboard" element={<PickupBoyDashboard />}>
                  <Route path="Login" element={<LoginDetails />} />
                  <Route path="pickuprequest" element={<PickupRequests />} />
                  <Route path="settings" element={<Settings/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
