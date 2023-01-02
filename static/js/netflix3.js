let num_cards_GLOBAL = 5;
function cr_change(){
    
    
}
function design_change(){
    
    document.getElementById("events_click").classList.remove("active");
    document.getElementById("marki_click").classList.remove("active");
    document.getElementById("media_click").classList.remove("active");
    document.getElementById("ops_click").classList.remove("active");
    document.getElementById("web_click").classList.remove("active");
    document.getElementById("design_click").classList.add("active");
    document.getElementById("CR_click").classList.remove("active");
}
function events_change(){
    
    document.getElementById("events_click").classList.add("active");
    document.getElementById("marki_click").classList.remove("active");
    document.getElementById("media_click").classList.remove("active");
    document.getElementById("ops_click").classList.remove("active");
    document.getElementById("web_click").classList.remove("active");
    document.getElementById("design_click").classList.remove("active");
    document.getElementById("CR_click").classList.remove("active");
}
function marki_change(){
    
    document.getElementById("events_click").classList.remove("active");
    document.getElementById("marki_click").classList.add("active");
    document.getElementById("media_click").classList.remove("active");
    document.getElementById("ops_click").classList.remove("active");
    document.getElementById("web_click").classList.remove("active");
    document.getElementById("design_click").classList.remove("active");
    document.getElementById("CR_click").classList.remove("active");
}
function media_change(){
    
    document.getElementById("events_click").classList.remove("active");
    document.getElementById("marki_click").classList.remove("active");
    document.getElementById("media_click").classList.add("active");
    document.getElementById("ops_click").classList.remove("active");
    document.getElementById("web_click").classList.remove("active");
    document.getElementById("design_click").classList.remove("active");
    document.getElementById("CR_click").classList.remove("active");
}
function ops_change(){
    
    document.getElementById("events_click").classList.remove("active");
    document.getElementById("marki_click").classList.remove("active");
    document.getElementById("media_click").classList.remove("active");
    document.getElementById("ops_click").classList.add("active");
    document.getElementById("web_click").classList.remove("active");
    document.getElementById("design_click").classList.remove("active");
    document.getElementById("CR_click").classList.remove("active");
}
function web_change(){
    
    document.getElementById("events_click").classList.remove("active");
    document.getElementById("marki_click").classList.remove("active");
    document.getElementById("media_click").classList.remove("active");
    document.getElementById("ops_click").classList.remove("active");
    document.getElementById("web_click").classList.add("active");
    document.getElementById("design_click").classList.remove("active");
    document.getElementById("CR_click").classList.remove("active");
}

let cards = [
    {
        background:
            "/static/images/crx.png",
        
        title: "Corporate Relations",
        description:
            "Watch this incredible film made by some incredible people!",
       
        
    },
    {
        background: "/static/images/designx.png",
        
        title: "Design",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "/static/images/eventsx.png",
       
        title: "Events",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "/static/images/markie.png",
        
        title: "Marketing",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "/static/images/mediax.png",
        
        title: "Media",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "/static/images/opsx.png",
        title: "Operations",
        description:
            "None"
    },
    {
        background:
            "/static/images/web.png",
        title: "Web",
        description:
            "Watch this incredible film made by some incredible people!"
    }
];

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".botnav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 00) {
            header.addClass(".botnav-scroll");
        } else {
            header.addClass('.botnav-scroll');
        }
    });
});

