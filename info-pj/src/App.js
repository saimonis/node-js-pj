import React, {PureComponent} from 'react';
import './App.css';
import AppMenu from "./components/menu";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/routes";
import {Provider} from "react-redux";
import store from "./store";



class App extends PureComponent {
    render() {

        return (<>
            <Provider store={store}>
            <BrowserRouter>
                <AppMenu/>
                <Routes/>
            </BrowserRouter>
            </Provider>
        </>)
    }
}

export default App;
