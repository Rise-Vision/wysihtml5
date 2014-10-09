(function(wysihtml5) {
  var REG_EXP = /wysiwyg-background-color-[0-9\-]+/g;

  wysihtml5.commands.clear = {
    exec: function(composer, command) {
      var body = composer.doc.body;
      var classes = body.classList;

      body.innerHTML = "";

      // Remove existing background class.
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].match(REG_EXP)) {
          body.classList.remove(classes[i]);
        }
      }
    },
    state: function(composer, command) {
    }
  };
})(wysihtml5);
