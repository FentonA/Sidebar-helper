// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

	


// Enter Key detect

// $.fn.enterKey = function (fnc) {
//     return this.each(function () {
//         $(this).keypress(function (ev) {
//             var keycode = (ev.keyCode ? ev.keyCode : ev.which);
//             if (keycode == '13') {
//                 fnc.call(this, ev);
//             }
//         })
//     })
// }

//fade in 
$(document).ready(function(){
  $("#sidebar").click(function(){
    $("#todo-list").fadeToggle();
  	});
  });

$(document).ready(function(){
  $("#query_string").click(function(){
    $(".query_toggle").fadeToggle();
  	});
  });

// query string function

// const button = document.querySelector('.query');
// button.addEventListener('click', () => addPlaceholders());


// function addPlaceholders(){
// 	var url = window.location.href;
// 	url += '?test=placeholders';
// 	window.location.href = url;
// 	console.log("It's printing")
// }
