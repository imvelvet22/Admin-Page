import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,  ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar.jsx";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar.jsx";
//import Contacts from "./scenes/Contacts";
import Calendar from "./scenes/calendar/index.js"


function App() {
  const[theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/Contacts" element={<Contacts />} /> */}
               <Route path="/Calendar" element={<Calendar />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
