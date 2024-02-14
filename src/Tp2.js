import { useState } from "react"

function Contact (){
  const[message,setMessage]=useState({
    message:''
  })
  const handleChange= (e) => {
   const name = e.target.name 
   let value = e.target.value
   setMessage({...message,[name]:value})

  }
  const handleSubmit=(e) => {
    e.preventDefault()
    alert (`hey dev 201 ${message.message}`)
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us:</h1>
        Your message
        <textarea name="message" id="message" cols="30" rows="10"required onChange={handleChange}></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>

  )
}
export default Contact
