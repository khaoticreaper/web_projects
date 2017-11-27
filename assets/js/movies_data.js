<script language="JavaScript">
	$(document).ready(function ()
	{
	 var api_key = "8553e963afcc68bc0f2cd9e0fea57612";

	 $("#search_button").click(function ()
	 {
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search;
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	$("#0").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search;
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});

	$("#1").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=2";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});

	$("#2").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=3";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});

	$("#3").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=4";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});

	$("#4").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=5";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	
	$("#5").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=6";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	
	$("#6").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=7";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	
	$("#7").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=8";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	
	$("#8").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=9";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});
	
	$("#9").click(function() 
	{
		$("#movielist").html("");
		var search = $("#search_val").val();
		var parameter = "&query=" + search + "&page=10";
		var url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US" + parameter;
		searchMovie(url);
	});

	$("#popular_movies").click(function ()
	 {
		$("#movielist").html("");
		var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + api_key;
		searchMovie(url);
	});

	$("#top_rated_movies").click(function ()
	 {
		$("#movielist").html("");
		var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1";
		searchMovie(url);
	});

	$("#upcoming_movies").click(function ()
	 {
		$("#movielist").html("");
		var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key + "&language=en-US&page=1";
		searchMovie(url);
	});
	});

	function searchMovie(servicePoint)
	{

	 $.getJSON(servicePoint, function (jsonData)
	 {
		var template = $('#movie_list_template').html();
		var html = Mustache.render(template, jsonData);
		$("#movielist").append(html);
		if ($("#movielist").attr("layout")=="list") {
			$(".movie_list_item").css("width", "90%");
			$(".thumbnail").css("width", "25%").css("height", "25%");
			$(".card").show();
		}
		else {
			$(".movie_list_item").css("width", "25%");
			$(".thumbnail").css("width", "100%").css("height", "100%");
			$(".card").hide();
		}
		 $(".movie_list_itemheader").on('click', function () 
		 { 
			div=$(this).next();
			getmovie_details($(this).attr("data-movieid"), div);
		 });
	 });
	}

	function getmovie_details(movieid, div)
	{

	 $.getJSON("https://api.themoviedb.org/3/movie/" + movieid + "?api_key=8553e963afcc68bc0f2cd9e0fea57612&language=en-US", function (jsonData)
	 {
		$("#movie_details").html("");
		var template = $('#movie_details_template').html();
		var html = Mustache.render(template, jsonData);
		$(div).html(html);
		$(div).slideToggle();
				 
		$("#btnHide").click(function ()
		{
			$("#movie_details").slideToggle();
		});

	 });
	}
</script>
