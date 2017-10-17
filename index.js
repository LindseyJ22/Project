
class Pokedex {
	constructor(pokemonArray){
		this.pokemonArray = [];
		this.favoriteArray = [];
		this.currentPokemon = null;
	}

	getPokemonDetails(id){
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(r => r.json()) 
		.then(res => { 
			console.log(res);
				
			
			$('#image').html(`<img src="${res.sprites.front_default}" />`); 
			$('#name').html("Name: " + res.name);
			$('#weight').html("Weight: " + res.weight);
			$('#poke_id').html("ID: " + res.id);
			$('#height').html("Height: " + res.height);
			$('#types').html("Type: ");
			for (var i = 0; i < res.types.length; i++){
				$('#types').append("<li>" + res.types[i].type.name + "</li>")
			}//ends for loop
			this.currentPokemon = res.name;
		});//ends cacheFetch
			
	}//ends get sprite

	addFavorite(){
		if (this.favoriteArray.includes(this.currentPokemon)){
			 this.favoriteArray.splice(this.favoriteArray.indexOf(this.currentPokemon), 1);
		}else{
			this.favoriteArray.push(this.currentPokemon);
		}
		this.displayFavorites();
			// console.log(res);			
	}//ends addFavorite
	displayFavorites(){
		var html = '';
		for (var i = 0; i < this.favoriteArray.length; i++) {
			html += "<li>" + this.favoriteArray[i] + "</li>";
		}
		$('#favorite_container').html(html);

	}
	
	listAllPokemon(){
		for (var i = 0; i < pokemonArray.length; i++) {
		$('#names').append(`<div class="pokeName" data-count="${i}"> ${pokemonArray[i]} </div>`);
		}
	}//ends listallpokemon

	

	
}//ends pokedex


$(function(){
 // Document Ready Function

	let pokemon = new Pokedex();

	$(document).on('click', '.pokeName', function() {
		let id = $(this).data('count');
		pokemon.getPokemonDetails(id + 1);
	});
	
	$(document).on('click', '#favorite', function(){
		pokemon.addFavorite();
	});

	pokemon.listAllPokemon();

}); // Ends document readhy
