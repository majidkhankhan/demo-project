import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "next/link";
const Home = lazy(() => import("../components/Home"));
const Rashifal = lazy(() => import("../components/Rashifal"));
const TajaKhabr = lazy(() => import("../components/TajaKhabr"));
const LiveNews = lazy(() => import("../components/LiveNews"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("./Header"));
const Webstorie = lazy(() => import("../components/Webstorie"));
const MpNews = lazy(() => import("../components/MpNews"));
const HealthAndFitness = lazy(() => import("../components/HealthAndFitness"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));
const Sports = lazy(() => import("../components/Sports"));
const Card = lazy(() => import("../components/Card"));
const SliderDetails = lazy(() => import("../components/SliderDetails"));
const TajaKhabarDetails = lazy(() => import("../components/TajaKhabarDetails"));
const MadhyaPradeshDetails = lazy(() =>
  import("../components/MadhyaPradeshDetails")
);
const RashifalDetails = lazy(() => import("../components/RashifalDetails"));
const WebstorieDetails = lazy(() => import("../components/WebstorieDetails"));
const VideoDetails = lazy(() => import("../components/VideoDetails"));
const DaramDetails = lazy(() => import("../components/DaramDetails"));
const KhelDetails = lazy(() => import("../components/KhelDetails"));
const BuisnessDetails = lazy(() => import("../components/BuisnessDetails"));
const ChhatisgarDetails = lazy(() => import("../components/ChhatisgarDetails"));
const RashiDetail = lazy(() => import("../components/RashiDetail"));
const BusinessDetailsD = lazy(() => import("../components/BusinessDetailsD"));
const Khels = lazy(() => import("../components/Khels"));
const KhelDetailsD = lazy(() => import("../components/KhelDetailsD"));
const Bollywood = lazy(() => import("../components/Bollywood"));
const BollywoodDetails = lazy(() => import("../components/BollywoodDetails"));
const VideoDetailsD = lazy(() => import("../components/VideoDetailsD"));
const DaramDetailsD = lazy(() => import("../components/DaramDetailsD"));
const ScrollTo = lazy(() => import("../components/ScrollTo"));
const WebStrorieD = lazy(() => import("../components/WebStrorieD"));
const DainikRashifalDetails = lazy(() =>
  import("../components/DainikRashifalDetails")
);
const TajaKhabarDetailsNews = lazy(() =>
  import("../components/TajaKhabarDetailsNews")
);
const International = lazy(() => import("../components/International"));
const InternationalDetails = lazy(() =>
  import("../components/InternationalDetails")
);
const MadhyapradeshDetailsD = lazy(() =>
  import("../components/MadhyapradeshDetailsD")
);
const OtherState = lazy(() => import("../components/OtherState"));
const OtherStateDetails = lazy(() => import("../components/OtherStateDetails"));
const ChhatisgarDetailsD = lazy(() =>
  import("../components/ChhatisgarDetailsD")
);
const RashifalDetailsD = lazy(() => import("../components/RashifalDetailsD"));

const Wether = lazy(() => import("../components/Wether"));
const NotFound = lazy(() => import("../components/NotFound"));

function App() {
  const location = useLocation();

  // Determine if Header and Footer should be rendered
  const shouldRenderHeaderFooter = (path) => {
    // Define paths where Header and Footer should not render
    const excludedPaths = ["/WebStrorieD"];

    // Check if current path is in the excluded list
    return !excludedPaths.some((excludedPath) => path.startsWith(excludedPath));
  };

  return (
    <>
      {shouldRenderHeaderFooter(location.pathname) && <Header />}
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Rashifal" element={<Rashifal />} />
        <Route path="/Webstorie" element={<Webstorie />} />
        <Route path="/TajaKhabr" element={<TajaKhabr />} />
        <Route path="/MpNews" element={<MpNews />} />
        <Route path="/HealthAndFitness" element={<HealthAndFitness />} />
        <Route path="/Sports" element={<Sports />} />
        <Route
          path="/SliderDetails/:mainKhabarId"
          element={<SliderDetails />}
        />
        <Route path="/TajaKhabarDetails" element={<TajaKhabarDetails />} />
        <Route
          path="/MadhyaPradeshDetails"
          element={<MadhyaPradeshDetails />}
        />
        <Route path="/RashifalDetails" element={<RashifalDetails />} />
        <Route path="/WebstorieDetails" element={<WebstorieDetails />} />
        <Route path="/VideoDetails" element={<VideoDetails />} />
        <Route path="/DaramDetails" element={<DaramDetails />} />
        <Route path="/KhelDetails" element={<KhelDetails />} />
        <Route path="/BuisnessDetails" element={<BuisnessDetails />} />
        <Route path="/ChhatisgarDetails" element={<ChhatisgarDetails />} />
        <Route path="/RashiDetail/:rashifalId" element={<RashiDetail />} />
        <Route
          path="/BusinessDetailsD/:mainKhabarId"
          element={<BusinessDetailsD />}
        />
        <Route path="/Khels" element={<Khels />} />
        <Route path="/KhelDetailsD/:mainKhabarId" element={<KhelDetailsD />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route
          path="/BollywoodDetails/:mainKhabarId"
          element={<BollywoodDetails />}
        />
        <Route
          path="/VideoDetailsD/:shortVideoId"
          element={<VideoDetailsD />}
        />
        <Route
          path="/DaramDetailsD/:mainKhabarId"
          element={<DaramDetailsD />}
        />
        <Route path="/WebStrorieD/:webStoriesId" element={<WebStrorieD />} />
        <Route
          path="/DainikRashifalDetails"
          element={<DainikRashifalDetails />}
        />
        <Route
          path="/TajaKhabarDetailsNews/:mainKhabarId"
          element={<TajaKhabarDetailsNews />}
        />
        <Route path="/International" element={<International />} />
        <Route
          path="/InternationalDetails/:mainKhabarId"
          element={<InternationalDetails />}
        />
        <Route
          path="/MadhyaPradeshDetailsD/:mainKhabarId"
          element={<MadhyapradeshDetailsD />}
        />
        <Route path="/OtherState/:stateId" element={<OtherState />} />
        <Route
          path="/OtherStateDetails/:mainKhabarId"
          element={<OtherStateDetails />}
        />
        <Route
          path="/ChhatisgarDetailsD/:mainKhabarId"
          element={<ChhatisgarDetailsD />}
        />
        <Route path="/Wether" element={<Wether />} />
        <Route path="/LiveNews" element={<LiveNews />} />
        <Route
          path="/RashifalDetailsD/:dainickRashiId"
          element={<RashifalDetailsD />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {shouldRenderHeaderFooter(location.pathname) && <Footer />}
      <ScrollToTop />
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
