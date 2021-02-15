import React from 'react'
import ReactDOM from 'react-dom'
import Chart from '../pages/PageNotFound'

it("renders without crashing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<div>page not found</div>)
})