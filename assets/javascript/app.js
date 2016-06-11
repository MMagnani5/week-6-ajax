


$('#addsuperheroes').on('click', function(){
    var superheroesName = $('#superheroes-input').val().trim();
      console.log(superheroesName);

    var superheroesButton = $('<button>');
    superheroesButton.addClass('heroes');
    superheroesButton.attr('data-heroes', superheroesName);
    superheroesButton.text(superheroesName);
    $('#buttonsAppearHere').append(superheroesButton);

 return false;
});




$(document).on('click','.heroes',function() {

   
   var input = $(this).data('heroes');
   console.log(input);

    // Variable for giphy
   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=10";

    //request for giphy
   $.ajax({
                url: queryURL,
                method: 'GET'
            })
            // receiving the response from the giphy
            .done(function(response) {
            $()
            // return the response
            var results = response.data;
            console.log(results)

    for (var i = 0; i < results.length; i++){

        var gifDiv = $('<div class="item">')

        var rating = results[i].rating;

        var p = $('<p>').text("Rating: " + rating);

        var superheroesImage = $('<img>');

        superheroesImage.attr('src', results[i].images.fixed_height.url);

        gifDiv.append(p)
        gifDiv.append(superheroesImage)

        //
        $('#gifsAppearHere').prepend(gifDiv); 

    
    }

 
  });
return false;
});      

 