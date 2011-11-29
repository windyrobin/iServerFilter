var MAX_CONN_PER_IP = 10;

function debug(str){
  console.log(str);
}

function inspect(obj){
  debug(require('util').inspect(obj));
}

exports.fn = function (server , maxNumber){
  var ipMap = {};
  var maxConnPerIP = maxNumber || MAX_CONN_PER_IP;

  server.on('connection', function(sock){
    var ip = sock.remoteAddress;
    debug('inc ' + ip + ' : ' + ipMap[ip]);
    if(ipMap[ip] == null){
      ipMap[ip] = 1;
    }else{
      ipMap[ip]++;
      if(ipMap[ip] > maxConnPerIP){
        sock.destroy();
      }
    }

    sock.on('close', function(){
      var ip = sock.remoteAddress;
      debug('dec ' + ip + ' : ' + ipMap[ip]);
      if(ipMap[ip] > 1){
        ipMap[ip]--;
      }else{
        delete ipMap[ip];
      }
    });
  });

  setInterval(function(){
    inspect(ipMap);
  }, 5000);
}
