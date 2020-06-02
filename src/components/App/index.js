import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Footer from "../Footer";
import PreviewList from "../PreviewList";
import View from "../View";
/*
* Can URL prams be passed via props without redux?
* Need to change router type to be able to history.push("/")
  rather than just linking to the home screen.
*/
// Images
const numberOfSamples = 7;
let portfolioSamples = [];
for (let i = 1; i <= numberOfSamples; i++) {
    portfolioSamples.push(
        {
            before:`/graphic-portfolio/images/${i}/before.jpg`,
            after:`/graphic-portfolio/images/${i}/after.jpg`,
        }
    )
}

// App component
export default () => {
    return (
    <div className={styles.global} >
        <Header />
             <BrowserRouter >
                <Route exact path="/graphic-portfolio/">
                    <PreviewList images={portfolioSamples} />
                </Route>
                <Route exact path="/:id">
                    <View />
                </Route>
            </BrowserRouter>
        <Footer />
    </div>
    );
};
