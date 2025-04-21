import React from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);
  return (
    <ul className={s.list}>
      {!filter
        ? contacts.map((contact) => <Contact key={contact.id} item={contact} />)
        : contacts
            .filter((contact) => contact.name.toLowerCase().includes(filter))
            .map((contact) => <Contact key={contact.id} item={contact} />)}
    </ul>
  );
};

export default ContactList;
