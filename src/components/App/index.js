import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { global } from "./App.module.css";
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
let devRedirect = null;
if (document.domain === "localhost") {
    devRedirect = (
        <Route exact path="/">
                    <Redirect to="/graphic-portfolio" />
        </Route>
    )
} 
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
    <div className={global} >
        <Header />
             <BrowserRouter >
                {devRedirect}
                <Route exact path="/graphic-portfolio/">
                    <PreviewList images={portfolioSamples} />
                </Route>
                <Route 
                    exact 
                    path="/graphic-portfolio/:id" 
                    render={props => <View images={portfolioSamples} {...props} />} 
                />
            </BrowserRouter>
        <Footer />
    </div>
    );
};
