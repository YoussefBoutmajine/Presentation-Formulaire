import { useState } from "react"

function Form(){
  const[raja,setRaja]= useState({
    name : '',
    password :'',
    genre :'',
    ville :'',
    language:[]
  })
  function handleChange(e){
    const name = e.target.name
    let value = e.target.value 
    if (name=='language'){
      if(!raja.language.includes(value)){
        setRaja({...raja,language:[...raja.language,value]})
      }else{
        setRaja({...raja ,language: raja.language.filter(i=>i!=value)})
      }
    }else{
    setRaja({...raja,[name]:value})}
  }
  function handleSubmit(e){
    e.preventDefault()
    alert(`Hi ${raja.name }is this your language ${raja.language}`)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name :</label><br />
        <input type="text" name="name" id="name" required onChange={handleChange}/><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" id="password" required onChange={handleChange}/><br />
        <label htmlFor="genre">Gender :</label>
        <input type="radio" name="genre" id="genre" value="male" onChange={handleChange} />Male
        <input type="radio" name="genre" id="genre" value="female" onChange={handleChange}/>Female <br />
        <label htmlFor="Language"> Language </label>
        <input type="checkbox" name="language" value="html" onChange={handleChange} /> HTML
        <input type="checkbox" name="language" value="css" onChange={handleChange}/>CSS
        <input type="checkbox" name="language" value="javascript" onChange={handleChange} />JAVASCRIT
        <input type="checkbox" name="language" value="python" onChange={handleChange}/>PYTHON <br />
        <select name="ville" id="ville" required onChange={handleChange}>
          <option value="casa">Casablanca</option>
          <option value="rabat">Rabat</option>
          <option value="agadir">Agadir</option>
        </select><br />
        <button type="submit"> Send </button>
      </form>
    </div>
  )
}
export default Form