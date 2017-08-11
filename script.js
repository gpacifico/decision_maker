var points = 0;

$(document).ready(function () {
    question1();
    question1b();
    question2();
    question3();
    question3b();
    question4();
    question5();
    question6();
    question6b();
    question7();
    question7b();
    question8();
    question9();
    question10();
    question10b();
    question11();
    choice();
});

function question1() {
    $('#yolo1').click(function () {
        $(this).addClass('not_exist');
        $('#yolo2').removeClass('answer');
        points += 25;
    });
}

function question1b() {
    $('#yolo1b').click(function () {
        $(this).addClass('not_exist');
        $('#yolo2b').removeClass('answer');
        points -= 18;
    });
}

function question2() {
    $('#health1').click(function () {
        $(this).addClass('not_exist');
        $('#health2').removeClass('answer');
        points += 5;
    });
}

function question3() {
    $('#money1').click(function () {
        $(this).addClass('not_exist');
        $('#money2').removeClass('answer');
        points += 3;
    });
}

function question3b() {
    $('#money1b').click(function () {
        $(this).addClass('not_exist');
        $('#money2b').removeClass('answer');
        points -= 3;
    });
}

function question4() {
    $('#power1').click(function () {
        $(this).addClass('not_exist');
        $('#power2').removeClass('answer');
        points += 4;
    });
}

function question5() {
    $('#jail1').click(function () {
        $(this).addClass('not_exist');
        $('#jail2').removeClass('answer');
        points += 5;
    });
}

function question6() {
    $('#parents1').click(function () {
        $(this).addClass('not_exist');
        $('#parents2').removeClass('answer');
        points += 2;
    });
}

function question6b() {
    $('#parents1b').click(function () {
        $(this).addClass('not_exist');
        $('#parents2b').removeClass('answer');
        points -= 2;
    });
}

function question7() {
    $('#friends1').click(function () {
        $(this).addClass('not_exist');
        $('#friends2').removeClass('answer');
        points += 3;
    });
}

function question7b() {
    $('#friends1b').click(function () {
        $(this).addClass('not_exist');
        $('#friends2b').removeClass('answer');
        points -= 2;
    });
}

function question8() {
    $('#earth1').click(function () {
        $(this).addClass('not_exist');
        $('#earth2').removeClass('answer');
        points += 6;
    });
}

function question9() {
    $('#naked1').click(function () {
        $(this).addClass('not_exist');
        $('#naked2').removeClass('answer');
        points += 2;
    });
}

function question10() {
    $('#job1').click(function () {
        $(this).addClass('not_exist');
        $('#job2').removeClass('answer');
        points += 5;
    });
}

function question10b() {
    $('#job1b').click(function () {
        $(this).addClass('not_exist');
        $('#job2b').removeClass('answer');
        points -= 6;
    });
}

function question11() {
    $('#fun1').click(function () {
        $(this).addClass('not_exist');
        $('#fun2').removeClass('answer');
        points -= 5;
    });
}

function choice() {
    $('#final_tally1').click(function () {
        $('.questions').addClass('not_exist');
        $('.disclaimer').addClass('disclaimer1');
        $('div').removeClass('navbar-fixed-top');
        $('body').addClass('body2');
        if (points < 25) {
            $('#final_tally_yes').removeClass('answer').append('<br><img src="images/decision_yes.png">');
        }
        else if (points >= 25) {
            $('#final_tally_no').removeClass('answer').append('<br><img src="images/decision_no.png">') ;
        }
    });
}