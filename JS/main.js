// ---------------------new js





// NavBar==================

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Slider Annimeted
var typed3 = new Typed('#imgs', {
    strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
});






// =========================================HTML--------------------------------

<
!DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > My Site < /title>

<!-- =============Bootstrap CDN================== -->
<
link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
rel = "stylesheet"
integrity = "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
crossorigin = "anonymous" >
    <!-- =========Main_CSS=========== -->
    <
    link rel = "stylesheet"
href = "style.css" >
    <!-- ----font Awsm----- -->

    <
    link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" >

    <
    /head>

<
body >



    <
    nav class = "nav sticky-top" >
    <
    div class = "topnav"
id = "myTopnav" >
    <
    span class = "comp" > Recovery < /span>

<
a href = "#news" > News < /a> <
    a href = "#news" > News < /a> <
    a href = "#contact" > Contact < /a> <
    a href = "#about" > About < /a> <
    a href = "javascript:void(0);"
class = "icon"
onclick = "myFunction()" >
    <
    i class = "fa fa-bars" > < /i> <
    /a><a href="#home" class="active">Home</a >


    <
    /div> <
    /nav>





<
div class = "main_div" >


    <
    div class = "inmm" >
    <
    img class = "back_img"
src = "MainImage.png"
alt = "" >

    <
    div class = "all_conten" >


    <
    div class = "title_slider" >
    Hello, I am <
    span id = "typed3" > < /span>

<
/div> <
div class = " sty" >
    <
    button type = "button"
class = "btn btn-outline-danger" > Get Sterted < /button> <
    button type = "button"
class = "btn btn-outline-primary" > Hire Me < /button>

<
/div>


<
/div>


<
/div>

<
/div>
<!-- ==============================card============================ -->


<!-- 
<
section class = "row p-5 title_back" >
    <
    div class = "col-12 col-sm-12 col-md-6 col-lg-6  " >
    <
    img class = "card-img-top"
src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XTIfBvecynI_oDCUO_kjCIkTAzadpCjIlg&usqp=CAU"
alt = "Card image cap" >
    <
    p > Some quick example text to build on the card title and make up the bulk of the card 's content. Some quick example text to build on the card title and make up the bulk of the card'
s content. < /p> <
    /div>

<
div class = "col-12 col-sm-12 col-md-6 col-lg-6 d-flex title-backk " >

    <
    p class = "d-flex" > Some quick example text to build on the card title and make up the bulk of the card 's content. Some quick example text to build on the card title and make up the bulk of the card'
s content. < /p> <
    /div> <
    /section>



-->


<
section id = "first_sec" >
    <
    div class = "container" >
    <
    div class = "row clr" >






    <!-- 

    <
    div class = "col-12 col-sm-12 col-md-6 col-xl-4" >


    <
    p class = "texxt" >

    <
    select class = "form-select form-select-sm"
aria - label = ".form-select-sm example" >
    <
    option selected > Open this select menu < /option> <
    option value = "1" > One < /option> <
    option value = "2" > Two < /option> <
    option value = "3" > Three < /option> <
    /select> <
    /p>



<
/div>

-->

























<
div class = "col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4 dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>



<
div class = "col-12 col-sm-12 col-md-6 col-xl-4  col-xxl-4 dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>

<
div class = "col-12 col-sm-12 col-md-6 col-xl-4  col-xxl-4  dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>



<
div class = "col-12 col-sm-12 col-md-6 col-xl-4  col-xxl-4 dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>



<
div class = "col-12 col-sm-12 col-md-6 col-xl-4  col-xxl-4 dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>



<
div class = "col-12 col-sm-12 col-md-6 col-xl-4  col-xxl-4 dropdown" >
    <
    button class = "dropbtn" > Dropdown < /button> <
    div class = "dropdown-content" >
    <
    a href = "#" > Link 1 < /a> <
    a href = "#" > Link 2 < /a> <
    a href = "#" > Link 3 < /a> <
    /div> <
    /div>









<!-- 



<
div class = "col-12 col-sm-12 col-md-6 col-xl-4" >
    <
    p class = "texxt" > Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus, ab ? < /p> <
    /div> <
    div class = "col-12 col-sm-12 col-md-6 col-xl-4" >
    <
    p class = "texxt" > Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus, ab ? < /p> <
    /div> <
    div class = "col-12 col-sm-12 col-md-6 col-xl-4" >
    <
    p class = "texxt" > Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus, ab ? < /p> <
    /div> <
    div class = "col-12 col-sm-12 col-md-6 col-xl-4" >
    <
    p class = "texxt" > Lorem, ipsum dolor sit amet consectetur adipisicing elit.Repellendus, ab ? < /p> <
    /div> <
    /div> <
    /div> <
    /section>


-->








<
br >
    <
    br >
    <
    br >
    <
    br >
    <
    br >

    <
    br >
    <
    br >
    <
    br >
    <
    br >






    <
    br >
    <
    br >
    <
    br >
    <
    br >
    <
    br >

    <
    br >
    <
    br >
    <
    br >
    <
    br >


    <
    br >
    <
    br >
    <
    br >
    <
    br >
    <
    br >

    <
    br >
    <
    br >
    <
    br >
    <
    br >


    <
    br >
    <
    br >







    <!-- ================================================================================================== -->

    <
    script src = "JS/main.js" > < /script> <
    script src = "typed.js" > < /script>

