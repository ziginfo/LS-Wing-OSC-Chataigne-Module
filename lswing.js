

var myParameters = {};
/*
function oscEvent(address, args) {
	script.log(" Message received : " + address);
}

function update(deltaTime) {
	var now = util.getTime();
	if(now > TSSendAlive) {
		TSSendAlive = now + 5;
		keepAlive();
	}
}

function keepAlive() {
	local.send("/LSW/Sync",0.0);
}

*/


/// Controls

function push_button(page, button, val) {
	local.send("/LSW/Button/"+page+"/"+button+"", val);
}

function toggle_button(page, button, val) {
	local.send("/LSW/ToggleButton/"+page+"/"+button+"");
}

function focus_button(button, val) {
	local.send("/LSW/FocusButton/"+button+"", val);
}

function fader(page, fader, val) {
	val= Math.round (255*val) ;
	local.send("/LSW/Fader/"+page+"/"+fader+"", val);
}

function focus_fader(fader, val) {
	val= Math.round (255*val) ;
	local.send("/LSW/FocusFader/"+fader+"", val);
}

/// Actions

function page(page) {
	local.send("/LSW/Page", page);
}

function sync() {
	local.send("/LSW/Sync", 0.0);
}

function sync_faders() {
	local.send("/LSW/Sync/Faders", 0.0);
}

function sync_buttons() {
	local.send("/LSW/Sync/Buttons", 0.0);
}

function reset() {
	local.send("/LSW/Buttons/Reset", 0.0);
}

function reboot() {
	local.send("/LSW/Reboot", 0.0);
}
