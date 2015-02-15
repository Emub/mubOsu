alert("lol");

var mubOsu = {

  // If set to true, the script might spam the console
  developerMode: true,

  intervals: {

    // Check if the site is ready every millisecond
    readyInterval: setInterval(this.methods.checkScriptReady, 1)
  },

  methods: {

    // start the script
    sriptinit: function(forceStart){

      if(forceStart !== true){

        // If not force started, check if the script is ready
        return mubOsu.methods.checkScriptReady();
      }

      else {

        // Script code goes here
        mubOsu.methods.log("Script started");
      }
    },

    // check if script is ready to start
    checkScriptReady: function(){
      if(typeof jQuery === "function"){
        return scriptInit(true);
      }

      else {
        if(mubOsu.developerMode){
          mubOsu.methods.log("jQuery not ready, script will not init");
        }

        return false;
      }
    },

    log: function(toLog){
      if(typeof toLog !== "string"){
        return console.error("[mubOsuWarning] IMPROPER USE OF MUBOSU LOG");
      }

      else {
        return console.log("[mubOsu] " + toLog);
      }
    }
  }
}
