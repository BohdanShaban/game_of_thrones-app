export default class GOT_Service {  // export default  

  constructor() {
    this._APIurlBase = 'https://anapioficeandfire.com/api/'; // !!!  this.  !!!
  }

  // !!!!!  CRUCIAL THING: Where Promice Will Be Returned ? -> Then .then() Should Be Used  !!!!!

  async getResourse() { // BASE f() FOR ALL NEXT f()s
    const res = await fetch ( `${this._APIurlBase}` ); //  !!!  await -> fetch()  !!! 

    if (! res.ok) { throw new Error(`!!!!!! COULD NOT FENTCH ${this._APIurlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json(); //  !!!  await -> .json()  !!! 
  }

  getAllCharacters = () => {
    return this.getResourse('/characters?page=5&pageSize=10' ); // !!!  Additional Request Params ?param_1=5&param_2=10  !!!
  }
  getCharacter = (id) => {
    return this.getResourse( `/characters/${id}` ); 
  }

}

// TESTING EXAMPLE
//const gotClass = new GOTservice() ;

// gotClass.getResourse() // !!! return PROMICE !!!
//   .then ( res => console.log(res))
//

// gotClass.getAllCharacters() // !!! return PROMICE !!!
//   .then ( res => console.log(res))
//