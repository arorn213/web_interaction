
// rotate my diamond

$('#diamond').click(function(){ 
$('#diamond').css('transform', 'rotate(0deg)')


 

})

// randomly position left to right


setInterval(function(){

var randomNumber = Math.random() * 50 + "px" 
$('#square').css('margin-left', '50px' )

}, 1000)

// randomly position left to right


setInterval(function(){

var randomNumber = Math.random() * 50 + "px" 
$('#square2').css('margin-left', '150px' )

}, 1000)




