import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const url = import.meta.env.VITE_SERVER_URL

function Registration() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    street: "",
    city: "",
    pincode: ""
  })

  const handler = (e) => {
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value
    })
  }

  const register = async (e) => {
    e.preventDefault()
    const { title, name, phone, email, password, street, city, pincode } = details

    const data = {
      title: title,
      name: name,
      phone: phone,
      email: email,
      password: password,
      address: {
        street: street,
        city: city,
        pincode: pincode
      }
    }

    try {
      const res = await axios.post(`${url}/register`, data)
      console.log(res)

      alert("you are successfully login")

      navigate('/login')

    } catch (error) {
      alert(error.response.data.message)

      console.log(error.response.data.message);

    }
  }



  return (
    <div className="App">
      <form>
        <h2>Registration</h2>
        <h4>Title</h4>
        <input
          type="text"
          name='title'
          value={details.title}
          placeholder='Mr/Miss/Mrs'
          onChange={(e) => handler(e)} />
        <h4>Name</h4>
        <input
          type="text"
          name='name'
          value={details.name}
          placeholder='Your Name..'
          onChange={(e) => handler(e)} />
        <h4>Phone</h4>
        <input
          type="text"
          name='phone'
          value={details.phone}
          placeholder='8573007234'
          onChange={(e) => handler(e)} />
        <h4>Email</h4>
        <input
          type="email"
          name='email'
          value={details.email}
          placeholder='abc@gmail.com'
          onChange={(e) => handler(e)} />
        <h4>Password</h4>
        <input
          type="password"
          name='password'
          value={details.password}
          onChange={(e) => handler(e)} />
        <h4>Address</h4>
        <div>
          <h5>Street</h5>
          <input
            type="text"
            name='street'
            value={details.street}
            placeholder='B-1248..'
            onChange={(e) => handler(e)} />
        </div>
        <div>
          <h5>City</h5>
          <input
            type="text"
            name='city'
            value={details.city}
            placeholder='kanpur..'
            onChange={(e) => handler(e)} />
        </div>
        <div>
          <h5>Pincode</h5>
          <input
            type="text"
            name='pincode'
            value={details.pincode}
            placeholder='208012'
            onChange={(e) => handler(e)} />
        </div>
        <button onClick={(e) => register(e)}>Register</button>
      </form>
      <h4>Already Registered ?..
        <Link to={'/login'}>Login</Link> 
         </h4>
    </div>
  )
}

export default Registration
