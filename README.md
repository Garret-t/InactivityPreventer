# Inactivity Preventer
To prevent inactivity within a 30 minute time span, every 28 minutes, this program will press the shift key, this prevents windows from sending you back to the log in screen and having to retype your password. The program will terminate after 14 hours.

*Warning: By downloading these files, you accept that I am no longer held accountable for any level of security that gets compromised, and that you are compromising some level of security by having your system not log out after inactivity. Under the circumstance that something were to happen due to this program preventing log out after inactivty, you are held accountable.*

## How to Run
Simply download the files, extract them somewhere, double-click on the bat(hopefully wscript is added to your path). You can also add a shortcut to the bat and run it on startup if necessary.

To stop the program, open task manager(Ctrl Alt Delete), expand it by clicking more details, scroll down until you see Microsoft ® Windows Based Script Host. Then select it, right click on it, and select end task or at the bottom right, click the button that says end task.  

## Code Explanation if you're worried
The code is safe and commented with explanations just in case you get questioned by an admin or something on the network.

This is the Javascript file where everything important is executed.
```Javascript
//Variable that creates the Windows Script Host shell
var WshShell = WScript.CreateObject("WScript.Shell");

//Loop that repeats 30 times, once every 28 minutes
for (var i = 0; i < 30; i++) {
    //Presses down the 'Shift' Key, + is the code for it https://ss64.com/vb/sendkeys.html
    WshShell.SendKeys('+');

    //Wait time before the next iteration
    WScript.Sleep(1680000); //1000 = 1 second, 1000*60 = 1 min, 60000*28 = 1680000 or 28 min
}

//Exits the Windows Script Host after everything finishes
WScript.Quit()
```
This is the bat file that you click on to start the program.

```Batchfile
@echo off
Rem The above turns off command echoing, this line is a comment, not actually code

Rem Below the windows script host is started and runs the javascript
start wscript script.js

Rem Exits the window after starting the script
exit
```


*Note: I know this has been done before, this is just a page for me and others to download the files on the network, thanks.*
