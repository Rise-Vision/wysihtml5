(function(wysihtml5) {
  var REG_EXP = /wysiwyg-text-color-[0-9\-]+/g;

  wysihtml5.commands.textColor = {
    exec: function(composer, command, rgba, attrs) {
      var className = "wysiwyg-text-color-" + rgba.r + "-" + rgba.g + "-" +
        rgba.b + "-" + rgba.a.toString().replace(".", "-");
      var style = document.createElement("style");

      // Add a CSS class for the selected text color.
      style.type = "text/css";
      style.innerHTML = "." + className +" { color: rgba(" + rgba.r + ", " +
        rgba.g + ", " + rgba.b + ", " + rgba.a + "); }";
      composer.iframe.contentDocument.getElementsByTagName("head")[0]
        .appendChild(style);

      return wysihtml5.commands.formatInline.exec(composer, command, "span",
        className, REG_EXP, attrs);
    },

    state: function(composer, command, rgba, attrs) {
      var className = "wysiwyg-text-color-" + rgba.r + "-" + rgba.g + "-" +
        rgba.b + "-" + rgba.a.toString().replace(".", "-");

      return wysihtml5.commands.formatInline.state(composer, command, "span",
        className, REG_EXP, attrs);
    }
  };
})(wysihtml5);
