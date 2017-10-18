
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
			this.sprites_array = [];
			// this.currentPokemon = res.name;

			$('#sprites').empty();

			if(res.sprites.back_female !== null){
				this.sprites_array.push(res.sprites.back_female);
			}
			if(res.sprites.back_shiny_female !== null){
				this.sprites_array.push(res.sprites.back_shiny_female);
			}
			if(res.sprites.back_default !== null){
				this.sprites_array.push(res.sprites.back_default);
			}
			if(res.sprites.front_female !== null){
				this.sprites_array.push(res.sprites.front_female);
			}
			if(res.sprites.front_shiny_female !== null){
				this.sprites_array.push(res.sprites.front_shiny_female);
			}
			if(res.sprites.back_shiny !== null){
				this.sprites_array.push(res.sprites.back_shiny);
			}
			if(res.sprites.front_default !== null){
				this.sprites_array.push(res.sprites.front_default);
			}
			if(res.sprites.front_shiny !== null){
				this.sprites_array.push(res.sprites.front_shiny);
			}
      for (var i = 0; i < this.sprites_array.length; i++) {
				$('#sprites').append(`
				<img id="sprites_array" src=${this.sprites_array[i]} />
			  `);
			}

			$('#favorite').html("Add favorite");
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
			if (this.favoriteArray.includes(this.currentPokemon)){
				$('#favorite').html("remove favorite");
			}	
		});//ends cacheFetch
			
	}//ends get sprite

	addFavorite(){
		if (this.favoriteArray.includes(this.currentPokemon)){
			 this.favoriteArray.splice(this.favoriteArray.indexOf(this.currentPokemon), 1);
			  $('#favorite').html("Add favorite");
		}else{
			 $('#favorite').html("remove favorite");
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
