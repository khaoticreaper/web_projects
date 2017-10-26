$(function() 
{
  $("#my_bookshelf").ready(function() 
  {
    var bookshelfAPI = "https://www.googleapis.com/books/v1/users/104924039233505275823/bookshelves/0/volumes";
    loadBookshelf(bookshelfAPI);
  });
});

$(function() 
{
  $("#search").click(function() 
  {
    var parameters1 = "?q="+$("#searchInput").val()+"&startIndex=0";
    var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameters1;
    loadSearch(service_point);
  });

  $("#Milestone3_Page1").on('click', function() 
  {
    $("#book_results").empty();
    var parameters1 = "?q="+$("#searchInput").val()+"&startIndex=0";
    var service_point = "https://www.googleapis.com/books/v1/volumes?q=" + parameters1;
    loadSearch(service_point);
  });

  $("#Milestone3_Page2").on('click', function() 
  {
    $("#book_results").empty();
    var parameters2 = "?q="+$("#searchInput").val()+"&startIndex=10";
    var service_point = "https://www.googleapis.com/books/v1/volumes?q=" + parameters2;
    loadSearch(service_point);
  });

  $("#Milestone3_Page3").on('click', function() 
  {
    $("#book_results").empty();
    var parameters3 = "?q="+$("#searchInput").val()+"&startIndex=20";
    var service_point = "https://www.googleapis.com/books/v1/volumes?q=" + parameters3;
    loadSearch(service_point);
  });

  $("#Milestone3_Page4").on('click', function() 
  {
    $("#book_results").empty();
    var parameters4 = "?q="+$("#searchInput").val()+"&startIndex=30";
    var service_point = "https://www.googleapis.com/books/v1/volumes?q=" + parameters4;
    loadSearch(service_point);
  });

  $("#Milestone3_Page5").on('click', function() 
  {
    $("#book_results").empty();
    var parameters5 = "?q="+$("#searchInput").val()+"&startIndex=40";
    var service_point = "https://www.googleapis.com/books/v1/volumes?q=" + parameters5;
    loadSearch(service_point);
  });
});


function loadBookshelf(bookshelfURL) 
{

  $.getJSON(bookshelfURL, function(json) 
  {
    var bookshelfData = "";
    for (i in json.items) 
	{
      bookshelfData+="<img class='book' bookID='"+ json.items[i].id +"' ";
      bookshelfData+="src='"+ json.items[i].volumeInfo.imageLinks.smallThumbnail +"'>";
    }
    $("#my_bookshelf").html(bookshelfData);
    $(".book").on('click', function() 
	{
      load_book_results($(this).attr("bookID"));
    });
  });
}

function loadSearch(searchURL) 
{
  $("#book_results").html("Searching..."+"<img src='http://vignette1.wikia.nocookie.net/wikiality/images/7/70/ProgressBar.gif/revision/latest?cb=20070406024457'>");
  $.getJSON(searchURL, function(json) 
  {
    var searchTerm = "";
      for (i in json.items) 
	  {
        searchTerm += "<img class='book' bookID='"+ json.items[i].id + "' ";
        searchTerm += "src='"+ json.items[i].volumeInfo.imageLinks.smallThumbnail +"'>";
      }

      $("#book_results").html(searchTerm);
      $(".book").on('click', function() 
	  {
        load_book_results($(this).attr("bookID"));
      });
  });
}

function load_book_results(clickedBook) 
{
  $("#display_results").html("Getting results..."+"<img src='http://vignette1.wikia.nocookie.net/wikiality/images/7/70/ProgressBar.gif/revision/latest?cb=20070406024457'>");
  $.getJSON("https://www.googleapis.com/books/v1/volumes/" + clickedBook, function (json)
  {
    $("#display_results").empty();
      var results = "<img class='book' src='"+ json.volumeInfo.imageLinks.smallThumbnail +"'>";
      results += "<h2><u>" + json.volumeInfo.title + "</u></h2>";
      results += "<br><p><u>Author:</u> " + json.volumeInfo.authors + "</br>";
      results += "<u>Publisher:</u> " + json.volumeInfo.publisher + "</br>";
      results += "<u>ISBN:</u> " + json.volumeInfo.industryIdentifiers[0].identifier + "</br>";
      results += "<u>Number of Pages:</u> " + json.volumeInfo.pageCount + "</br>";
      if(typeof(json.saleInfo.listPrice) != "undefined") 
	  {
        results += "<u>List Price:</u> $" + json.saleInfo.listPrice.amount + "</br>";
      } 
	  else 
	  {
        results += "<u>List Price:</u> Not Listed</br>";
      }
      results += "<u>Description:</u> " + json.volumeInfo.description + "</br>";
      $("#display_results").html(results);
  });
};