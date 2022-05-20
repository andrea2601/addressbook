import ContactItem from '../ContactItem';
import styles from "./style.module.scss"
export default function ContactList({ contactList, setPhoneId }) {
    return (
        <div className={styles.ContactList}>
        <h2>Contact list</h2>
            {contactList.length > 0
                && contactList.map(item =>
                    <ContactItem name={item.name} lastname={item.lastname} phone={item.phonenumber} key={item.phonenumber} setPhoneId={setPhoneId}/>)}
        </div>
    )
}