function Decision() {
    this.question = function () {
//         // if ($('.yes').click(function () {
//         // $('.answer').toggleClass("hide");
//         // }))
//         $('.yes').click(function () {
//             alert("YOLO");
//             $('h2').removeClass('answer');
        // })
    }
}



$(document).ready(function () {
    Decision();
    $("button").click(function () {
        question();
    });
    $(".yes").click(function () {
        $("#yolo").toggleClass("answer");
    })
});


// $(".hint").click(function () {
//     $("#hidden").toggleClass("hide");
// })
