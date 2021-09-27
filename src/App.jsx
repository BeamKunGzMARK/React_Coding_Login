import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Desk from "./Desk";
import Nodesk from "./Nodesk";
import firebase from "./firebase_service/firebase";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            console.log(user);
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Nodesk user={user} />
        </div>
    );
}

export default App;
