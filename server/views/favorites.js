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

        document.getElementById("leaveReview").addEventListener("click", (e) => {
            console.log("leaving a review");
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Write your review here...");
            document.getElementById("reviewSection").appendChild(input);
            const submitButton = document.createElement("button");
            submitButton.setAttribute('id', 'submitButton');
            document.getElementById("reviewSection").appendChild(submitButton);
            document.getElementById("submitButton").addEventListener("click", (e) => {
                console.log(input.value);
            });
        });

            document.getElementById("").addEventListener("click", (e) => {
                const queryString = window.location.search;
                    console.log("favorites");
                    
                    $.ajax({
                        method:'POST',
                        url:'http://127.0.0.1:3000/reviewLeft/' + queryString + "&username=" + localStorage.getItem("username"),
                        success:function(response){
                            alert("Added item to favorites");
                        },
                    });
                    alert("Added item to favorites");
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