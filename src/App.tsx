import React from 'react'
import HomePage from "./Components/Pages/HomePage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HotelsPage from "./Components/Pages/HotelsPage";
import CarsPage from "./Components/Pages/CarsPage";
import BasketPage from './Components/Pages/BasketPage';
import DriverPage from "./Components/Pages/DriverPage";
import EconomTravelsPage from "./Components/Pages/EconomTravelsPage";
import PlansPage from "./Components/Pages/PlansPage";
import InstrumentsPage from "./Components/Pages/InstrumentsPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact><HomePage/></Route>
                    <Route path="/hotels" exact> <HotelsPage/></Route>
                    {/*<Route path="/hotels/:id" exact> <HotelPage/></Route>*/}
                    <Route path="/cars" exact><CarsPage/></Route>
                    <Route path="/basket" exact><BasketPage/></Route>
                    <Route path="/driver" exact><DriverPage/></Route>
                    <Route path="/econom-travels" exact><EconomTravelsPage/></Route>
                    <Route path="/plan" exact><PlansPage/></Route>
                    <Route path="/instruments" exact><InstrumentsPage/></Route>
                </Switch>
            </BrowserRouter>
            {/*<ScrollUpButton*/}
            {/*    ContainerClassName="AnyClassForContainer"*/}
            {/*    TransitionClassName="AnyClassForTransition"*/}
            {/*    style={{*/}
            {/*        background: "#f1b8c4",*/}
            {/*        borderRadius: "10px",*/}
            {/*        height: "30px",*/}
            {/*        width: "30px",*/}
            {/*        boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.15)",*/}
            {/*        border: "1px solid rgba(255,255,255, 0.5)"*/}
            {/*    }}*/}
            {/*>*/}
            {/*</ScrollUpButton>*/}
        </div>
    );
}

export default App;
