import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { emptyCart } from '../../redux/actions/cart'
import ComprasDetalle from '../ComprasDetalle'
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const dispatch = useDispatch()

  async function handleLogout() {
    dispatch(emptyCart())
    setError("")
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="container">
      <div className="col s12 m6">
        <div className="#eeeeee grey lighten-3">
          <h2 className="text-center mb-4">Profile</h2>
          {error && <span>error</span>}
          <strong>Email:</strong> {currentUser.email}
          <br />
          <strong>Name:</strong>{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
          <div>
            <ComprasDetalle />
            <button
              onClick={handleLogout}
              type="submit"
              className="waves-effect waves-light btn-small"
            >
              <i className="material-icons right">cloud</i>Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