$(".watch").on('click', function () {

    var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
      var id = $(this).val();
      console.log(id)
      // console.log('Yay')
      $.ajax({
        type: "POST",
        url: 'addToWishlist',
        data: {
          'id': id
        },
        success: function (data) {
          console.log(data.id)
        }
      });    
    
    });

    
  var port1 = document.querySelector('.design-1');
  var txt1 = document.querySelector('.design-add1');
  var svg1 = document.querySelector('.design-1-svg');
      port1.addEventListener('click',()=>{
      svg1.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt1.innerHTML=`<span> Added to wishlist </span>`
  })

  var port2 = document.querySelector('.design-2');
  var txt2 = document.querySelector('.design-add2');
  var svg2 = document.querySelector('.design-2-svg');
      port2.addEventListener('click',()=>{
      svg2.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt2.innerHTML=`<span> Added to wishlist </span>`
  })
  var port3 = document.querySelector('.events-1');
  var txt3 = document.querySelector('.events-add1');
  var svg3 = document.querySelector('.events-1-svg');
      port3.addEventListener('click',()=>{
      svg3.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt3.innerHTML=`<span> Added to wishlist </span>`
  })

  var port4 = document.querySelector('.events-2');
  var txt4 = document.querySelector('.events-add2');
  var svg4 = document.querySelector('.events-2-svg');
      port4.addEventListener('click',()=>{
      svg4.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt4.innerHTML=`<span> Added to wishlist </span>`
  })
  var port5 = document.querySelector('.marki-1');
  var txt5 = document.querySelector('.marki-add1');
  var svg5 = document.querySelector('.marki-1-svg');
      port5.addEventListener('click',()=>{
      svg5.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt5.innerHTML=`<span> Added to wishlist </span>`
  })

  var port6 = document.querySelector('.marki-2');
  var txt6 = document.querySelector('.marki-add2');
  var svg6 = document.querySelector('.marki-2-svg');
      port6.addEventListener('click',()=>{
      svg6.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt6.innerHTML=`<span> Added to wishlist </span>`
  })
  var port7 = document.querySelector('.media-1');
  var txt7 = document.querySelector('.media-add1');
  var svg7 = document.querySelector('.media-1-svg');
      port7.addEventListener('click',()=>{
      svg7.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt7.innerHTML=`<span> Added to wishlist </span>`
  })

  var port8 = document.querySelector('.media-2');
  var txt8 = document.querySelector('.media-add2');
  var svg8 = document.querySelector('.media-2-svg');
      port8.addEventListener('click',()=>{
      svg8.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt8.innerHTML=`<span> Added to wishlist </span>`
  })
  var port9 = document.querySelector('.ops-1');
  var txt9 = document.querySelector('.ops-add1');
  var svg9 = document.querySelector('.ops-1-svg');
      port9.addEventListener('click',()=>{
      svg9.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt9.innerHTML=`<span> Added to wishlist </span>`
  })

  var port10 = document.querySelector('.ops-2');
  var txt10 = document.querySelector('.ops-add2');
  var svg10 = document.querySelector('.ops-2-svg');
      port10.addEventListener('click',()=>{
      svg10.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt10.innerHTML=`<span> Added to wishlist </span>`
  })
  var port11 = document.querySelector('.web-1');
  var txt11 = document.querySelector('.web-add1');
  var svg11 = document.querySelector('.web-1-svg');
      port11.addEventListener('click',()=>{
      svg11.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt11.innerHTML=`<span> Added to wishlist </span>`
  })

  var port12 = document.querySelector('.web-2');
  var txt12 = document.querySelector('.web-add2');
  var svg12 = document.querySelector('.web-2-svg');
      port12.addEventListener('click',()=>{
      svg12.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt12.innerHTML=`<span> Added to wishlist </span>`
  })
  var port13 = document.querySelector('.cr-1');
  var txt13 = document.querySelector('.cr-add1');
  var svg13 = document.querySelector('.cr-1-svg');
      port13.addEventListener('click',()=>{
      svg13.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt13.innerHTML=`<span> Added to wishlist </span>`
  })

  var port14 = document.querySelector('.cr-2');
  var txt14 = document.querySelector('.cr-add2');
  var svg14 = document.querySelector('.cr-2-svg');
      port14.addEventListener('click',()=>{
      svg14.innerHTML=`<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>`
      txt14.innerHTML=`<span> Added to wishlist </span>`
  })

