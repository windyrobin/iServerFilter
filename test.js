var map = {
};

function insepct(obj){
  console.log(require("util").inspect(obj, false, 10));
}

function init(){
  var i, j;
  var ipp = "192.168.";
  var start = new Date();
  var key ;
  for(i = 0; i < 255; i++){
    for(j = 0; j < 255; j++){
      key = ipp;
      key += i;
      key += ".";
      key += j;

      map[key] = i;
    }
  }
  var end = new Date();
  console.log("time : " + (end - start));
}

var TEST_NUMBER = 1000000;

function test(){
  var key = "192.168.111.1";
  var start = new Date();
  for(var i = 0; i < TEST_NUMBER; i++){
    val = map[key];
  }
  var end = new Date();
  console.log("time : " + (end - start));
  console.log(key + " : " + val);
}


init();
test();
