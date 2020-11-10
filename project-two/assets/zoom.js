$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#spiderwort').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#photo-spiderwort").toggleClass("zoom");
        });
    $('#bluebells').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#photo-bluebells").toggleClass("zoom");
        });
});
