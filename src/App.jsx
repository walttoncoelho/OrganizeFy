

import Home from "./Pages/Home/Home"
import ReactGA from "react-ga4"


function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-2MKWE3TDRC");
    // This just tracks a pageview
    ReactGA.send("pageview");
  }, []);


  return (
    <>
      <Home />
   

    </>

  )
}
export default App
