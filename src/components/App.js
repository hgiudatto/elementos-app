import React, {useState} from "react";
import './App.css';/* 
import CicloDeVida from "./CicloDeVida"; */
import PokeApiExample from "./PokeApiExample";
/* import ResizeApp from "./ResizeApp"; */
/* import Header from "./Header"; */
/* import AddElement from "./AddElement"; */
/* import ElementList from "./ElementList"; */
/* import FetchCard from "./FetchCard"; */
/* import Divider from '@mui/material/Divider'; */

function App() {
  const cities = [
    {
      id: "1",
      name: "London",
      airport: "Heathrow",
      country: "England"
    },
    {
      id: "2",
      name: "Frankfurt",
      airport: 'FRA',
      country: "Germany"
    }
  ];

  const [show, setShow] = useState(false);

  return (
      <div className="ui container">
        {/* <button onClick={() => setShow(!show)}>
          Show/Hide
        </button>
        {show && <CicloDeVida />} */}
        {/* {show && <ResizeApp />} */}
        {/* <Header />
        <AddElement />
        <ElementList cities={cities} />
        <FetchCard /> */}
        <PokeApiExample />
      </div>
  );
}

export default App;
