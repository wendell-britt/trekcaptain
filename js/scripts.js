
$(document).ready(function () {
  var picard = 0;
  var janeway = 0;
  var kirk = 0;
  var sisko = 0;
  var archer = 0;


  function clickCounter(){
    $("#picard").click(function() {
      picard++;
    });
    $("#janeway").click(function() {
      janeway++;
    });
    $("#kirk").click(function() {
      kirk++;
    });
    $("#sisko").click(function() {
      sisko++;
    });
  };

//submit
    if (picard > janeway && kirk && sisko) {
      $("#picardResult").show();
    } else if (janeway > picard && kirk && sisko) {
        $("#janewayResult").show();
      } else if (kirk > picard  && janeway && sisko) {
        $("#kirkResult").show();
      } else if (sisko > picard  && janeway && kirk) {
        $("#siskoResult").show();
      } else {
        $("#archerResult").show();
      }

    console.log(clickCounter);

  };
});
