var data = [];

var booksContainer = $(".card");

$(document).ready(function () {
    //reference to input field where user searches for a book
    var searchbarInput = $("#book-box");

    $(document).on("submit", searchbarInput, handleSearch);

    function handleSearch(event) {
        event.preventDefault();
        //do nothing if field hasn't been filled out
        if (!searchbarInput.val().trim().trim()) {
            return;
        }

        //function for getting search terms
        $.get("/api/search/:term", function (data) {
            results = data;
        })
    }


});