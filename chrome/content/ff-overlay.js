var labi_on_firefox = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("labi_on_firefox-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    labi_on_firefox.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { labi_on_firefox.onLoad(); }, false);


labi_on_firefox.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    labi_on_firefox.showFirefoxContextMenu(e);
  }, false);
};

labi_on_firefox.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-labi_on_firefox").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { labi_on_firefox.onFirefoxLoad(); }, false);