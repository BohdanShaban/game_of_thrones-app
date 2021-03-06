export default class gotService {  // export default  

  constructor() {
    this._apiUrlBase = 'https://anapioficeandfire.com/api/'; // !!!  this.  !!!
  }

  // !!!!!  CRUCIAL THING: Where Promice Will Be Returned ? -> Then .then() Should Be Used  !!!!!

  getResource = async (url) => { // BASE f() FOR ALL NEXT f()s
    const res = await fetch(`${this._apiUrlBase}${url}`); //  !!!  await -> fetch()  !!! 

    if (! res.ok) { throw new Error(`!!!!!! COULD NOT FETCH ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json(); //  !!!  await -> .json()  !!! 
  }


  getAllBooks = async () => {
    const res = await this.getResource(`/books/`);
    return res.map(this._transformBook);
  }

  getBook = async (id) => {
      const book = await this.getResource(`/books/${id}/`);
      return this._transformBook(book);
  }

  getAllCharacters = async () => {
      const res = await this.getResource(`/characters?page=5&pageSize=10`);
      return res.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
      const character = await this.getResource(`/characters/${id}`);
      return this._transformCharacter(character);
  }

  getAllHouses = async () => {
      const res = await this.getResource(`/houses/`);
      return res.map(this._transformHouse);
  }

  getHouse = async (id) => {
      const house = await this.getResource(`/houses/${id}/`);
      return this._transformHouse(house);
  }

  isSet(data) {
      if (data) {
          return data
      } else {
          return 'no data :('
      }
  }

  _extractId = (item) => {
      const idRegExp = /\/([0-9]*)$/;
      return item.url.match(idRegExp)[1];
  }

  _transformCharacter = (char) => {
      return {
          id: this._extractId(char),
          name: this.isSet(char.name),
          gender: this.isSet(char.gender),
          born: this.isSet(char.born),
          died: this.isSet(char.died), 
          culture: this.isSet(char.culture)
      };
  }

  _transformHouse = (house) => {
      return {
          id: this._extractId(house),
          name: this.isSet(house.name),
          region: this.isSet(house.region),
          words: this.isSet(house.words),
          titles: this.isSet(house.titles),
          ancestralWeapons: this.isSet(house.ancestralWeapons)
      };
  }

  _transformBook = (book) => {
      return {
          id: this._extractId(book),
          name: this.isSet(book.name),
          numberOfPages: this.isSet(book.numberOfPages),
          publisher: this.isSet(book.publisher),
          released: this.isSet(book.released)
      };
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