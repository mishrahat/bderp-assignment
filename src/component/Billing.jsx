import React, { useContext } from "react";
import { AppContext } from "../App";
import data from "../constants/data";

const Billing = () => {
  const {
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
  } = useContext(AppContext);

  return (
    <div>
      <h3>BILLING ADDRESS</h3>
      <form className="form">
        <label>Country</label>
        <input
          list="countries"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          placeholder="Please Search"
        />

        <datalist id="countries">
          {data.countries?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>Devision/Provice/State</label>
        <input
          list="state"
          disabled={!selectedCountry}
          value={selectedCountry ? selectedState : ""}
          onChange={(e) => setSelectedState(e.target.value)}
          placeholder="Please Search"
        />
        <datalist id="state">
          {data.states[selectedCountry]?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>District</label>
        <input
          list="district"
          disabled={!selectedState}
          value={selectedCountry ? selectedDistrict : ""}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          placeholder="Please Search"
        />
        <datalist id="district">
          {data.districts[selectedState]?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>City/Sub District/Thana</label>
        <input
          list="city"
          disabled={!selectedDistrict}
          value={selectedCountry ? selectedCity : ""}
          onChange={(e) => setSelectedCity(e.target.value)}
          placeholder="Please Search"
        />
        <datalist id="city">
          {data.cities[selectedDistrict]?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>Union/Area/Town</label>
        <input
          list="town"
          disabled={!selectedCity}
          value={selectedCountry ? selectedTown : ""}
          onChange={(e) => setSelectedTown(e.target.value)}
          placeholder="Please Search"
        />
        <datalist id="town">
          {data.towns[selectedCity]?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>Zipcode</label>
        <input
          list="zipcode"
          disabled={!selectedTown}
          value={selectedCountry ? selectedZipCode : ""}
          onChange={(e) => setSelectedZipCode(e.target.value)}
          placeholder="Please Search"
        />
        <datalist id="zipcode">
          {data.zipCodes[selectedCity]?.map((op) => (
            <option>{op}</option>
          ))}
        </datalist>

        <label>Street Address/Village</label>
        <input
          disabled={!selectedZipCode}
          value={selectedCountry ? selectedAddress : ""}
          onChange={(e) => setSelectedAddress(e.target.value)}
          placeholder="Please Search"
        />
      </form>
    </div>
  );
};

export default Billing;
