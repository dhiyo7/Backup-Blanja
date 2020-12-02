import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Home from './Home'
import Detail from './Detail'
import MyBag from './MyBag'
import Checkout from './Checkout'
import Category from './Category'


export default function Router() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/mybag" component={MyBag} />
        <Route path="/checkout" component={Checkout}/>
        <Route path="/category/:id" component={Category}/>
        <Route path="/detail/:id" component={Detail}/>
        </BrowserRouter>
    )
}
