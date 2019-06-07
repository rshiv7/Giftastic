

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

    