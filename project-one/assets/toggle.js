$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#analysis").toggleClass("visible");
        $(".copy").toggleClass("invisible");
        $(".byline").toggleClass("invisible");
        $("#content").toggleClass("invisible");
        });
});
