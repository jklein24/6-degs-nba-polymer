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
});
