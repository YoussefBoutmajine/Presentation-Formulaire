import { useState } from "react"
function Test (){
  const [name,setName]= useState('')
  const handleInt = e => {
    setName (e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert (`Hi ${name}`)

    
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input type="text" name="name" id="name" value={name} onChange={handleInt}/>
        <button type="submit">Eonvoyer</button>
      </form>
    </div>
  )

}
 export default Test 