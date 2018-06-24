this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
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
    return "  <header>\n    <div class=\"logo\"></div>\n  </header>\n  <form>\n    <input type=\"text\" name=\"name\" class=\"name\">\n    <input type=\"text\" name=\"email\">\n    <input type=\"text\" name=\"website\">\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n";
},"useData":true};
this["MyApp"]["templates"]["splash"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"logo\"></div>\n<div class=\"line\"></div>\n<span class=\"headline\">Break the fourth wall of entrepreneurship</div>\n";
},"useData":true};