function addFavorite(product){
    const auth = new Auth();
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000' + product,
        success:function(response){
            console.log(response);
            // integrate(response);
        }
    });
}