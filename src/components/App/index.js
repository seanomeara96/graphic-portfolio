import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Footer from "../Footer";
import PreviewList from "../PreviewList";
import View from "../View";

// App component
export default () => {
    return (
    <div className={styles.global} >
        <Header />
             <BrowserRouter >
                <Route exact path="/">
                    <PreviewList />
                </Route>
                <Route exact path="/:id">
                    <View />
                </Route>
            </BrowserRouter>
        <Footer />
    </div>
    );
};
