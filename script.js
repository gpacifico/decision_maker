function Decision() {
    this.yes = 0;
    this.answer = function (buttonClickEvent) {
        if ($(buttonClickEvent.target).hasClass('yes')) {
            this.yes ++;
        }
        else if ($(buttonClickEvent.target).hasClass('no')) {
            this.yes --;
        }
    }
}
console.log("yes4", this.yes);


$(document).ready(function () {
    Decision();
    $('button').click(this.answer);
    // $('button').click(function () {
    //     this.answer();
    console.log("yes5", this.yes);

});




