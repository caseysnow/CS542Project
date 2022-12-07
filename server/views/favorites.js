$(document).ready(function () {
    if(localStorage.getItem("username")==null){
        alert("Not logged in. Please try agian")
        location.href = "/";
    }
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

        document.getElementById("leaveReview").addEventListener("click", (e) => {
            console.log("leaving a review");
            const starCount = document.createElement("input");
            starCount.setAttribute("type", "int");
            starCount.setAttribute("placeholder", "How many stars would you give this product?");
            document.getElementById("reviewSection").appendChild(starCount);
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Write your review here...");
            document.getElementById("reviewSection").appendChild(input);
            const submitButton = document.createElement("button");
            submitButton.setAttribute('id', 'submitButton');
            document.getElementById("reviewSection").appendChild(submitButton);
            document.getElementById("submitButton").addEventListener("click", (e) => {
                const queryString = window.location.search;
                // console.log(starCount.value);
                $.ajax({
                    method:'POST',
                    url:'http://127.0.0.1:3000/reviewLeft/' + queryString + "&username=" + localStorage.getItem("username") + "&stars=" + starCount.value + "&review=" + input.value,
                    success:function(response){
                        alert("Added review");
                    },
                });
            });
        });           

            document.getElementById("addToCart").addEventListener("click", (e) => {
                const queryString = window.location.search;
                    console.log("add to cart");
                    $.ajax({
                        method:'POST',
                        url:'http://127.0.0.1:3000/addToCart/' + queryString + "&username=" + localStorage.getItem("username"),
                        success:function(response){
                            alert("Added item to cart");
                        },
                    });
                });
  });