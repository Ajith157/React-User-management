import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa";
import Header from "../components/Header";


function Login() {

    const [formData,setFormData]=useState({
        name:"",
        password:"",
    })
    const {email,password}=formData

    const onChange=()=>{}

    const onSubmit=()=>{}

  return (
    <>
      <Header />
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