let cast = [
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F338040ea81df8012c152cfa65a4c1b440a94a1bc&f=1&nofb=1",
        square: 1000,
        name: "Will Smith"
    },
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiskiyou.sou.edu%2Fwp-content%2Fuploads%2F2014%2F10%2FRobin.jpg&f=1&nofb=1",
        square: 2000,
        name: "Robin Williams"
    },
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.byrdie.com%2Fthmb%2FaSjYcUqubm-ucpugLMuN8m-nvdU%3D%2F796x700%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fcdn.cliqueinc.com__cache__posts__237400__jennifer-lawrence-hairstyles-237400-1506716140954-main.700x0c-af3f438528ea44f0aa9c3c1fe3ef8c64.jpg&f=1&nofb=1",
        square: 700,
        name: "Jennifer Lawrence"
    }
];

const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

const CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("card-carousel");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1501) {
        new_num_cards = 5;
    } else if (width <= 1500 && width > 1100) {
        new_num_cards = 4;
    } else if (width <= 1100 && width > 520) {
        new_num_cards = 3;
    } else if (width <= 520) {
        new_num_cards = 2;
    }
    

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
        
        
    }
    

    num_cards_GLOBAL = new_num_cards;
};

const ResizeHeader = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 815) {
        if (document.getElementsByClassName("hamburger").length <= 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];

            let hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");
            hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
            main_nav.remove();
            right_nav.remove();

            let bottom_header = document.createElement("div");
            bottom_header.classList.add("header-bottom");
            bottom_header.append(main_nav, right_nav);
            bottom_header.style.display = "none";

            hamburger.addEventListener("click", function () {
                if (bottom_header.style.display == "none") {
                    bottom_header.style.display = "flex";
                    header.style.paddingBottom = "9px";
                    header.style.paddingTop = "9px";
                } else {
                    bottom_header.style.display = "none";
                    header.style.paddingBottom = "0px";
                    header.style.paddingTop = "0px";
                }
            });

            header.classList.add("header-change");

            let top_header = document.createElement("div");
            top_header.classList.add("header-top");
            top_header.append(header.children[0], hamburger);

            header.innerHTML = "";
            header.append(top_header, bottom_header);
        }
    } else {
        if (document.getElementsByClassName("hamburger").length > 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];
            let brand = header.getElementsByClassName("brand")[0];

            header.classList.remove("header-change");
            header.children[0].remove();
            header.children[0].remove();
            header.append(brand, main_nav, right_nav);
        }
    }
};

