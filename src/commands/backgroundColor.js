(function(wysihtml5) {
  var REG_EXP = /wysiwyg-background-color-[0-9\-]+/g;

  wysihtml5.commands.backgroundColor = {
    exec: function(composer, command, rgba, attrs) {
      var className = "wysiwyg-background-color-" + rgba.r + "-" + rgba.g + "-" +
        rgba.b + "-" + rgba.a.toString().replace(".", "-");
      var style = document.createElement("style");
      var body = editor.composer.doc.body;
      var classes = body.classList;

      // Add a CSS class for the selected font. Unfortunately, !important is
      // needed to override the inline style.
      style.type = "text/css";
      style.innerHTML = "." + className + " { background-color: rgba(" + rgba.r
        + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ") !important; }";
      composer.iframe.contentDocument.getElementsByTagName("head")[0]
        .appendChild(style);

      // Remove any old background class before adding the new class.
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].match(REG_EXP)) {
          body.classList.remove(classes[i]);
        }
      }

      for (i = 0; i < attrs.length; i++) {
        body.setAttribute(attrs[i].name, attrs[i].value);
      }

      body.classList.add(className);
    },

    state: function(composer, command, rgba, attrs) {
    }
  };
})(wysihtml5);
