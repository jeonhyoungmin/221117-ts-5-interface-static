// static-type-class
class PokemonTS {
  id: number;
  name: string;
  isGet: boolean;
  constructor(id, name, isGet){
    this.id = id;
    this.name = name;
    this.isGet = isGet;
  }
}

const pickTS = new PokemonTS(1, "파이리", true);
console.log(pickTS)