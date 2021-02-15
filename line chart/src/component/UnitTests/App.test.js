import React from 'react'
import ReactDOM from 'react-dom'
import Routing from '../utils/Routing'

it("renders without crashing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Routing></Routing>, div)
})