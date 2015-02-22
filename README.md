# edit Firefox tab titles
A simple Firefox extension for editing tab titles.

# Why does this project exist?
To scratch an itch. As one opens more and more tabs in Firefox, one finds that a smaller and smaller part of the tab's full title gets displayed. Wouldn't it be nice if you could put useful information in the beginning of the title, where you can see it?

# Prerequisites/Build notes
To build this extension, you'll need the add-on SDK installed and activated ( see https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started ). You'll also need to download the menuitems-jplib and vold-utils-jplib packages. Both have their own GitHub repositories; find them at https://github.com/mykmelez?tab=repositories . They *should* get cloned automatically when you clone this repo. Your directory structure should look something like this:

/  
/lib  
/test  
/packages  
/packages/menuitems  
/packages/menuitems/docs  
/packages/menuitems/lib  
/packages/menuitems/tests  
/packages/vold-utils  
/packages/vold-utils/docs  
/packages/vold-utils/lib  
/packages/vold-utils/tests  

To build an XPI, run "cfx xpi". Then open the .xpi file in your favorite zip program and edit the file install.rdf. For some unknown reason, cfx puts in incorrect info about which browser versions this extension works with. Hypothetically, this extension should work with any version of Firefox. I can only test it with the latest version though. Insert whatever version information (browser mininum and maximum version) you think is appropriate.

# Which files to look at
The one file in the lib directory, main.js, should be where you start reading the code if you're unfamiliar with it. It's where the majority of the JavaScript is.
The two files in the data directory are also important:
-text-entry.html is responsible for showing the text entry area. If any CSS styling were necessary, this is likely where it would go.
-get-text.js takes the text from the text entry area and passes it to main.js

# Which files not to look at
The test directory and its contents were created automatically, I don't know if they're actually necessary. I haven't touched this dir.

# Testing
You don't need to build an XPI every time you want to test anything. Just activate the SDK and run "cfx run".