const AddCards = () => {
    let carousel_width = document.getElementsByClassName("card-carousel")[0]
        .clientWidth;

    let btn_width =
        document.getElementsByClassName("carousel-btn")[0].clientWidth +
        document.getElementsByClassName("carousel-btn")[1].clientWidth;

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale =
        (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
        initial_width;

    let content_titles = document.getElementsByClassName("content-title");

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let not_chosen = [];

        for (let c = 0; c < cards.length; c++) {
            not_chosen.push(c);
        }

        for (let j = 0; j < cards.length; j++) {
            let chosen_index = Math.floor(Math.random() * not_chosen.length);

            let chosen_card = cards[not_chosen[chosen_index]];

            not_chosen.splice(chosen_index, 1);

            let card = document.createElement("div");
            // onClick :{
            //     document.getElementById("CR_click").classList.remove("active");
            //     document.getElementById("ops_click").classList.add("active");
            // }
           

            card.classList.add("card");
            
            card.style.backgroundImage = `url(${chosen_card.background})`;

            //If image doesn't load
            card.style.backgroundColor = `#333`;

            card.style.width = initial_width * (scale / 100) + "px";
            card.style.height = initial_height * (scale / 100) + "px";
            card.style.margin = `0px ${card_margin}px`;
            card.style.minWidth = initial_width * (scale / 100) + "px";
            card.style.minHeight = initial_height * (scale / 100) + "px";

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");

            let title = document.createElement("h4");
            title.innerText = chosen_card.title;
            let description = document.createElement("p");
            description.innerText = "1h 25m";

            let button_container = document.createElement("div");
            button_container.classList.add("button-container");
            

            let button1 = document.createElement("div");
            button1.classList.add("no-show");
            button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`;
            button1.classList.add("watch");

            let button2 = document.createElement("div");
            button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>`;
            button2.classList.add("queue");
            button2.classList.add("no-show");

            button2.addEventListener("click", function () {
                ToggleWatchLater(`${chosen_card.title}`);
            });

            let button3 = document.createElement("div");
            button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;
            button3.classList.add("star");
            button3.classList.add("queue");
            button3.classList.add("no-show");

            button3.addEventListener("click", function () {
                if (button3.children[0].style.color != "rgb(255, 255, 87)") {
                    button3.children[0].style.color = "rgb(255, 255, 87)";
                } else {
                    button3.children[0].style.color = "white";
                }
            });

            let button4 = document.createElement("div");
            button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`;
            button4.classList.add("star");
            button4.classList.add("queue");
            button4.classList.add("red_make");

            button4.addEventListener("click", function () {
                if (document.getElementsByClassName("movie-desc").length > 0) {
                    // If the modal exists
                    document.getElementsByClassName("movie-desc")[0].remove();
                } else {
                    let modal = document.createElement("div");
                    modal.classList.add("movie-desc");

                    let modal_content = document.createElement("div");
                    modal_content.classList.add("modal-content");

                    let bg_image = document.createElement("div");
                    bg_image.classList.add("desc-image");
                    bg_image.style.backgroundImage = `url(${chosen_card.background})`;
                    let image_cover = document.createElement("div");

                    let close_btn = document.createElement("div");
                    close_btn.classList.add("close-btn");
                    close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

                    close_btn.addEventListener("click", function () {
                        this.parentElement.parentElement.parentElement.parentElement.remove();
                    });

                    image_cover.append(close_btn);
                    bg_image.append(image_cover);

                    let top_info = document.createElement("div");
                    top_info.classList.add("desc-top");
                    let title = document.createElement("h1");
                    title.innerText = chosen_card.title;

                    let btn_selection = document.createElement("div");
                    btn_selection.classList.add("button-selection");
                    btn_selection.innerHTML = `
                        // <div class="watch">
                        //     <h3>Play</h3>
                        //     <svg fill="currentColor" viewBox="0 0 16 16">
                        //         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        //         <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        //     </svg>
                        // </div>
                        <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                            <h3>Watch Later</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>`;

                    top_info.append(title, btn_selection);

                    let mid_info = document.createElement("div");
                    mid_info.classList.add("desc-mid");
                    mid_info.innerHTML = `<p>${chosen_card.description}</p>`;

                    let bottom_info = document.createElement("div");
                    bottom_info.classList.add("desc-bottom");

                    let cast_slider = document.createElement("div");
                    cast_slider.classList.add("cast");

                    bottom_info.append(cast_slider);

                    modal_content.append(
                        bg_image,
                        top_info,
                        mid_info,
                        bottom_info
                    );
                    modal.append(modal_content);

                    document.body.append(modal);

                    document.body.addEventListener("click", function (event) {
                        if (!event.target.classList.contains("modal-content")) {
                            //modal.remove();
                            console.log("hello");
                        }
                    });

                    // Set the height for the modal image
                    let total_width = document.getElementsByClassName(
                        "modal-content"
                    )[0].clientWidth;
                    let large_scale = (100 * total_width) / 1920;
                    document.getElementsByClassName(
                        "desc-image"
                    )[0].style.height = `${1080 * (large_scale / 100)}px`;

                    // Set image for cast
                    for (let c = 0; c < cast.length; c++) {
                        let cast_block = document.createElement("div");
                        cast_block.classList.add("cast-card");
                        cast_block.style.backgroundImage = `url("${cast[c].picture}")`;
                        cast_block.style.width = 100 / cast.length - 5 + "%";
                        cast_block.style.height = `calc(${
                            document.getElementsByClassName("cast")[0]
                                .clientWidth / cast.length
                        }"px" - 5%)`;
                        cast_slider.append(cast_block);
                    }
                }
            });

            button_container.append(button1, button2, button3, button4);

            overlay.append(title, description, button_container);
            card.append(overlay);
            if (j < num_cards) {
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            } else {
                card.style.display = "none";
                carousels[i].insertBefore(
                    card,
                    carousels[i].children[carousels[i].children.length - 1]
                );
            }
        }
    }
};

const CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

const AddCarouselButtons = () => {
    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let btn1 = document.createElement("div");
        btn1.classList.add("carousel-btn");
        btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`;

        let btn2 = document.createElement("div");
        btn2.classList.add("carousel-btn");

        btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`;

        carousels[i].append(btn1, btn2);
    }
};

const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

const MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

let slide_index = 0;

const AutoSlideShow = () => {
    let slide_area = document.getElementsByClassName("top")[0];
    let container = slide_area.children[0];

    container.classList.add("fadeIn");

    let bg_display = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].display_background) {
            bg_display.push(i);
        }
    }

    slide_index++;
    if (slide_index > bg_display.length - 1) {
        slide_index = 0;
    }

    slide_area.style.backgroundImage = `url("${
        cards[bg_display[slide_index]].display_background
    }")`;
    slide_area.getElementsByTagName("h1")[0].innerHTML =
        cards[bg_display[slide_index]].title;
    slide_area.getElementsByTagName("p")[0].innerHTML =
        cards[bg_display[slide_index]].description;

    container.classList.add("fadeOut");
    setTimeout(AutoSlideShow, 2000);
};

const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Next = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let first_elem = carousel.children[1];
    let next_elem;

    for (let i = 0; i < carousel.children.length; i++) {
        if (carousel.children[i].style.display == "none") {
            next_elem = carousel.children[i];
            break;
        }
    }

    first_elem.style.display = "none";
    first_elem.remove();
    carousel.insertBefore(
        first_elem,
        carousel.children[carousel.children.length - 1]
    );

    next_elem.style.display = "flex";
};

const Previous = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let last_display_item;
    let prev_elem = carousel.children[carousel.children.length - 2];

    for (let i = 0; i < carousel.children.length; i++) {
        if (
            carousel.children[i].style.display != "none" &&
            !carousel.children[i].classList.contains("carousel-btn")
        ) {
            last_display_item = carousel.children[i];
        }
    }

    last_display_item.style.display = "none";

    carousel.insertBefore(prev_elem, carousel.children[1]);

    prev_elem.style.display = "flex";
};

