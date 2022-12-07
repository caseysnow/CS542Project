$(document).ready(function () {
    const queryString = window.location.search;
    console.log(queryString);
$.ajax({
    method:'POST',
    url:'http://127.0.0.1:3000/pleaseWork/' + queryString,
    success:function(response){
        // console.log(response);
      if(response.code == ('ER_DUP_ENTRY')){
          alert("Username is already in use. Please choose another one");
          location.href = "/newUser";
      }
        // integrate(response);
        alert("New User created. Please log in");
        location.href = "/";     
    },
    error: function(textStatus, errorThrown) { 
      location.href = "/";
  }
});
});