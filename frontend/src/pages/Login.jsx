import { useState, useEffect } from "react"
import {FaSignInAlt} from "react-icons/fa"
function Login() {
  const [formdata, setFormdata] = useState({
    
    email: "",
    password: "",
    
  })
  const { name, email, password  } = formdata

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
        <FaSignInAlt/> Login
      </h1>
      <p>Login to set tasks</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        
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
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login
