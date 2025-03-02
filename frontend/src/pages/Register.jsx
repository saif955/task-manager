import { useState, useEffect } from "react"
import {FaUser} from "react-icons/fa"
function Register() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const { name, email, password, passwordConfirm } = formdata

const onChange = (e) => {
  setFormdata((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  })
  )
}
const onSubmit = (e) => {
  e.preventDefault()
  if (password !== passwordConfirm) {
    console.log("Passwords do not match")
  } else {
    console.log(formdata)
  }
}
  return (
    <>
    <section className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type="text" className="form-control" id="name" name="name"
        value={name} placeholder="Enter name"
        onChange={onChange} />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" id="email" name="email"
        value={email} placeholder="Enter your email"
        onChange={onChange} />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" id="password" name="password"
        value={password} placeholder="Enter password"
        onChange={onChange} />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" id="passwordConfirm" name="passwordConfirm"
        value={passwordConfirm} placeholder="Confirm password"
        onChange={onChange} /> 
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Register
