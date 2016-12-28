$(function() {
  var dice = [
    {color: 'blue'},
    {color: 'green'},
    {color: 'yellow'},
    {color: 'purple'}
  ];

  function dieRoll() { return Math.floor(Math.random()*6+1); }

  function rollDice() {
    var sum = 0;
    dice.forEach(function(d){
      d.roll = dieRoll();
      sum += d.roll;
    });
    dice.sort(function(a,b){return a.roll - b.roll;});
    dice.forEach(function(d,i){$('#d'+i).text(d.roll).attr('class','die '+d.color+'-die');});
    $('#sum').text(sum).attr('class', sum==14 ? 'alert' : null);
  }

  $('.die').on('click', function() {
    var d = dieRoll();
    alert(d);
    $(this).text(d).attr('class', 'die');
  });
  $('#btn').on('click', rollDice);

  rollDice();
});
