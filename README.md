###Synopsis
    
  This module provide a method to tackle with network attacks.  
  eg  , you could set the LIMIT number of connections a client/ip could hold  
  when it reaches to this limit , just close the socket...  
    
###Usage
  
  After you create a tcp/http server :

  ```js
    var MAX_CONN_PER_IP = 10;
    var doFilter = require('./server_filter').fn;
    doFilter(server, MAX_CONN_PER_IP);
  ```
  