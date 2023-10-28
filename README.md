## LS Wing Control
Control your LightShark LS-Wing with Chataigne (OSC implementation)  
Select Mode 5 (pressing SEL-5 button) at startup of your LS-Wing to use the OSC/UDP-Mode

The LS-Wing is a multitask hardware controller. It has 6 rows of 10 buttons and 10 faders, all of them configurable twice on two pages.  
Initially it controls the LightShark LS-1 and LS-Core (Modes 1 to 3); but it can also be configured as a pure MIDI-controller (Mode4) or OSC/UDP controller (Mode5)

You can connect to its Web-Server via the default addresses lswing.local or 2.0.0.11 or by a freely configurable (static) IP address to integrate into your network  
notice when connecting with the default address : "lswing.local", there will be no feedback sent back to Chataigne  
Feedback will be provided by regular IP address (as 2.0.0.11 ou 192.168.xx.xx etc)  
The default OSC Ports are  
Incoming: 8000 and Outgoing: 9000 (but can be changed if necessary!)

the LS-Wing can also be controlled by DMX-Remote and the LS-Wing integrate two Nodes (ArtNet or ACN versus DMX).  
All these features make the LS-Wing quite unique and versatile. 

### Version 1.2
added containers for monitoring Feedback from LS-Wing's Faders and Buttons-Values *(you may not see the buttons immediatly after having inserted a new LS-Wing-Module...in this case, just restart Chataigne and all will be fine...)*

Please note that, to obtain feedback from the LS-Wing, you must first have configured "OSC-Commands" on the Faders and/or Buttons..!!  
(this is done in the Mapping-Setup inside the LS-Wing Configuration-Page)   
Please note also that the LS-Wing should be connected to the computer when using this module ! As there are sent Sync-Actions automatically, this might make "hang-on" Chataigne when no LS-Wing is connected...  
If you want to just try the module offline and see, what it looks like... please use the file "lswing_offline.js" instead (and rename it to "lswing.js") 

