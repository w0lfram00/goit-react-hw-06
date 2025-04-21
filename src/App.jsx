import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </>
  );
}

export default App;
