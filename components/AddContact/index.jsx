import styles from "./style.module.scss"
import { useState, useEffect } from "react"
export default function AddContact({ setContactItem }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const add = (e) => {
        e.preventDefault();
        setContactItem({
            name: name,
            lastname: lastName,
            phonenumber: phoneNumber
        });

        setName("");
        setLastName("");
        setPhoneNumber("");
    }
    return (
        <div className={styles.AddContact}>
            <form onSubmit={add}>
                <label htmlFor="name">Write the name</label>
                <input type="text" id="name" name="name" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="lastname">Write the last name</label>
                <input type="text" id="lastname" name="lastname" placeholder="last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="phonenumber">Write the phone number</label>
                <input type="text" id="phonenumber" name="phonenumber" placeholder="phone number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}