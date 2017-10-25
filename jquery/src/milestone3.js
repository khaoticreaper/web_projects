/*** Load my Google Books bookshelf ***/
$(function() {
  $("#myBookShelf").ready(function() {
    var bookshelfAPI = "https://www.googleapis.com/books/v1/users/104924039233505275823/bookshelves/0/volumes";
    loadBookshelf(bookshelfAPI);
  });
});

/*** Search for books using search term ***/
  /*** Pagination code ***/
$(function() {
  $("#search").click(function() {
    var parameters1 = "?q="+$("#searchInput").val()+"&startIndex=0";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes/" + parameters1;
    loadSearch(servicePoint);
  });

  $("#page1").on('click', function() {
    $("#bookResults").empty();
    var parameters1 = "?q="+$("#searchInput").val()+"&startIndex=0";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes?q=" + parameters1;
    loadSearch(servicePoint);
  });

  $("#page2").on('click', function() {
    $("#bookResults").empty();
    var parameters2 = "?q="+$("#searchInput").val()+"&startIndex=10";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes?q=" + parameters2;
    loadSearch(servicePoint);
  });

  $("#page3").on('click', function() {
    $("#bookResults").empty();
    var parameters3 = "?q="+$("#searchInput").val()+"&startIndex=20";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes?q=" + parameters3;
    loadSearch(servicePoint);
  });

  $("#page4").on('click', function() {
    $("#bookResults").empty();
    var parameters4 = "?q="+$("#searchInput").val()+"&startIndex=30";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes?q=" + parameters4;
    loadSearch(servicePoint);
  });

  $("#page5").on('click', function() {
    $("#bookResults").empty();
    var parameters5 = "?q="+$("#searchInput").val()+"&startIndex=40";
    var servicePoint = "https://www.googleapis.com/books/v1/volumes?q=" + parameters5;
    loadSearch(servicePoint);
  });
});

/*** And here's the magic of functions! ***/

function loadBookshelf(bookshelfURL) {

  $.getJSON(bookshelfURL, function(json) {
    var bookshelfData = "";
    for (i in json.items) {
      bookshelfData+="<img class='book' bookID='"+ json.items[i].id +"' ";
      bookshelfData+="src='"+ json.items[i].volumeInfo.imageLinks.smallThumbnail +"'>";
    }
    $("#myBookShelf").html(bookshelfData);
    $(".book").on('click', function() {
      loadBookDetails($(this).attr("bookID"));
    });
  });
}

function loadSearch(searchURL) {
  $("#bookResults").html("Searching...");
  $.getJSON(searchURL, function(json) {
    var searchTerm = "";
      for (i in json.items) {
        searchTerm += "<img class='book' bookID='"+ json.items[i].id + "' ";
        searchTerm += "src='"+ json.items[i].volumeInfo.imageLinks.smallThumbnail +"'>";
      }

      $("#bookResults").html(searchTerm);
      $(".book").on('click', function() {
        loadBookDetails($(this).attr("bookID"));
      });
  });
}

function loadBookDetails(clickedBook) {
  $("#displayDetails").html("Getting details...");
  $.getJSON("https://www.googleapis.com/books/v1/volumes/" + clickedBook, function (json){
    $("#displayDetails").empty();
      var details = "<img class='book' src='"+ json.volumeInfo.imageLinks.smallThumbnail +"'>";
      details += "<h2>" + json.volumeInfo.title + "</h2>";
      details += "<br><p>Author: " + json.volumeInfo.authors + "</p>";
      details += "<p>Publisher: " + json.volumeInfo.publisher + "</p>";
      details += "<p>ISBN: " + json.volumeInfo.industryIdentifiers[0].identifier + "</p>";
      details += "<p>Number of Pages: " + json.volumeInfo.pageCount + "</p>";
      if(typeof(json.saleInfo.listPrice) != "undefined") {
        details += "<p>List Price: " + json.saleInfo.listPrice.amount + "</p>";
      } else {
        details += "<p>List Price: Not Listed</p>";
      }
      details += "<p>Description: " + json.volumeInfo.description + "</p>";
      $("#displayDetails").html(details);
  });
};