var data = [];

var booksContainer = $(".card");

$(document).ready(function () {
    //reference to input field where user searches for a book
    var searchbarInput = $("#search");

    $(document).on("submit", searchbarInput, handleSearch);

    function handleSearch(event) {
        event.preventDefault();
        
        //function for getting search terms
        $.get("/api/search/:term", function (data) {
            results = data;
        })
    }


});