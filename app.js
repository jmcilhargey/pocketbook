var main = function() {
  $("form").submit(function() {
    var firstName = $("#first").val();	
    if (firstName === "") {
      $(".first-name-error").text("Please enter your first name");
    };
		var lastName = $("#last").val();
    if (lastName === "") {
      $(".last-name-error").text("Please enter your last name");
    };
    var email = $("#email").val();
    if (email === "" || email.indexOf("@") === -1) {
    	$(".email-error").text("Please enter your email address");
    };
    if (email === "registered@email.com") {
    	$(".email-error").text("That email is already registered")
    };
    var password = $("#password").val();
    if (password === "") {
    	$(".password-error").text("Please enter a password");
    };
    if (password.length < 8) {
    	$(".password-error").text("Short passwords are less secure. Please enter one with at least 8 characters")
    };

    return false;
  });
};

$(document).ready(main);
