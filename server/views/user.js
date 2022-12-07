$(document).ready(function () {
  const queryString = window.location.search;
  $.ajax({
      method:'POST',
      url:'http://127.0.0.1:3000/pleaseWork/' + queryString,
      success:function(response){
          console.log(" successfull response ");
        if(response.code == ('ER_DUP_ENTRY')){
            alert("Username is already in use. Please choose another one");
            location.href = "/newUser";
        }
          integrate(response);        
      },
      error: function(textStatus, errorThrown) { 
        // alert(errorThrown);
        // alert(textStatus);
        alert("Username does not exist or password doesn't match. Please try again"); 
        location.href = "/";
    }
  });
  
  function integrate(data){
    console.log(data);
      var element = document.getElementById('welcomeMat');
      element.innerHTML = 'Welcome ' + data.username;
      localStorage.username = data.username;
  }
});

