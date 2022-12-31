import { GoogleOAuthProvider } from "@react-oauth/google";
import {Routes,Route} from 'react-router-dom'
import DesktopOnePage from "pages/DesktopOne";
import DesktopTwelvePage from "pages/DesktopTwelve";
import DesktopTenPage from "pages/DesktopTen";
import DesktopEighteenPage from "pages/DesktopEighteen";
import DesktopTwoPage from "pages/DesktopTwo";
import DesktopFivePage from "pages/DesktopFive";
import DesktopFourPage from "pages/DesktopFour";

function App() {
  
  return (
    // <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    //   <Routes />  
    // </GoogleOAuthProvider>
    
    <div className="app">
      <Routes>
        <Route path="/*"/>
        <Route index element={<DesktopOnePage/>}/>
        <Route path="/" element={<DesktopOnePage/>}/>
        <Route path="/login" element={<DesktopTwelvePage/>}/>
        <Route path="/sign" element={<DesktopTenPage/>}/>
        <Route path="/tours" element={<DesktopTwoPage/>}/>        
        <Route path="/hotels" element={<DesktopFivePage/>}/>
        <Route path="/flights" element={<DesktopFourPage/>}/>
      </Routes>  
    </div>
    
  );
}

export default App;
