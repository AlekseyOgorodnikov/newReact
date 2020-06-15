import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

function App(props) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <NavigationBar/>
                <div className="app-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
