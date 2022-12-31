import React from "react";
import DesktopTwentySix from "pages/DesktopTwentySix";
import DesktopTwentyNine from "pages/DesktopTwentyNine";
import DesktopTwentyFive from "pages/DesktopTwentyFive";
import DesktopTwentyEight from "pages/DesktopTwentyEight";
import DesktopTwentyFour from "pages/DesktopTwentyFour";
import DesktopTwentyOne from "pages/DesktopTwentyOne";
import DesktopTwentySeven from "pages/DesktopTwentySeven";
import DesktopEighteen from "pages/DesktopEighteen";
import DesktopTwentyThree from "pages/DesktopTwentyThree";
import DesktopTwentyTwo from "pages/DesktopTwentyTwo";
import DesktopSeventeen from "pages/DesktopSeventeen";
import DesktopSixteen from "pages/DesktopSixteen";
import DesktopTwenty from "pages/DesktopTwenty";
import DesktopFifteen from "pages/DesktopFifteen";
import DesktopFourteen from "pages/DesktopFourteen";
import DesktopSix from "pages/DesktopSix";
import DesktopFive from "pages/DesktopFive";
import DesktopThirty from "pages/DesktopThirty";
import DesktopThirtyOne from "pages/DesktopThirtyOne";
import DesktopThirteen from "pages/DesktopThirteen";
import DesktopTwelve from "pages/DesktopTwelve";
import DesktopEleven from "pages/DesktopEleven";
import DesktopTen from "pages/DesktopTen";
import DesktopNine from "pages/DesktopNine";
import DesktopEight from "pages/DesktopEight";
import DesktopSeven from "pages/DesktopSeven";
import DesktopFour from "pages/DesktopFour";
import DesktopThree from "pages/DesktopThree";
import DesktopTwo from "pages/DesktopTwo";
import DesktopOne from "pages/DesktopOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route path="/desktopfour" element={<DesktopFour />} />
        <Route path="/desktopseven" element={<DesktopSeven />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopnine" element={<DesktopNine />} />
        <Route path="/desktopten" element={<DesktopTen />} />
        <Route path="/desktopeleven" element={<DesktopEleven />} />
        <Route path="/desktoptwelve" element={<DesktopTwelve />} />
        <Route path="/desktopthirteen" element={<DesktopThirteen />} />
        <Route path="/desktopthirtyone" element={<DesktopThirtyOne />} />
        <Route path="/desktopthirty" element={<DesktopThirty />} />
        <Route path="/desktopfive" element={<DesktopFive />} />
        <Route path="/desktopsix" element={<DesktopSix />} />
        <Route path="/desktopfourteen" element={<DesktopFourteen />} />
        <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        <Route path="/desktoptwenty" element={<DesktopTwenty />} />
        <Route path="/desktopsixteen" element={<DesktopSixteen />} />
        <Route path="/desktopseventeen" element={<DesktopSeventeen />} />
        <Route path="/desktoptwentytwo" element={<DesktopTwentyTwo />} />
        <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
        <Route path="/desktopeighteen" element={<DesktopEighteen />} />
        <Route path="/desktoptwentyseven" element={<DesktopTwentySeven />} />
        <Route path="/desktoptwentyone" element={<DesktopTwentyOne />} />
        <Route path="/desktoptwentyfour" element={<DesktopTwentyFour />} />
        <Route path="/desktoptwentyeight" element={<DesktopTwentyEight />} />
        <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
        <Route path="/desktoptwentynine" element={<DesktopTwentyNine />} />
        <Route path="/desktoptwentysix" element={<DesktopTwentySix />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
