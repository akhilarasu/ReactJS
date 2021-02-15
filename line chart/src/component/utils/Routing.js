import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Chart from '../pages/Chart'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

export default class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/chart" component={Chart} exact />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
