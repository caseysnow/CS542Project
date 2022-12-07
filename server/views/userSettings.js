$(document).ready(function () {
    if(localStorage.getItem("username")==null){
        alert("Not logged in. Please try agian")
        location.href = "/";
    }
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/userFavorites/' + localStorage.getItem('username'),
        success:function(response){
            integrate(response);
        }
    });
    
    function integrate(data){
        console.log(data);
        var table = document.getElementById('userFavoritesTable');    
        for(i = 0; i < data.length; i ++){
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = data[i].title;
        }
    }

    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/userReviews/' + localStorage.getItem('username'),
        success:function(response){
            integrateReviews(response);
        }
    });
    
    function integrateReviews(data){
        console.log(data);
        var table = document.getElementById('userReviewsTable');    
        for(i = 0; i < data.length; i ++){
            var row = table.insertRow(i+1);
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            cell.innerHTML = data[i].title;
            cell1.innerHTML = data[i].description;
            cell2.innerHTML = data[i].num_stars;
        }
    }

  });
