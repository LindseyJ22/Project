class Pokedex {
	constructor(pokemonArray){
		this.pokemonArray = pokemonArray;
	}

	showDetails(){

	}

	listImages(){
		for (var i = 0; i < pokemonArray.length; i++) {
			cachedFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`)
			.then(r => r.json()) 
			.then(res => { 
			
			console.log(res);
			let pokePicture = res;
				$('#image').append(`<img src="${pokePicture.sprites.front_default}" />`);
		 	});
		}
	}

	getSprite(id){
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(r => r.json()) 
		.then(res => { 
			console.log(res);
			$('#image').html('');
			$('#image').append(`
				<img src="${res.sprites.front_default}" />
			`);
		 })
			
	}

	

	listAllPokemon(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('#names').append(`<div class="pokeName" data-count="${i}"> ${pokemonArray[i]} </div>`);
		}
	}

	sortPokemon(){

	}

	cacheCall(url, func){
		cachedFetch(url) 
		.then(r => r.json()) 
		.then(res => {  })
	}
}



$(function(){ // Document Ready Function

	let pokemon = new Pokedex();

	$(document).on('click', '.pokeName', function() {
		let id = $(this).data('count');
		pokemon.getSprite(id + 1);
	});

	pokemon.listAllPokemon();
	pokemon.cacheCall('https://pokeapi.co/api/v2/pokemon/')



}); // End of document ready function
