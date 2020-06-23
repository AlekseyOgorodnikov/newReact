import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer />
                <NavigationBar />
                <div className="app-content">
                    <Route path='/dialogs' render={() => <DialogsContainer
                    />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer
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
