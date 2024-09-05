import React, { useState } from "react";
import { TotalCountries } from "./countries";

function Countries() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCapital, setSelectedCapital] = useState("");

    const handleCountryChange = (event) => {
        const countryName = event.target.value;
        setSelectedCountry(countryName);

        // Find the selected country's capital
        const country = TotalCountries.find((c) => c.name === countryName);
        setSelectedCapital(country ? country.capital : "");
    };

    return (
        <>
            <select name="country" onChange={handleCountryChange} value={selectedCountry}>
                <option value="" disabled>Select a country</option>
                {TotalCountries.map((country, index) => (
                    <option key={index} value={country.name}>{country.name}</option>
                ))}
            </select>

            <select name="capital" value={selectedCapital} disabled>
                <option value="">{selectedCapital || "Select a country first"}</option>
            </select>
        </>
    );
}

export default Countries;