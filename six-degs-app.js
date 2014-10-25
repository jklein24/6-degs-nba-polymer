Polymer('six-degs-app', {
  getSourceValue: function() {
    return this.$.source.value;
  },

  getDestValue: function() {
    return this.$.dest.value;
  },

  getPath: function() {
    this.$.ajax.body = "source="+this.getSourceValue()+"&dest="+this.getDestValue();
    this.$.ajax.go();
  },

  substringMatcher: function(strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({ value: str });
        }
      });

      cb(matches);
    };
  },

  ready: function() {
    $.getJSON('player-names.json')
        .done(function(data) {
          $('#source').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
          },
          {
            name: 'states',
            displayKey: 'value',
            source: this.substringMatcher(data)
          });

          $('#dest').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
          },
          {
            name: 'states',
            displayKey: 'value',
            source: this.substringMatcher(data)
          });
        }.bind(this));
  }
});
