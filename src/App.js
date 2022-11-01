// src/App.js
import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json"



function App() {
  return <div className="App">

    <AddContacts />

  </div>;

}

function AddContacts() {

  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  // const winOscar = () => {
  //   if (contacts.winOscar === true) {

  //   }
  // }

 const randomList = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length)
  const contactRandom = contacts[randomIndex]

  const copyContacts = structuredClone(contacts)

  copyContacts.push(contactRandom)

  setContacts(copyContacts)
 }

 const sortPop = () => {
  const copySortPop = structuredClone(contacts)

  copySortPop.sort((elem1, elem2) => {
    if (elem1.popularity > elem2.popularity) {
      return -1
    } else {
      return 1
    }
  })
  setContacts(copySortPop)
 }

 const sortName = () => {
  const copySortName = structuredClone(contacts)

  copySortName.sort((elem1, elem2) => {
    if (elem1.name > elem2.name) {
      return 1
    } else {
      return -1
    }
  })
  setContacts(copySortName)
 }

 const eraseContact = (contactId) => {
  const filteredContact = contacts.filter((eachContact) => eachContact.id === contactId ? false : true)

  setContacts(filteredContact)

}

  return (
    <div>
      <h2>IronContacts</h2>
      <br />
      <button onClick={randomList}>Add Random Contact</button>
      <button onClick={sortPop}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      <br />
      {contacts.map((eachContact) => {
        return (
          <div key={eachContact.id}>

            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={eachContact.pictureUrl} alt="contact-picture" height="200px" /></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity.toFixed(2)}</td>
                  <td> {eachContact.wonOscar === true ? `🏆` : undefined}  </td>
                  <td> {eachContact.wonEmmy === true ? `🏆` : undefined}  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => eraseContact(eachContact.id)}>Delete</button>

          </div>

        )
      })}

    </div>
  )

}






export default App;

