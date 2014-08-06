(function(wysihtml5) {
  var REG_EXP = /(align-(left|center|right)|justify)/g;

  wysihtml5.commands.alignment = {
    exec: function(composer, command, alignment) {
      if (alignment === "justify") {
        return wysihtml5.commands.formatInline.exec(composer, command, "div",
          "justify", REG_EXP);
      }
      else  {
        return wysihtml5.commands.formatInline.exec(composer, command, "div",
          "align-" + alignment, REG_EXP);
      }
    },

    state: function(composer, command, alignment) {
      if (alignment === "justify") {
        return wysihtml5.commands.formatInline.state(composer, command, "div",
          "justify", REG_EXP);
      }
      else  {
        return wysihtml5.commands.formatInline.state(composer, command, "div",
          "align-" + alignment, REG_EXP);
      }
    }
  };
})(wysihtml5);