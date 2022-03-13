import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalCss } from "./GlobalCss"
import reportWebVitals from "./reportWebVitals"
import { routeList } from "./routes/Routes"

//import tw, {styled, } from 'twin.macro';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <BrowserRouter>
      <Routes>
        {routeList.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
