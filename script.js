// $(window).load(function(){
//     $('.popup-container').show();

//     $('.close-popup').click(function(){
//       $('.popup-container').hide();
//     });
//   });


window.addEventListener("load",function(){
	setTimeout(
		function open (event){
			document.querySelector(".popup-container").style.display="block";
		},8000)
});
$('.open-popup').click(function(){
    $('.popup-container').show();
  });

  $('.close-popup').click(function(){
    $('.popup-container').hide();
  });

