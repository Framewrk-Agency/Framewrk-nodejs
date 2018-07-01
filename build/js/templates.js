this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["accountcreated"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true};
this["MyApp"]["templates"]["confirm"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true};
this["MyApp"]["templates"]["created"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\nlol\n";
},"useData":true};
this["MyApp"]["templates"]["dashboard"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n\n</header>\n\n<div class=\"container\">\n  <div class=\"logo\"></div>\n  <div class=\"leftline\"></div>\n\n  <div class=\"bottomline\"></div>\n  <div class=\"dashboard\">\n    <div class=\"row1\">\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n    </div>\n    <div class=\"row2\">\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n      <div class=\"icon\"></div>\n    </div>\n    <div class=\"fragment\">\n      <div class=\"plus\"></div>\n      <div class=\"question\">Question of the Day</div>\n    </div>\n  </div>\n\n  <footer>\n  <div class=\"name\">David Hunt</div>\n  <div class=\"footercontent\">\n    <div class=\"stats\">\n      <span class=\"left percentage\">30%</span>\n      <span class=\"right metric\">Technical</span>\n    </div>\n    <div class=\"completion\">\n      <span class=\"left percentage\">95%</span>\n      <span class=\"right metric\">Completed</span>\n    </div>\n    <div class=\"streak\">\n      <div class=\"left boxes\"><div class=\"box\"></div></div>\n      <span class=\"right metric\">5 Day Streak</span>\n    </div>\n  </div>\n  </footer>\n\n</div>\n";
},"useData":true};
this["MyApp"]["templates"]["error"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<h1>"
    + alias1(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.status : stack1), depth0))
    + "</h2>\n<pre>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.stack : stack1), depth0))
    + "</pre>\n";
},"useData":true};
this["MyApp"]["templates"]["index"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n  <h1>Framewrk</h1>\n  <div class=\"logo\"></div>\n</header>\n";
},"useData":true};
this["MyApp"]["templates"]["login"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Base Stitch Browser SDK -->\n<script src=\"https://s3.amazonaws.com/stitch-sdks/js/bundles/4.0.0/stitch.js\"></script>\n\n<div class=\"quickstart-container\" id=\"main\">\n\n    <div id=\"info\">\n      <div id=\"success\"></div>\n      <div id=\"error\"></div>\n    </div>\n    <div id=\"logged-in\" hidden>\n      <button class=\"btn btn-success\" onclick=\"handleLogout()\">\n        Log Out\n      </button>\n    </div>\n    <div id=\"finished-registration\" hidden>\n      <button class=\"btn btn-success\" onclick=\"showControlPanel()\">\n        Go Back\n      </button>\n    </div>\n    <div id=\"control-panel\">\n      <h4>Email/Password Authentication</h4>\n      <button class=\"btn btn-success\" onclick=\"showRegistrationForm()\">\n        Create a New Account\n      </button>\n      <button class=\"btn btn-success\" onclick=\"showLoginForm()\">\n        Log In to an Existing Account\n      </button>\n    </div>\n\n    <div id=\"create-a-user\" hidden>\n      <h4>Create Email/Password Account</h4>\n      <label for=\"create-a-user-email\">Email:</label>\n      <div class=\"input-group mb-1\">\n        <input type=\"text\" class=\"form-control\" id=\"create-a-user-email\" aria-label=\"create-a-user-email\" />\n      </div>\n\n      <label for=\"create-a-user-password\">Password:</label>\n      <div class=\"input-group mb-2\">\n        <input type=\"password\" class=\"form-control\" id=\"create-a-user-password\" aria-label=\"create-a-user-password\" />\n      </div>\n      <button class=\"btn btn-success\" onclick=\"handleSignup()\">\n        Create a New Account\n      </button>\n      <button class=\"btn btn-secondary\" onclick=\"showControlPanel()\">\n        Go Back\n      </button>\n    </div>\n\n\n\n    <div id=\"login\" hidden>\n      <h4>Log In to Email/Password Account</h4>\n      <label for=\"login-email\">Email:</label>\n      <div class=\"input-group mb-1\">\n        <input type=\"text\" class=\"form-control\" id=\"login-email\" aria-label=\"login-email\" />\n      </div>\n\n      <label for=\"login-password\">Password:</label>\n      <div class=\"input-group mb-2\">\n        <input type=\"password\" class=\"form-control\" id=\"login-password\" aria-label=\"login-password\" />\n      </div>\n      <button class=\"btn btn-success\" onclick=\"handleLogin()\">\n        Log In\n      </button>\n      <button class=\"btn btn-secondary\" onclick=\"showControlPanel()\">\n        Go Back\n      </button>\n    </div>\n\n\n\n</div>\n\n<!--<header>\n  <div class=\"logo\"></div>\n</header>\n<form action=\"validateLogin\" method=\"post\">\n  <div class=\"email\">\n    <input type=\"text\" name=\"email\"><span>email</span>\n  </div>\n  <div class=\"password\">\n    <input type=\"text\" name=\"password\"><span>password</span>\n  </div>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n-->\n";
},"useData":true};
this["MyApp"]["templates"]["password"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true};
this["MyApp"]["templates"]["signup"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <header>\n    <div class=\"logo\"></div>\n  </header>\n  <form action=\"/validateLogin\" method=post>\n    <div class=\"name\">\n      <input type=\"text\" name=\"name\" class=\"name\"><span>name</span>\n    </div>\n    <div class=\"email\">\n      <input type=\"text\" name=\"email\"><span>email</span>\n    </div>\n    <div class=\"website\">\n      <input type=\"text\" name=\"website\"><span>website</span>\n    </div>\n      <input type=\"submit\" value=\"Submit\">\n  </form>\n";
},"useData":true};
this["MyApp"]["templates"]["splash"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"logo\"></div>\n<div class=\"line\"></div>\n<span class=\"headline\">Break the fourth wall of entrepreneurship</div>\n";
},"useData":true};
this["MyApp"]["templates"]["validateLogin"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"logo\"></div>\n\n<span>Welcome back to Framewrk, "
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "!</span>\n";
},"useData":true};