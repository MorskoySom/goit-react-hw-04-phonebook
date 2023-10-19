import React from "react";
import { Contact } from "Element/Element";

export const ContactList = ({ persons, toDelete }) => {
    return (
        <ul>{persons.map(person => (
            <li key={person.id}>
                <Contact info={person} toDelete={toDelete} />
            </li>
        ))}
        </ul>)
}