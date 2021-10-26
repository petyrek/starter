import React from "react"
import { logout } from "data/auth/rx"

export const Header = () => (
  <header>
    header
    <button onClick={logout}>logout</button>
  </header>
)
