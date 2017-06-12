var points = 0;

$(document).ready(function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    choice();
});

function question1() {
    $('#yolo1').click(function () {
        $(this).addClass('not_exist');
        $('#yolo2').removeClass('answer');
        points += 20;
        console.log('points2', points);
    });
}

function question2() {
    $('#health1').click(function () {
        $(this).addClass('not_exist');
        $('#health2').removeClass('answer');
        points += 3;
        console.log('points2', points);
    });
}

function question3() {
    $('#money1').click(function () {
        $(this).addClass('not_exist');
        $('#money2').removeClass('answer');
        points += 1;
        console.log('points2', points);
    });
}

function question4() {
    $('#power1').click(function () {
        $(this).addClass('not_exist');
        $('#power2').removeClass('answer');
        points += 4;
        console.log('points2', points);
    });
}

function question5() {
    $('#jail1').click(function () {
        $(this).addClass('not_exist');
        $('#jail2').removeClass('answer');
        points += 4;
        console.log('points2', points);
    });
}

function question6() {
    $('#parents1').click(function () {
        $(this).addClass('not_exist');
        $('#parents2').removeClass('answer');
        points += 1;
        console.log('points2', points);
    });
}

function question7() {
    $('#friends1').click(function () {
        $(this).addClass('not_exist');
        $('#friends2').removeClass('answer');
        points += 3;
        console.log('points2', points);
    });
}

function question8() {
    $('#earth1').click(function () {
        $(this).addClass('not_exist');
        $('#earth2').removeClass('answer');
        points += 4;
        console.log('points2', points);
    });
}

function question9() {
    $('#naked1').click(function () {
        $(this).addClass('not_exist');
        $('#naked2').removeClass('answer');
        points += 2;
        console.log('points2', points);
    });
}

function question10() {
    $('#job1').click(function () {
        $(this).addClass('not_exist');
        $('#job2').removeClass('answer');
        points += 3;
        console.log('points2', points);
    });
}

function question11() {
    $('#fun1').click(function () {
        $(this).addClass('not_exist');
        $('#fun2').removeClass('answer');
        points -= 5;
        console.log('points2', points);
    });
}

function choice() {
    $('#final_tally1').click(function () {
        $('.questions').addClass('not_exist');
        if (points < 20) {
            $('#final_tally_yes').removeClass('answer');
        }
        else if (points >= 20) {
            $('#final_tally_no').removeClass('answer');
        }
    });
}