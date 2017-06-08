// $(document).ready(function () {
//     q1();
// });
//
// function q1() {
//     $('#yolo1').click(function () {
//         button();
//         $('#yolo').removeClass('answer');
//     })
// }
//
// function button() {
//     $(this).addClass('not_exist');
// }

// function button() {
//     $('.answer').on('click', '.yes', function () {
//         $(this).removeClass('answer');
//     })
// }

// $(document).ready(function () {
//     $('.answer').on('click','button', function () {
//         $(this).addClass('not_exist');
//     })
// });

// $(document).ready(function () {
//     $('h2').on('click', 'button', function () {
//         $(this).removeClass('answer');
//     })
// });

$(document).ready(function () {
   $('h2').on('click', 'button', function () {
       console.log($('button'));
   })
});
