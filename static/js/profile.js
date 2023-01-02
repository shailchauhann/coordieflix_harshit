var app = new Vue({
    el: '#app',
    data: {
      title: 'Who is playing now?',
      users: [
        {
          avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Nathanael Moody"
        },
        {
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Jarrett Dominguez"
        }
      ]
    }
  })


//   function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     console.log(bgColor);
//     var newe = document.getElementsByClassName("svg").style.color;
//     console.log("xyz")
//     }

// random_bg_color();