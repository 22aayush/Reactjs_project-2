import React from "react";
import ContactForm from "./component/ContactForm/ContactForm.jsx";
import ContactHeader from "./component/ContactHeader/ContactHeader.jsx";
import Navigation from "./component/Navigation/Navigation.jsx";
import "./app.css";

export default function App() {
  return (
    <>
      <div>
        <Navigation />
        <main className="main_container">
          <ContactHeader />
          <ContactForm />
        </main>
      </div>
    </>
  );
}