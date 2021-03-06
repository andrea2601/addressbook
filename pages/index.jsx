import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AddContact from "../components/AddContact"
import ContactList from "../components/ContactList"
import Search from '../components/Search'
import { useState, useEffect } from 'react'

export default function Home() {
  const [contactList, setContactList] = useState([
    { name: "Andrea", lastname: "Lo Giudice", phonenumber: "3698521478" },
    { name: "Alessandre", lastname: "Mangano", phonenumber: "3698781478" },
    { name: "Marco", lastname: "Conigliaro", phonenumber: "3788521478" },
    { name: "Giuseppe", lastname: "Anello", phonenumber: "3458521478" },
  ]);
  const [contactListFilter, setContactListFilter] = useState([
    { name: "Andrea", lastname: "Lo Giudice", phonenumber: "3698521478" },
    { name: "Alessandre", lastname: "Mangano", phonenumber: "3698781478" },
    { name: "Marco", lastname: "Conigliaro", phonenumber: "3788521478" },
    { name: "Giuseppe", lastname: "Anello", phonenumber: "3458521478" },
  ]);
  const [contactItem, setContactItem] = useState({});
  const [search, setSearch] = useState("");
  const [phoneId, setPhoneId] = useState("");

  useEffect(() => {
    setContactListFilter([...contactList, contactItem]);
    setContactList([...contactList, contactItem]);
  }, [contactItem]);

  useEffect(() => {
    const filtered = contactListFilter.filter(item =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      item.lastname.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setContactList(filtered);
  }, [search]);

  useEffect(() => {
    const id = contactList.findIndex(element => element.phonenumber === phoneId);
    console.log(id);
    let contacts = contactList;
    if (id > -1) {
      contacts.splice(id, 1);
      console.log(contacts)
      setContactListFilter(contacts);
      setContactList(contacts);
      setPhoneId("");
    }
  }, [phoneId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AddContact setContactItem={setContactItem} />
        <Search setSearch={setSearch} />
        <ContactList contactList={contactList} setPhoneId={setPhoneId} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
