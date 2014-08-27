(function(wysihtml5) {
  var REG_EXP = /wysiwyg-line-height-[0-9\-]+/g;

  wysihtml5.commands.lineHeight = {
    exec: function(composer, command, lineHeight, attrs) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span",
        "wysiwyg-line-height-" + lineHeight, REG_EXP, attrs);
    },

    state: function(composer, command, lineHeight, attrs) {
      return wysihtml5.commands.formatInline.state(composer, command, "span",
        "wysiwyg-line-height-" + lineHeight, REG_EXP, attrs);
    }
  };
})(wysihtml5);
