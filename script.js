var points = 0;

$(document).ready(function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    choice();
});

function question1() {
    $('#yolo1').click(function () {
        $(this).addClass('not_exist');
        $('#yolo2').removeClass('answer');
        points += 12;
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

function choice() {
    $('#final_tally1').click(function () {
        $('.questions').addClass('not_exist');
        if (points < 12) {
            $('#final_tally_yes').removeClass('answer');
        }
        else if (points >= 12) {
            $('#final_tally_no').removeClass('answer');
        }
    });
}