const ToggleWatchLater = (movie = "", activate = true) => {
    let modal = document.getElementsByClassName("watch-later-modal")[0];

    if (movie != "") {
        modal.getElementsByClassName("movie")[0].innerText = movie;
    }

    if (activate) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
};































var carousel = (function () {
 
    //
    var activeID = 0,
        itemW = 940,
        carousel_count = $('.carousel_item').length,
        $carouselItems = $('.carousel_items'),
        $carouselItem = $('.carousel_item'),
        $arrowPrev = $('.item_prev'),
        $arrowNext = $('.item_next'),
    $itemArrow = $('.item_arrow'),
        $navDot,
    $navDots = $('.nav_dots'),
        swipeDir,
        slideSpeed = .45,
        slideMeth = Power2.EaseInOut;
    
    //
  function init() {
     
    $carouselItems.css({'width': (itemW * carousel_count) + 'px'});
    $navDots.css({'width': (25 * carousel_count) + 'px'});
    $itemArrow.css({'opacity': .8});
    
    setupDraggable();
    setupDots();
    navigateSlide();
    }
  init();
    
    //
  function setupDraggable() { 
      
    Draggable.create($carouselItems, {
            type:'x',
            edgeResistance: 0.90,
            dragResistance: 0.0,
            bounds:'.carousel_container',
            onDrag:updateDirections,
            onThrowUpdate:updateDirections,
            throwProps:true,
            onDragStart:function(evt) {},
            onDragEnd :function() {

              if(swipeDir == 'left') {activeID++}
              else if(swipeDir == 'right') {activeID--};
              
              navigateSlide();
            }
      });    
  };
                
  // set up dots
  function setupDots() {    
    for(var i = 0; i < carousel_count; i++) {
      $navDots.append('<div class="nav_dot" id="dot_' + i + '"></div>');
    }    
    $navDot = $('.nav_dot');
  }  
  
  // navigate slide
    function navigateSlide() {
        
        if(activeID >= carousel_count-1) activeID = carousel_count-1;
        if(activeID <= 0) activeID = 0;     
                        
        var xTarget = ((activeID * itemW) * -1);
        
        TweenMax.to($carouselItems, slideSpeed, {x: xTarget, ease: slideMeth, onComplete: slideDone});
    }
    
    function slideDone() {
        
        $navDot.css({backgroundColor: '#fff'});
    
    //
        TweenMax.to($navDot, .35, {scale: 1, color: 0xFFFFFF});
        TweenMax.to($('#dot_' + activeID), .35, {scale: 1.5, backgroundColor: 'transparent',color: 0xCC0000});
    
    //
    if(activeID == 0) {$arrowPrev.fadeOut()} 
    else {$arrowPrev.fadeIn()}
    
    if(activeID + 1 == carousel_count) {$arrowNext.fadeOut()}
    else {$arrowNext.fadeIn()}
    }
    
    //
    function updateDirections() {
        swipeDir = this.getDirection("start");
    }
    
  //$itemArrow.click(function() {
  $itemArrow.on('click', function() {
    
    if(Modernizr.touch) return;
    
    if($(this).hasClass('item_next')) {activeID++}
    else {activeID--};
    
    navigateSlide();
    });
  
  $itemArrow.on('touchstart', function() {
    if($(this).hasClass('item_next')) {activeID++}
    else {activeID--};
    
    navigateSlide();
    });
  
    $navDot.hover(      
        function() {            
            TweenMax.to($(this), .35, {scale: 1.5});
        }, function() {
             if($(this).attr('id').split('_')[1] == activeID) return;
           TweenMax.to($(this), .35, {scale: 1.0});
        }  
    );
    
  $navDot.click(function() {        
    var dotID = $(this).attr('id').split('_')[1];
        activeID = dotID;
            
      navigateSlide();      
    });
  
    //
    $carouselItem.mousedown(function() {        
        activeID = $(this).attr('id').split('_')[1];
    
    $(this).removeClass('grab');
    $(this).addClass('grabbing');
    
    });
  
  //   
  $carouselItem.mouseenter(function() {        
    $(this).removeClass('grabbing');
    $(this).addClass('grab');
  });

  $carouselItem.mouseup(function() {        
    $(this).removeClass('grabbing');
    $(this).addClass('grab');
  });  
  
})();



// adding new idea here

function scrollL() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft -= step;
  }
  
  function scrollR() {
    let x = document.getElementsByClassName("row_posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft += step;
  }
  
  function getScrollVal() {
    setTimeout(() => {
      let x = document.getElementsByClassName("row_posters")[0];
      let el = document.getElementsByClassName("left_arrow")[0];
      if (x.scrollLeft == 0) {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
      let el2 = document.getElementsByClassName("right_arrow")[0];
      let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
      if (right <= 2) {
        el2.style.display = "none";
      } else {
        el2.style.display = "flex";
      }
    }, 550);
  }
  
  getScrollVal();
  
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

