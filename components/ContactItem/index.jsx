import styles from "./style.module.scss"
export default function ContactItem({name, lastname, phone, setPhoneId}){
    return(
        <div className={styles.ContactItem}>
            <p onClick={()=>setPhoneId(phone)}>x</p>
            <p>{`Name:${name}`}</p>
            <p>{`Last name:${lastname}`}</p>
            <p>{`Phone number:${phone}`}</p>
        </div>
    )
}