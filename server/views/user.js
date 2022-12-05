$(document).ready(function () {
  const queryString = window.location.search;
  $.ajax({
      method:'GET',
      url:'http://127.0.0.1:3000/pleaseWork/' + queryString,
      success:function(response){
          // console.log(response);
          integrate(response);
      }
  });
  
  function integrate(data){
      var element = document.getElementById('welcomeMat');
      element.innerHTML = 'Welcome ' + data.username;
      // console.log("User is " + user.getUser());
  }
  
});

//   function tryingToReach(){
//     console.log("hjklkjhjkjhjkl");
//     console.log(User.getUser());
//   }

//   class User{

//     constructor(username, password, isAdmin, address){
//         this.username = username;
//         this.password = password;
//         this.isAdmin = isAdmin;
//         this.address = address;
//     }

//     getUser(){
//         return this.username + " " + this.password  + " " +  this.isAdmin  + " " +  this.address;
//     }
//   }
