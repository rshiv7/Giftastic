

// Declaring global variables to be used in functions


var buttonsHTML = '';
var TvArray = [' TheOffice', 'NewGirl', 'Parks and Recreation', 'Rick and Morty', 'Greys Anatomy', 'Friends', 'Lizzie Maguire', 'Spongebob Squarepants', 'HowIMetYourMother', 'Suits'];
var newTvValue;
var apiKey = "B89D9mNHa0BwnABa2bpkoBj1xT8itF9V";
var searchTv;
var giphyHolder;
var giphyArray = [];

function generateButtons() {
    for (var i = 0; i < TvArray.length; i++) {
        buttonsHTML += "<button class='btn btn-lrg btn-primary TvShow-buttons' data-TvShow=" + TvArray[i] + ">" + TvArray[i] + "</button>";
    }
    $('#TvShow-buttons-container').html(buttonsHTML);
}

$(document).ready(function () {

    generateButtons();

    $('body').on('click', '#add-TvShow', function (event) {
        event.preventDefault();
        newTvValue = $('#TvShow-input').val();
        newButton = "<button class='btn btn-lrg btn-primary TvShow-buttons' data-TvShow=" + newTvValue + ">" + newTvValue + "</button>";
        $('#TvShow-buttons-container').append(newButton);
    });

    $('body').on('click', '.TvShow-buttons', function (event) {
        $('.giphy-div').empty();
        searchTv = $(this).attr('data-TvShow');
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTv + "&limit=10" + "&api_key=B89D9mNHa0BwnABa2bpkoBj1xT8itF9V";
        console.log(queryURL);
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function (response) {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i]);
                    $('.giphy-div').append("<div class='outer-container'><p class='title'>Rating: " + response.data[i].rating.toUpperCase() + "</p><div class='image-container'><img class='images-returned img-responsive center-block'" + "data-still='" + response.data[i].images.downsized_still.url + "'" + "data-animate='" + response.data[i].images.downsized.url + "'" + "data-state='still'" + "src='" + response.data[i].images.downsized_still.url + "'></div></div>");
                    giphyArray.push(response.data[i].images.downsized.url);
                }
            });

            

        }); // Closes TvShow-buttons onclick event

        $('body').on('click', '.images-returned', function (event) {
            var state = $(this).attr('data-state');
            var thisImgDataStill = $(this).attr('data-still');
            var thisImgDataAnimate = $(this).attr('data-animate');
            if (state === 'still') {
                $(this).attr('src', thisImgDataAnimate);
                $(this).attr('data-state', 'animate');
            }
            if (state !== "still") {
                $(this).attr('src', thisImgDataStill);
                $(this).attr('data-state', 'still');
            }
        });  // Closes animated images onclick event
    
    }); // Closes jQuery .ready function