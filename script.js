var points = 0;

$(document).ready(function () {
    question1();
    question1no();
    question1b();
    question1bno();
    question2();
    question2no();
    question3();
    question3no();
    question3b();
    question3bno();
    question4();
    question4no();
    question5();
    question5no();
    question6();
    question6no();
    question6b();
    question6bno();
    question7();
    question7no();
    question7b();
    question7bno();
    question8();
    question8no();
    question9();
    question9no();
    question10();
    question10no();
    question10b();
    question10bno();
    question11();
    question11no();
    choice();
});

function addStuff(what) {
    what.addClass('not_exist');
}

function removeStuff(what) {
    what.removeClass('answer');
}

function question1() {
    $('#yolo1').click(function () {
        addStuff($(this));
        addStuff($('#yolo1no'));
        removeStuff($('#yolo2'));
        points += 25;
        console.log('points2', points)
    });
}

function question1no() {
    $('#yolo1no').click(function () {
        addStuff($(this));
        addStuff($('#yolo1'));
        removeStuff($('#yolo2'));
        points -= 15;
        console.log('points2', points)
    });
}

function question1b() {
    $('#yolo1b').click(function () {
        addStuff($(this));
        addStuff($('#yolo1bno'));
        removeStuff($('#yolo2b'));
        points -= 18;
    });
}

function question1bno() {
    $('#yolo1bno').click(function () {
        addStuff($(this));
        addStuff($('#yolo1b'));
        removeStuff($('#yolo2b'));
        points += 12;
    });
}

function question2() {
    $('#health1').click(function () {
        addStuff($(this));
        addStuff($('#health1no'));
        removeStuff($('#health2'));
        points += 8;
    });
}

function question2no() {
    $('#health1no').click(function () {
        addStuff($(this));
        addStuff($('#health1'));
        removeStuff($('#health2'));
        points -= 5;
    });
}

function question3() {
    $('#money1').click(function () {
        addStuff($(this));
        addStuff($('#money1no'));
        removeStuff($('#money2'));
        points += 5;
    });
}

function question3no() {
    $('#money1no').click(function () {
        addStuff($(this));
        addStuff($('#money1'));
        removeStuff($('#money2'));
        points -= 3;
    });
}

function question3b() {
    $('#money1b').click(function () {
        addStuff($(this));
        addStuff($('#money1bno'));
        removeStuff($('#money2b'));
        points -= 5;
    });
}

function question3bno() {
    $('#money1bno').click(function () {
        addStuff($(this));
        addStuff($('#money1b'));
        removeStuff($('#money2b'));
        points += 3;
    });
}

function question4() {
    $('#power1').click(function () {
        addStuff($(this));
        addStuff($('#power1no'));
        removeStuff($('#power2'));
        points += 6;
    });
}

function question4no() {
    $('#power1no').click(function () {
        addStuff($(this));
        addStuff($('#power1'));
        removeStuff($('#power2'));
        points -= 4;
    });
}

function question5() {
    $('#jail1').click(function () {
        addStuff($(this));
        addStuff($('#jail1no'));
        removeStuff($('#jail2'));
        points += 5;
    });
}

function question5no() {
    $('#jail1no').click(function () {
        addStuff($(this));
        addStuff($('#jail1'));
        removeStuff($('#jail2'));
        points -= 3;
    });
}

function question6() {
    $('#parents1').click(function () {
        addStuff($(this));
        addStuff($('#parents1no'));
        removeStuff($('#parents2'));
        points += 2;
    });
}

function question6no() {
    $('#parents1no').click(function () {
        addStuff($(this));
        addStuff($('#parents1'));
        removeStuff($('#parents2'));
        points -= 1;
    });
}

function question6b() {
    $('#award1b').click(function () {
        addStuff($(this));
        addStuff($('#award1bno'));
        removeStuff($('#award2b'));
        points -= 3;
    });
}

function question6bno() {
    $('#award1bno').click(function () {
        addStuff($(this));
        addStuff($('#award1b'));
        removeStuff($('#award2b'));
        points += 1;
    });
}

function question7() {
    $('#friends1').click(function () {
        addStuff($(this));
        addStuff($('#friends1no'));
        removeStuff($('#friends2'));
        points += 5;
    });
}

function question7no() {
    $('#friends1no').click(function () {
        addStuff($(this));
        addStuff($('#friends1'));
        removeStuff($('#friends2'));
        points -= 3;
    });
}

function question7b() {
    $('#friends1b').click(function () {
        addStuff($(this));
        addStuff($('#friends1bno'));
        removeStuff($('#friends2b'));
        points -= 4;
    });
}

function question7bno() {
    $('#friends1bno').click(function () {
        addStuff($(this));
        addStuff($('#friends1b'));
        removeStuff($('#friends2b'));
        points += 2;
    });
}

function question8() {
    $('#earth1').click(function () {
        addStuff($(this));
        addStuff($('#earth1no'));
        removeStuff($('#earth2'));
        points += 8;
    });
}

function question8no() {
    $('#earth1no').click(function () {
        addStuff($(this));
        addStuff($('#earth1'));
        removeStuff($('#earth2'));
        points -= 6;
    });
}

function question9() {
    $('#naked1').click(function () {
        addStuff($(this));
        addStuff($('#naked1no'));
        removeStuff($('#naked2'));
        points += 3;
    });
}

function question9no() {
    $('#naked1no').click(function () {
        addStuff($(this));
        addStuff($('#naked1'));
        removeStuff($('#naked2'));
        points -= 2;
    });
}

function question10() {
    $('#job1').click(function () {
        addStuff($(this));
        addStuff($('#job1no'));
        removeStuff($('#job2'));
        points += 7;
    });
}

function question10no() {
    $('#job1no').click(function () {
        addStuff($(this));
        addStuff($('#job1'));
        removeStuff($('#job2'));
        points -= 4;
    });
}

function question10b() {
    $('#job1b').click(function () {
        addStuff($(this));
        addStuff($('#job1bno'));
        removeStuff($('#job2b'));
        points -= 10;
    });
}

function question10bno() {
    $('#job1bno').click(function () {
        addStuff($(this));
        addStuff($('#job1b'));
        removeStuff($('#job2b'));
        points += 6;
    });
}

function question11() {
    $('#fun1').click(function () {
        addStuff($(this));
        addStuff($('#fun1no'));
        removeStuff($('#fun2'));
        points -= 8;
    });
}

function question11no() {
    $('#fun1no').click(function () {
        addStuff($(this));
        addStuff($('#fun1'));
        removeStuff($('#fun2'));
        points += 5;
    });
}

function choice() {
    $('#final_tally1').click(function () {
        $('.questions').addClass('not_exist');
        $('.disclaimer').addClass('disclaimer1');
        $('div').removeClass('navbar-fixed-top');
        $('body').addClass('body2');
        if (points < 25) {
            $('#final_tally_yes').removeClass('answer').append('<br><img id = "check_mark" src="images/decision_yes.png">');
            console.log("POINTS: " + points);
        }
        else if (points >= 25) {
            $('#final_tally_no').removeClass('answer').append('<br><img id = "no_sign" src="images/decision_no.png">');
            console.log("POINTS: " + points);
        }
    });
}