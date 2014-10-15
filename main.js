var xhr = document.querySelector('#ajax');
var sourceName = document.querySelector('#source');
var dest = document.querySelector('#dest');
var path = document.querySelector('#path');

var substringMatcher = function(strs) {
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
};

xhr.addEventListener('core-response', function() {
  path.innerHTML = xhr.response;
});

document.querySelector('paper-button').addEventListener('click', getPath);

function getPath() {
  xhr.body = "source="+getSourceValue()+"&dest="+getDestValue();
  xhr.go();
}

function getSourceValue() {
  return sourceName.querySelector("::Shadow #input").value;
}

function getDestValue() {
  return dest.querySelector("::Shadow #input").value;
}

$(document).ready(function() {
	$.getJSON('http://six-degrees-nba.appspot.com/script/player-names.json')
	.done(function(data) {
		$('#source::shadow input').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: substringMatcher(data)
    });

		$('#dest::shadow input').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: substringMatcher(data)
    });
	});
});

