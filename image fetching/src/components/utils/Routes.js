import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Image from '../pages/Image'
import ImageDetails from '../pages/ImageDetails'
import PageNotFound from '../pages/PageNotFound'
class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/image" component={Image} exact />
                        <Route path="/imageDetails" component={ImageDetails} exact />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routes;