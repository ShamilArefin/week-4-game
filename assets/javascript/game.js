var randumgem1 = Math.floor((Math.random() * 12) + 1);
var randumgem2 = Math.floor((Math.random() * 12) + 1);
var randumgem3 = Math.floor((Math.random() * 12) + 1);
var randumgem4 = Math.floor((Math.random() * 12) + 1);
var randumgoal = Math.floor((Math.random() * 101) + 19);
var score = 0;
console.log("gem " + randumgem1);
console.log("gem " + randumgem2);
console.log("gem " + randumgem3);
console.log("gem " + randumgem4);
console.log("goal " + randumgoal);
var peridot = 0;
var amethyst = 0;
var garnet = 0;
var smokey = 0;

$(document).ready(function(){
    $(".peridot").on("click", function(){
        peridot = randumgem1;
    });
});
