$(document).ready(function () {
    question();
});

function question() {
    $('.yes').click(function () {
        $(this).addClass('not_exist');
        show();
        // $('.answer').removeClass('answer');

    })
}

function show() {
    if($('.yes').hasClass('not_exist')) {
        $('.answer').removeClass('answer');
    }
}


// function Decision() {
//     // this.yes = 0;
//     this.sure = 0;
//     this.question = function () {
//         // var sure = 0;
// //         // if ($('.yes').click(function () {
// //         // $('.answer').toggleClass("hide");
// //         // }))
// //         $('.yes').click(function () {
// //             alert("YOLO");
// //             $('h2').removeClass('answer');
//         // })
//         $(".yes").click(function () {
//             $("#yolo").toggleClass("answer");
//             this.sure += 1;
//             return sure;
//         });
//         console.log("sure1", sure);
//
//     }
// }



// $(document).ready(function () {
//     Decision();
//     $("button").click(function () {
//         question();
//     });
//     // $(".yes").click(function () {
//     //     $("#yolo").toggleClass("answer");
//     // })
// });


// $(".hint").click(function () {
//     $("#hidden").toggleClass("hide");
// })






// $(document).ready(function () {
//         question();
//
//     console.log("sure1", sure);
//
// });
//
// var add = (function () {
//     var sure = 0;
//     return function () {
//         return sure++;
//     }
// })();
//
//
// function question() {
//     // var add = (function () {
//     //     var sure = 0;
//     //     return function () {
//     //         return sure++;
//     //     }
//     // })();
//     $(".yes").click(function () {
//         $("#yolo").toggleClass("answer");
//         add();
//     });
// }

// console.log("sure1", sure);

// $(document).ready(function () {
//     var sure = 0;
//     $(".yes").click(function () {
//         $("#yolo").toggleClass("answer");
//         sure++;
//     });
//     console.log("sure1", sure);
// });
