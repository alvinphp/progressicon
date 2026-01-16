(function(){
    var count = 0;
    Piecon.setOptions({fallback: 'force'});
    var i = setInterval(function(){
      if (++count > 100) { Piecon.reset(); clearInterval(i); return false; }
      Piecon.setProgress(count);
    }, 250);
  })();