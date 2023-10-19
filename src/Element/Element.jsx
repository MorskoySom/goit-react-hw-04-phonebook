import React from "react";
import { Item, Terminator } from "./Element.styled";

export const Contact = ({ info: { name, number, id }, toDelete }) => {
    return (<Item>
        <p>{name} : {number}</p>
        <Terminator onClick={() => toDelete(id)}>Delete</Terminator>
    </Item>)
}

