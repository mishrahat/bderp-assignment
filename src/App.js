import { createContext, useState } from "react";
import "./App.css";
import Billing from "./component/Billing";
import Shipping from "./component/Shipping";

export const AppContext = createContext();

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedZipCode, setSelectedZipCode] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <div className="home">
      <AppContext.Provider
        value={{
          selectedCountry,
          setSelectedCountry,
          selectedState,
          setSelectedState,
          selectedDistrict,
          setSelectedDistrict,
          selectedCity,
          setSelectedCity,
          selectedTown,
          setSelectedTown,
          selectedZipCode,
          setSelectedZipCode,
          selectedAddress,
          setSelectedAddress,
        }}
      >
        <Billing />
        <Shipping />
      </AppContext.Provider>
    </div>
  );
}

export default App;
