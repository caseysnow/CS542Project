$(document).ready(function () {
  const queryString = window.location.search;
  $.ajax({
    method:'GET',
    url:'http://127.0.0.1:3000/login/' + queryString,
    success:function(response){
        console.log(response);
        integrate(response);        
    },
    error: function(textStatus, errorThrown) { 
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

