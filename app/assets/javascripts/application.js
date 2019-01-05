// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {
  $("#clickme").click(function() {
    $(".new_todo").show("slow");
    newTodoForm.style.display = "block";
		$("#newTodoForm").css('z-index','2');
    	$("#overlay").fadeIn(300);
  }); 
  $(".abort").click(function() {
    window.location.href = "";
  });
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
  });
  $('input').on('ifToggled', function(event){
	  $(this).closest("form").submit();
	});
	$('.select2-selection').select2({
		minimumResultsForSearch: -1
  });
  $("input:checkbox").change(function() {
    if($(this).attr("checked") === true) {
        // CHECKED, TO WHITE
        $(this).parent().css({"text-decoration": "line-through;"});
        return;
    }
    //NOT CHECKED, TO GREEN
    $(this).parent().css({"background" : "#b4e3ac", "-moz-border-radius" : "5px"});
  });
});