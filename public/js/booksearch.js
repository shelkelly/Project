var data = [];
var booksContainer = $(".card");

$(document).ready(function () {
    //reference to input field where user searches for a book
    var searchbarInput = $("#search");
    $(document).on("submit", searchbarInput, handleSearch);
    function handleSearch(event) {
        event.preventDefault()
        console.log(searchbarInput.val())
        //function for getting search terms from the database
        $.get("/api/search/" + searchbarInput.val().trim(), function (data) {
            console.log(data);
            $('#book-area').empty();
            const bookHolder = $("<div class='row'>");
            data.map(book => {
                return $(bookHolder).append(`<div class="col-sm-4" id="searchItem"><img src="${book.small_image_url}"><h3>${book.title}</h3>${book.authors}</div>`);
            })
            $('#book-area').append(bookHolder);



        });

        $('#book-area').each(function(fadeInDiv) {
            $(this).delay(fadeInDiv * 500).fadeIn(1000);
          });



        function fadeInPlaylist(elem) {
            elem.css('opacity',1);
        }


    };
});

