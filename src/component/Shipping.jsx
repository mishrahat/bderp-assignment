import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import data from "../constants/data";

const Shipping = () => {
  const [copied, setCopied] = useState(false);

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
      <div className="shipping-flex">
        <h3>SHIPPING ADDRESS</h3>
        <a className="copy-address" href="#" onClick={() => setCopied(true)}>
          &darr; Copy Billing Address
        </a>
      </div>

      <form className="form">
        <label>Country</label>
        <input
          list="countries"
          value={copied ? selectedCountry : ""}
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
          value={copied ? selectedState : ""}
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
          value={copied ? selectedDistrict : ""}
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
          value={copied ? selectedCity : ""}
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
          value={copied ? selectedTown : ""}
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
          value={copied ? selectedZipCode : ""}
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
          value={copied ? selectedAddress : ""}
          onChange={(e) => setSelectedAddress(e.target.value)}
          placeholder="Please Search"
        />
      </form>
      {copied && <button className="save-address">Save Address</button>}
    </div>
  );
};

export default Shipping;
