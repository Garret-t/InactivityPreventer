//Variable that creates the Windows Script Host shell
var WshShell = WScript.CreateObject("WScript.Shell");

//Loop that repeats 25 times every 28 minutes
for (var i = 0; i < 25; i++) {
    //Presses down the 'Shift' Key, + is the code for it https://ss64.com/vb/sendkeys.html
    WshShell.SendKeys('+');

    //Wait time
    WScript.Sleep(1680000); //1000 = 1 second, 1000*60 = 1 min, 60000*28 = 28 min
}

//Exits the Windows Script Host after everything finishes
WScript.Quit()