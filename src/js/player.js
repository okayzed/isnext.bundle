var normal = require("isnext").normal;
var T = require("tone");
var teoria = require("teoria");


var polySynth = new T.PolySynth(4, T.Synth).toMaster();


module.exports = {
  play_chord: function(chord, duration) {
    try {
    chord = normal.get_normal_chord(chord.name || chord);
    var teoria_chord = teoria.chord(chord);
    } catch(e) {
      console.log("CANT DO CHORD", chord, e);
      return;
    }
    duration = duration || 1000;

    // octaves cost 12. so... the offsets will be...
    var chord_notes = teoria_chord.notes().map(function(n) { return n.toString() });
    polySynth.triggerAttackRelease(chord_notes, "2n");
  }
};


window.play_chord = module.exports.play_chord;
