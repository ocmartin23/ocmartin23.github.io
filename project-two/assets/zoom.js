$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#spiderwort').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#photo-spiderwort").toggleClass("zoom");
        });

    $('#bluebells').click(function() {
        $("#photo-bluebells").toggleClass("zoom");
        });

    $('#damesrocket').click(function() {
        $("#photo-damesrocket").toggleClass("zoom");
        });

    $('#ladysslipper').click(function() {
        $("#photo-ladysslipper").toggleClass("zoom");
      });
});
