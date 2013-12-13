$(document).ready(function() {
	$.noConflict();
	jQuery('<li></li>').html('Music:<br><a href="file://C:\Program Files(x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\sound\music\valve_csgo_01\mainmenu.mp3">Windows</a> <a href="file:///Users/owenhill/Library/Application%20Support/Steam/SteamApps/common/Counter-Strike%20Global%20Offensive/csgo/sound/music/valve_csgo_01/mainmenu.mp3" target="_blank">Mac</a>').appendTo(jQuery('#sidebar'));
});