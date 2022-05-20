import styles from "./style.module.scss"
import { useState, useEffect } from "react"
export default function Search({setSearch}) {
    const [search, setInternalSearch] = useState("");
    const changeSearch = (e) => {
        setInternalSearch(e.target.value);
        setSearch(e.target.value);
    }
    return (
        <div className={styles.Search}>
            <label htmlFor="search">Search by name or last name</label>
            <input type="text" id="search" name="search" placeholder="Search..." value={search} onChange={changeSearch} />
        </div>
    )
}