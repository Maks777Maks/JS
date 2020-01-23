$(function(){

//////////////////////////////// Get

// $("#btn1").click(function () {
//     alert("Text: " + $("#test").text());
// });
// $("#btn2").click(function () {
//     alert("HTML: " + $("#test").html());
// });
// $("#btn3").click(function () {
//     alert("Value: " + $("#inputtext").val());
// });
// $("#btnhref").click(function () {
//     alert($("#froggy").attr("href"));
// });

// //////////////////////////////// Set

// $("#btn1").click(function () {
//     $("#test1").text("Hello Masha!");
// });
// $("#btn2").click(function () {
//     $("#test2").html("<b>Hello Dasha!</b>");
// });
// $("#btn3").click(function () {
//     $("#test3").val("Masha and Dasha");
// });

// /////////////////////////////////  Get and Set



// $("#btn1").click(function () {
//     $("#test1").text(function (i, origText) {
//         return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
//     });
// });

// $("#btn2").click(function () {
//     $("#test2").html(function (i, origText) {
//         return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
//     });
// });

// ////////////////////////////////////  attr

// $("button").click(function () {
//     $("#froggy").attr({
//         "href": "https://flexboxfroggy.com/#ru",
//         "title": "Froggy"
//     }).text("Froggy!");
// });

// $("button").click(function () {
//     $("#froggy").attr("href", function (i, origValue) {
//         return origValue + "/client-info";
//     });
// }); 

///////////////////////////////////////// Add

// $("#btn1").click(function () {
//     $("p").append(" <b>Appended text</b>.");
// });


// //////////////////////////////////////////////  Del


// $("#btnRemove").click(function(){
//     $("#div1").remove();
//   });

//   $("#btnEmpty").click(function(){
//     $("#div1").empty();
//   });


// $("#button1").click(function(){
//     $("p").remove(".test");
//   });

//   $("#button2").click(function(){
//     $("p").remove(".test, .demo");
//   });

  /////////////////////////////////// class


    // $("#button1").click(function(){
    //     $("h1, h2, p").addClass("blue");
    //     $("div").addClass("important test");
    //   });
    //   $("#button2").click(function(){
    //     $("h1, h2, p").removeClass("blue");
    //   });
    //   $("#button3").click(function(){
    //     $("h1, h2, p").toggleClass("blue");
    //   });


    /////////////////////////////////////////  Dimensions

    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height();
    //     $("#div1").html(txt);
    //   });
    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height() + "</br>";
    //     txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
    //     txt += "Inner height of div: " + $("#div1").innerHeight();
    //     $("#div1").html(txt);
    //   });
    
    // $("button").click(function(){
    //     var txt = "";
    //     txt += "Width of div: " + $("#div1").width() + "</br>";
    //     txt += "Height of div: " + $("#div1").height() + "</br>";
    //     txt += "Outer width of div: " + $("#div1").outerWidth(true) + "</br>";
    //     txt += "Outer height of div: " + $("#div1").outerHeight();
    //     $("#div1").html(txt);
    //   });

    //   $("button").click(function(){
    //     $("#div1").width(500).height(500);
    //   });
// $('button').click(function(){    
//     const regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$/;
//     let password = $("#test").val();
//     if (!regex_password.test(password)){
//         $('#result').text("Is not Valid");
//     }
//     else{
//         $('#result').empty();
//     }
// });
     


});

function Test(){
    let tmp_password = document.getElementById('test').value;
    console.log(tmp_password);
    const regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$/;
   
    if (!regex_password.test(tmp_password)){
        alert('Error');
    }
    else{
        alert('Good');
    }
  }