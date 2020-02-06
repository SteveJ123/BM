// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};
// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};
// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab // tabsbefore index ["Netflix", "YouTube"] -- this.tabs ["Vimeo", "Vine"]
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab // tabsafterindex contains [] --  this.tabs ["Vimeo", "Vine"]

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together // ["Netflix", "YouTube"] concat []
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes // ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab']
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join ["Netflix", "YouTube"]
  .join(workWindow.tabClose(1).tabOpen()); // ["GMail", "Work mail", "Docs", "freeCodeCamp", 'new tab']

console.log(finalTabs.tabs);// (4) 
// alert(finalTabs.tabs);