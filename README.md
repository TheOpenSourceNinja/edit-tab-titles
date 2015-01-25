# edit Firefox tab titles
A simple Firefox extension for editing tab titles.

# Why does this project exist?
To scratch an itch. As one opens more and more tabs in Firefox, one finds that a smaller and smaller part of the tab's full title gets displayed. Wouldn't it be nice if you could put useful information in the beginning of the title, where you can see it?

# Build notes
To build this extension, you'll need the menuitems-jplib and vold-utils-jplib packages. Both have their own GitHub repositories; find them at https://github.com/mykmelez?tab=repositories . Put them in the packages/ subdirectory (create it if it doesn't exist). Your directory structure should look something like this:

/lib  
/test  
/packages  
/packages/mykmelez-menuitems-jplib  
/packages/mykmelez-vold-utils-jplib

To build an XPI, install the add-on SDK (see https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started ) and run "cfx xpi". Then open the .xpi file in your favorite zip program and edit the file install.rdf. For some unknown reason, cfx puts in incorrect info about which browser versions this extension works with. Hypothetically, this extension should work with any version of Firefox. I can only test it with the latest version though. Insert whatever version information (browser mininum and maximum version) you think is appropriate.
