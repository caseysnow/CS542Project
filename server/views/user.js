$(document).ready(function () {
  const queryString = window.location.search;
  $.ajax({
      method:'GET',
      url:'http://127.0.0.1:3000/pleaseWork/' + queryString,
      success:function(response){
        //   console.log(response);
        if(response.code == ('ER_DUP_ENTRY')){
            alert("Username is already in use. Please choose another one");
            location.href = "/newUser";
        }
          integrate(response);        
      },
      error: function(textStatus, errorThrown) { 
        alert("Username does not exist or password doesn't match. Please try again"); 
        location.href = "/";
    }
  });
  
  function integrate(data){
      var element = document.getElementById('welcomeMat');
      element.innerHTML = 'Welcome ' + data.username;
      localStorage.username = data.username;
      console.log("User is " + user.getUser());
      addCart(data.username);
  }
  function addCart(username){
    $.ajax({
      method:'GET',
      url:'http://127.0.0.1:3000/newCart/' + username,
      success:function(response){       
      }
  });
  }
});

