$(document).ready(function () {
    document.getElementById("favButton").addEventListener("click", (e) => {
        const queryString = window.location.search;
            console.log("favorites");
            $.ajax({
                method:'POST',
                url:'http://127.0.0.1:3000/favoriteAdded/' + queryString + "&username=" + localStorage.getItem("username"),
                success:function(response){
                    alert("Added item to favorites");
                },
            });
            alert("Added item to favorites");
        });
  });