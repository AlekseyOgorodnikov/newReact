import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import UserContainer from "./components/Users/UserContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <NavigationBar />
                <div className="app-content">
                    <Route path='/dialogs' render={() => <DialogsContainer
                    />} />
                    <Route path='/profile' render={() => <Profile
                    />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/users' render={() => <UserContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/setting' render={() => <Setting />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
