$(document).ready(function () {
    // tryingToReach();
    const auth = new Auth();

document.querySelector(".logout").addEventListener("click", (e) => {
    auth.logOut();
});
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:3000/cart/' + user.username,
        success:function(response){
            console.log(response);
            // integrate(response);
        }
    });

    async function isLoggedIn () {
        const token = store.get('token')
        if (!token) return false
      }

      async function autoRedirect () {
        const validLogin = await isLoggedIn()
        if (!validLogin && location.pathname !== '/login/') redirect('/login')
        if (validLogin && location.pathname === '/login/') redirect('/')
      }
    
    function integrate(data){
        var element = document.getElementById('cartData');
        console.log(data);
        element.innerHTML = data.username + '\'s cart';
    }
  });
