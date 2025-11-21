import { useState } from "react";

const Forms = () => {

  const [inputs ,setInputs] = useState(
    {
      nameInput:'',
      textInput:'',
      pizzaBottom:'',
      cheeseCheck:false,
      drink:''
    }
  );

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      const targetName = event.target.name;
      const targetValue = event.target.checked;
      console.log('name: '+targetName+' value: '+targetValue);
      setInputs({...inputs, [targetName]:targetValue}); //deserialisoi inputs, lisää uusi input perään


    } else if (event.target.type === 'radio') {
      const targetName = event.target.name;
      const targetValue = event.target.id;
      console.log('name: '+targetName+' value: '+targetValue);
      setInputs({...inputs, [targetName]:targetValue}); //deserialisoi inputs, lisää uusi input perään


    } else {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    console.log('name: '+targetName+' value: '+targetValue);
    setInputs({...inputs, [targetName]:targetValue}); //deserialisoi inputs, lisää uusi input perään

    }
    console.log( inputs );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));

  }


  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} style={{width:'400px', margin:"auto"}}>
        <label htmlFor={'nimi'} style={{width:'100%', margin:'auto', textAlign:'center'}}> Nimi tähän: </label>
        <input type="text" id="nimi" name={'nameInput'} value={inputs.nameInput} onChange={handleChange} style={{width:'100%', margin:'auto', padding:'0', minHeight:'30px' }} />

        <label htmlFor={'teksti'} style={{width:'100%', margin:'auto', textAlign:'center'}}> Teksti tähän: </label>
        <input type="text" id="teksti" name={'textInput'} value={inputs.textInput} onChange={handleChange} style={{width:'100%', margin:'auto', padding:'0', minHeight:'30px' }} />

        <div style={{textAlign:'center'}}>Pizzapohja:</div>
        <select name='pizzaBottom' value={inputs.pizzaBottom} onChange={handleChange} style={{width:'100%', margin:'auto', padding:'0', minHeight:'30px' }}>
          <option value={'rye'}>Rye</option>
          <option value={'wheat'}>Wheat</option>
          <option value={'gluten-free'}>Gluten-free</option>
        </select>

        <div style={{textAlign:'center'}}>Vaihtoehdot:</div>
        <label htmlFor={'juusto'} style={{width:'100%', margin:'auto', textAlign:'center'}}> Juusto
          <input checked={inputs.cheeseCheck} type="checkbox" id="juusto" name={'cheeseCheck'} value={inputs.cheeseCheck} onChange={handleChange} style={{width:'100%', margin:'auto', padding:'0', minHeight:'30px' }} />
        </label>

        <div style={{textAlign:'center'}}>Juoma:</div>

        <label htmlFor={'fanta'} style={{width:'100%', margin:'auto', textAlign:'center'}}> Fanta
          <input checked={inputs.drink === 'fanta'} type="radio" id="fanta" name={'drink'} value={inputs.drink} onChange={handleChange}  />
        </label>

        <label htmlFor={'coke'} style={{width:'100%', margin:'auto', textAlign:'center'}}> Coke
          <input checked={inputs.drink === 'coke'} type="radio" id="coke" name={'drink'} value={inputs.drink} onChange={handleChange}  />
        </label>




        <button type="submit" style={{width:'100%', margin:'auto', textAlign:'center', marginTop:'20px' }}>Submit</button>

      </form>

    </>
  );
}

export default Forms;
