/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
var bodyImages=["Cockentrice/420.jpg", "Saltyard/180.jpg", "PinkBarre/o.jpg","GeneralMuir/GM_2.jpg","TheWaters/dock_facade.jpg", "GeneralMuir/169.jpg", "AveryPoint/sasaki_uconn_averypoint_01.jpg"];
var path="../img/SWWI/";

var i=0;
setInterval(function(){
    $(".main img").animate({opacity:0},500,function(){
        $(".main img").attr("src",path+bodyImages[i]);
        if (i==bodyImages.length-1)
            i=0;
        else
            i++;
        $(".main img").animate({opacity:1},500,function(){});
    }
    
)}, 6000);

        
        

/*document.getElementById("backgroundImage").innerHTML = bodyImages;

function myFunction() {
    bodyImages.shift();
    document.getElementById("backgroundImage").innerHTML = bodyImages;
}
*/
    
    
    
$("#contentProcess").load("../html/Process.html").toggleClass("inline");
$("#contentProcess").hide();
$("#process").click(function(e){
    e.preventDefault();
  $("#contentProcess").slideToggle();
});

$("#contentProjects").load("../html/Projects.html").toggleClass("inline");
$("#contentProjects").hide();
$("#projects").click(function(e){
    e.preventDefault();
    $("#contentProjects").slideToggle();
});

$("#contentPressPub").load("../html/PressPublication.html").toggleClass("inline");
$("#contentPressPub").hide();
$("#pressPub").click(function(e){
    e.preventDefault();
    $("#contentPressPub").slideToggle();
});


$("#emailF").load("../emailForm.html").toggleClass("inline");
$("#emailF").hide();
$("#email").click(function(e){
    e.preventDefault();
  $("#emailF").slideToggle();
});