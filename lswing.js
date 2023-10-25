

var myParameters = {};

function init() {

		
//Channel Fader  Container
	
	faders = local.values.addContainer("Faders Page1");
	faders.setCollapsed(true);
		for (var i = 1; i<=10; i++) {
		faders.addFloatParameter("Fader "+(i), "", 0, 0, 255);  }	
	faders = local.values.addContainer("Faders Page2");
	faders.setCollapsed(true);
		for (var i = 1; i<=10; i++) {
		faders.addFloatParameter("Fader "+(i), "", 0, 0, 255);  }
		
//Buttons Containers Page1
	buttcont = local.values.addContainer("Buttons Page One");
	buttcont.setCollapsed(true);
	buttcont = local.values.addContainer("Buttons Page Two");
	buttcont.setCollapsed(true);
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row1");
	buttons.setCollapsed(true);
		for (var i = 1; i<=10; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row2");
	buttons.setCollapsed(true);
		for (var i = 11; i<=20; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row3");
	buttons.setCollapsed(true);
		for (var i = 21; i<=30; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row4");
	buttons.setCollapsed(true);
		for (var i = 31; i<=40; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row5");
	buttons.setCollapsed(true);
		for (var i = 41; i<=50; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageOne.addContainer("Buttons Row6");
	buttons.setCollapsed(true);
		for (var i = 51; i<=60; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
//Buttons Containers Page2
	
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row1");
	buttons.setCollapsed(true);
		for (var i = 1; i<=10; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row2");
	buttons.setCollapsed(true);
		for (var i = 11; i<=20; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row3");
	buttons.setCollapsed(true);
		for (var i = 21; i<=30; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row4");
	buttons.setCollapsed(true);
		for (var i = 31; i<=40; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row5");
	buttons.setCollapsed(true);
		for (var i = 41; i<=50; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
	buttons = local.values.buttonsPageTwo.addContainer("Buttons Row6");
	buttons.setCollapsed(true);
		for (var i = 51; i<=60; i++) {
		buttons.addBoolParameter("Button "+(i), "","");  }
		
}		

function oscEvent(address, args) {
	script.log(" Message received : " + address);
		
			
	// Faders Page 1
		for (var n = 1; n<= 10; n++) {
		if (address == "/LSW/Fader/1/"+n){
			local.values.fadersPage1.getChild('fader'+n).set(args[0]);  } }	
	// Faders Page 2
		for (var n = 1; n<= 10; n++) {
		if (address == "/LSW/Fader/2/"+n){
			local.values.fadersPage2.getChild('fader'+n).set(args[0]);  } }	
			
			
	// Buttons Page1 Row1
		for (var n = 1; n<= 10; n++) {
		if (address == "/LSW/Button/1/"+n){
			local.values.buttonsPageOne.buttonsRow1.getChild('button'+n).set(args[0]);  } }
	// Buttons Page1 Row2
		for (var n = 11; n<= 20; n++) {
		if (address == "/LSW/Button/1/"+n){
			local.values.buttonsPageOne.buttonsRow2.getChild('button'+n).set(args[0]);  } }
	// Buttons Page1 Row3
		for (var n = 21; n<= 30; n++) {
		var b= n+30 ;
		if (address == "/LSW/Button/1/"+b){
			local.values.buttonsPageOne.buttonsRow3.getChild('button'+n).set(args[0]);  } }
	// Buttons Page1 Row4
		for (var n = 31; n<= 40; n++) {
		if (address == "/LSW/Button/1/"+n){
			local.values.buttonsPageOne.buttonsRow4.getChild('button'+n).set(args[0]);  } }
	// Buttons Page1 Row5
		for (var n = 41; n<= 50; n++) {
		if (address == "/LSW/Button/1/"+n){
			local.values.buttonsPageOne.buttonsRow5.getChild('button'+n).set(args[0]);  } }
	// Buttons Page1 Row6
		for (var n = 51; n<= 60; n++) {
		var b= n-30 ;
		if (address == "/LSW/Button/1/"+b){
			local.values.buttonsPageOne.buttonsRow6.getChild('button'+n).set(args[0]);  } }
		
}


function update(deltaTime) {
	var now = util.getTime();
	if(now > TSSendAlive) {
		TSSendAlive = now + 1;
		keepAlive();
	}
}

function keepAlive() {
	local.send("/LSW/Sync",0.0);
}




/// Controls

function push_button(page, row, button, val) {
	button= ((row-1)*10+button);
	local.send("/LSW/Button/"+page+"/"+button+"", val);
}

function toggle_button(page, row, button, val) {
	button= ((row-1)*10+button);
	local.send("/LSW/ToggleButton/"+page+"/"+button+"");
}

function focus_button(row, button, val) {
	button= ((row-1)*10+button);
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
