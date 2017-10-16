$(function(){



class Pokedex {
	constructor(pokemonArray){
		this.pokemonArray = pokemonArray;
	}

	
	cacheCall(url, func){
		cachedFetch(url) 
		.then(r => r.json()) 
		.then(res => { func() })
	}
}

console.log(pokemonArray);

let testDex = new Pokedex();

testDex.

});