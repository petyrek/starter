import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { urls } from "pages/urls"
import * as R from "ramda"
import { GuardRoute } from "./GuardRoute"

export const AppRoutes = () => (
  <BrowserRouter>
  <Routes>
    {R.values(urls).map(x => <Route element={<GuardRoute type={x.type}><x.component /></GuardRoute>} path={x.path} key={x.path} />)}
  </Routes>
  </BrowserRouter>
)
