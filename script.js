var yes = 0;

$(document).ready(function () {
    // $('.yes').click(function (event) {
    //     yes ++;
    // });
    // console.log("yes", yes);
    // $('.no').click(function (event) {
    //     yes --;
    // });
    // console.log("yes", yes);
    // $('button').click(function (e) {
    //     var buttonClicked = e.target.class;
    //     if ($(buttonClicked).hasClass('yes')) {
    //         yes ++;
    //     }
    // });
    // console.log("yes", yes);
    // console.log("e", buttonClicked);
    $('.yes').click(function () {
        alert('button');
        yes ++;
    });
    console.log("yes", yes);
});
console.log("yes", yes);




/*
function Decision() {
    // this.the_number = null;
    this.yes = 0;
    // this.value = $(buttonClickEvent.target).text();
    this.answer = function () {
        // if ($('button').hasClass('yes')) {
        //     this.yes ++;
        // }
        // else if ($('button').hasClass('no')) {
        //     this.yes --;
        // }
        if ($('button').find('button')) {
            this.yes ++;
        }
        else if ($(this).find('.no')) {
            this.yes --;
        }
    }
}
console.log("yes4", this.yes);
// console.log("buttonClickEvent", buttonClickEvent);



$(document).ready(function () {
    Decision();
    $('button').click(this.answer);
    // $('button').click(this.answer);
    // $('button').click(function () {
    //     this.answer();
    // });
    // $('button').click(function (buttonClickEvent) {
    //     this.answer();
    // });
    console.log("yes5", this.yes);
    // console.log("buttonClickEvent", buttonClickEvent);

});
*/


/*
 $("input").click(function(e){
 var idClicked = e.target.id;
 });



 function card_clicked() {
 if(disable_click == false) {
 if($(this).find('.back').css("display") == "none") {
 return;
 }
 $(this).find('.back').hide();
 if (first_card_clicked == null) {
 first_card_clicked = $(this);
 }
 else if (first_card_clicked != null) {
 second_card_clicked = $(this);
 attempts++;
 display_stats();
 disable_click = true;
 if (first_card_clicked.find('.front').find('img').attr('src') == second_card_clicked.find('.front').find('img').attr('src')) {



 $(document).ready(function () {
 $('button').click(buttonClicked);
 });


 $(document).ready(function(){
 $("p, button, h1").click(function(event){
 $("div").html("Triggered by a " + event.target.nodeName + " element.");
 });
 });


 function Guess_Ghosts () {
 this.the_number = null;
 this.attempts = 0;
 this.pick_number = function() {
 var random_number = Math.floor((Math.random() * this.number_of_restaurants) + 1);
 return random_number;
 };


 $(document).ready(function () {
 Guess_Ghosts();
 $(".submit_button").click(function () {
 make_guess();
 });
 $("#guess_input").keypress(function (event) {
 if (event.keyCode == 13) {
 make_guess();
 }
 });
 $(".hint").click(function () {
 $("#hidden").toggleClass("hide");
 })
 });


 function buttonClicked(buttonClickEvent) {
 //if error
 if (valueArray.indexOf('error') != -1) {
 //make array empty string again
 valueArray = [''];
 noNumbers = true;
 }
 var value = $(buttonClickEvent.target).text();
 //if number button clicked, then add number
 if ($(buttonClickEvent.target).hasClass('number')) {
 addNumber(value);
 //if operator button clicked, add operator
 } else if ($(buttonClickEvent.target).hasClass('operator')) {
 addOperator(value);
 //if decimal button clicked, add decimal
 } else if ($(buttonClickEvent.target).hasClass('decimal')) {
 addDecimal(value);
 //if one of the clear buttons is clicked
 } else if ($(buttonClickEvent.target).hasClass('clear')) {
 if (value === 'DEL') {
 //in the string, start at index zero and take out the last index in the string
 valueArray[arrayPosition] = valueArray[arrayPosition].substr(0, valueArray[arrayPosition].length-1);
 displayValues(valueArray[arrayPosition]);
 }
 if (value === 'CE') {
 //make item at current array index an empty string
 valueArray[arrayPosition] = '';
 //if first item in array, reset noNumbers
 if (arrayPosition == 0) {
 noNumbers = true;
 }
 displayValues(valueArray[arrayPosition]);
 }
 else if (value === 'C') {
 //reset valueArray, arrayPosition, display, and noNumbers
 valueArray = [''];
 arrayPosition = 0;
 displayValues(valueArray[arrayPosition]);
 noNumbers = true;
 }
 */


