Polymer('six-degs-app', {
  getSourceValue: function() {
    return this.$.source.querySelector("::Shadow #input").value;
  },

  getDestValue: function() {
    return this.$.dest.querySelector("::Shadow #input").value;
  },

  getPath: function() {
    this.$.ajax.body = "source="+this.getSourceValue()+"&dest="+this.getDestValue();
    this.$.ajax.go();
  },
});
