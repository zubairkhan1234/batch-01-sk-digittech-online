import React from 'react'
// import './styles.css'
import styles from './styles.module.css'

function Login() {

  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  function onSubmit() {
    let userData = {
      username: username,
      email: email,
      password: password
    }

    console.log(userData)

  }

  return (
    <div>

      <h1>Login Page</h1>

      <div>
        <label>Email</label>
        <input type='text' name='email' placeholder='Enter your name' /> <br />
        <label>Email</label>
        <input type='text' name='email' placeholder='Enter your name' /><br />
        <label>Email</label>
        <input type='text' name='email' placeholder='Enter your name' /><br />

        <button className={styles['submit-button']} onClick={onSubmit}>Login Now</button>
      </div>
    </div>
  )
}

export default Login