<
script >
    var typed3 = new Typed('#typed3', {
        strings: ['<span class="style_Name">Sourov Paul.</span>', '<strong class="sec_styl"> a web designer. </strong>', '<span class="trd_styl">a professional web developer.</span>'],
        typeSpeed: 60,
        backSpeed: 60,
        smartBackspace: true, // this is a default
        loop: true
    }); <
/script>

<!-- ===========BOOTSTRAP CDN======== -->
<
/body>

<
/html>

{ /* ==================================CSS--------------------- */ }
/* -------------------Google Font------------- */

@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap'); *
,
body {
    margin: 0 px;
    padding: 0 px;
    box - sizing: border - box;
}

::after, ::before {
    margin: 0 px;
    padding: 0 px;
    box - sizing: border - box;
}

body {
    margin: 0;
    font - family: Arial,
    Helvetica,
    sans - serif;
}

.topnav {
    overflow: hidden;
    width: 100 % ;
}

div# myTopnav {
    float: right;
    background - color: #091d27;

}



.topnav a {

    float: right;

    display: block;

    color: # f2f2f2;
    text - align: center;
    padding: 14 px 16 px;
    text - decoration: none;
    font - size: 17 px;
}

.topnav a: hover {
    background - color: #3c9828;

    color: # ffffff;
}

.topnav a.active {
    background - color: #3c9828;

    color: white;

}



.topnav .icon {

    display: none;

}



a.active {

    margin-right: 24px;

    border: 1px solid # ffffff21;
    border - radius: 4 px;
    box - shadow: 1 px 10 px 10 px black;
}

@media screen and(max - width: 600 px) {
    .topnav a: not(: first - child) {
            display: none;
        }
        .topnav a.icon {
            float: right;
            display: block;
        }
}

@media screen and(max - width: 600 px) {
    .topnav.responsive {
            position: relative;
        }
        .topnav.responsive.icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .topnav.responsive a {
            float: none;
            display: block;
            text - align: left;
        }
}

.comp {
    background - color: transparent;
    color: white;
    margin - left: 41 px;
    font - size: 22 px;
    cursor: pointer;
    font - family: cursive;
}

.affix {
    top: 0;
    width: 100 % ;
    z - index: 9999!important;
}

nav.nav.sticky - top {
    z - index: 100;
    position: absolute;
    width: 100 % ;
}

.back_img {
    width: 100 % ;
    height: 100 vh;
    position: relative;
    background - size: cover;
    background - repeat: no - repeat;
}

.title_slider {
    position: absolute;
    color: white;
    z - index: 100;
    left: 20 % ;
    top: 45 % ;
    font - family: cursive;
    display: block;
    font - size: 22 px;
}

#
typed3 {
    color: red;
    font - family: 'Courier New',
    Courier,
    monospace;
    font - size: 1.3 rem;
}

.title_slider {
    margin - top: 20 px;
}

.inmm {
    position: relative;
}

.sty {
    position: absolute;
    top: 64 % ;
    left: 28 % ;
}

button.btn.btn - outline - danger {
    margin - right: 35 px;
}

img.back_img {
    width: 100 %
}

.style_Name {
    font - family: 'Satisfy', cursive;
    font - size: 25 px;
    color: rgb(37, 150, 190);
}

.sec_styl {
    color: #dc3545;
    font - family: Georgia,
    'Times New Roman',
    Times,
    serif
}

.trd_styl {
    color: rgb(12, 245, 12);
    font - family: cursive;
    text - shadow: 4 px 4 px 2 px rgb(43, 43, 43);
}


/* RESPONSIVE MEDIA====================================================================================================== */

@media screen and(min - width: 0 px) and(max - width: 319 px) {}

@media screen and(min - width: 320 px) and(max - width: 480 px) {}

@media screen and(min - width: 481 px) and(max - width: 980 px) {}

@media screen and(min - width: 981 px) and(max - width: 1200 px) {}

@media screen and(min - width: 1201 px) {}


/* -----Card=============== */


/* 
.title-backk {
    background: rgb(183 183 183 / 25%);
    font-family: 'Satisfy';
    font-size: 2rem;
    box-sizing: content-box;
    text-shadow: 2px 2px #478dde29;
    box-shadow: 0px 0px 6px white;
    border-radius: 12px;
    height: fit-content
}

.title_back {
    display: flex;
} */


/* 
.clr {
    background-color:
}

.clr div {
    font-size: 15px;
    height: fit-content;
    border-right: 3px solid red;
    box-shadow: 2px 2px 2px black
} */

#
first_sec {
    margin - top: 30 px;
}

.dropbtn {
    background - color: #4CAF50;

    color: white;

    padding: 16px;

    font-size: 16px;

    border: none;

    width: 100%;

}



.dropdown {

    position: relative;

    display: inline-block;

}



.dropdown-content {

    display: none;

    position: absolute;

    background-color: # f1f1f1;
    min - width: 160 px;
    box - shadow: 0 px 8 px 16 px 0 px rgba(0, 0, 0, 0.2);
    z - index: 1;
    width: fit - content;
}

.dropdown - content a {
    color: black;
    padding: 12 px 16 px;
    text - decoration: none;
    display: block;
}

.dropdown - content a: hover {
    background - color: #ddd;
}

.dropdown: hover.dropdown - content {
    display: block;
    width: auto
}

.dropdown: hover.dropbtn {
        background - color: #3e8e41;

}