var data = [];

var booksContainer = $(".card");

$(document).ready(function () {
    //reference to input field where user searches for a book
    var searchbarInput = $("#search");

    $(document).on("submit", searchbarInput, handleSearch);

    function handleSearch() {
        //function for getting search terms from the database
        $.get("/api/search/" + searchbarInput.val().trim(), function(data) {
            console.log(data);
            $("#card").append("<img src='" + small_img_url + "'>")
        })
    }


});