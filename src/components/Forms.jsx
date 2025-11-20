import { useState } from "react";

const Forms = () => {

  const [inputs ,setInputs] = useState({name:''} );

  const handleChange = (event) => {
    event.persist();

    const targetName = event.target.name;
    const targetValue = event.target.value;
    console.log('name: '+targetName+' value: '+targetValue);
    setInputs({...inputs, [targetName]:targetValue}); //deserialisoi inputs, lisää uusi input perään
    console.log( inputs );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} style={{width:'400px', margin:"auto"}}>
        <label htmlFor={'nimi'} style={{width:'100%', margin:'auto'}}> Nimi tähän: </label>

        <input type="text" id="nimi" name={'nimiInput'} value={name} onChange={handleChange} style={{width:'100%', margin:'auto', padding:'0', minHeight:'30px' }} />

        <button type="submit" style={{width:'100%', margin:'auto' }}>Submit</button>

      </form>

    </>
  );
}

export default Forms;
