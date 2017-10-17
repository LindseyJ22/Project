$(function(){
class Pokedex {
	constructor(pokemonArray){
		this.pokemonArray = pokemonArray;
	}




	getSprite(id){
		cachedFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(r => r.json()) 
		.then(res => { 
			console.log(res);
			
			$('#image').html('');
			$('#name').html('');
			$('#weight').html('');
			$('#poke_id').html('');
			$('#height').html('');
			$('#types').html('');
			$('#image').append(`<img src="${res.sprites.front_default}" />`); 
			$('#name').append("Name: " + res.name);
			$('#weight').append("Weight: " + res.weight);
			$('#poke_id').append("ID: " + res.id);
			$('#height').append("Height: " + res.height);
			$('#types').html("Type: ");
			for (var i = 0; i < res.types.length; i++){
				$('#types').append("<li>" + res.types[i].type.name + "</li>")
			$(document).on('click', '#favorite', function(){
				$('#favorite_container').html('');
		$('#favorite_container').append(res.name);
		
	});
		

			}

		 });

			
	}//ends get sprite

	

	listAllPokemon(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('#names').append(`<div class="pokeName" data-count="${i}"> ${pokemonArray[i]} </div>`);
		}
	}

	

	
}//ends pokedex



 // Document Ready Function

	let pokemon = new Pokedex();

	$(document).on('click', '.pokeName', function() {
		let id = $(this).data('count');
		pokemon.getSprite(id + 1);
	});
	

	pokemon.listAllPokemon();



}); // Ends document readhy
