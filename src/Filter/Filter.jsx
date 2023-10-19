import React from "react";
import { Filt } from "./Filter.styled";

const handleInputChange = (evt, toSearch) => {
    toSearch(evt.target.value);
}

export const Filter = ({ filterName, toSearch }) => {
    return (
        <Filt>
            Filter
            <input
                type="text"
                value={filterName}
                placeholder="name"
                onChange={evt => handleInputChange(evt, toSearch)}
            />
        </Filt>
    );
}
