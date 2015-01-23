# edit Firefox tab titles
A simple Firefox extension for editing tab titles.

# Why does this project exist?
To scratch an itch. As one opens more and more tabs in Firefox, one finds that a smaller and smaller part of the tab's full title gets displayed. Wouldn't it be nice if you could put useful information in the beginning of the title, where you can see it?

# Build notes
To build this extension, you'll need the menuitems-jplib and vold-utils-jplib packages. Both have their own GitHub repositories; find them at https://github.com/mykmelez?tab=repositories . Put them in the packages/ subdirectory (create it if it doesn't exist). Your directory structure should look something like this:

(root)
  |
  +-lib
  |
  +-test
  |
  +-packages
     |
     +-mykmelez-menuitems-jplib
     |
     +-mykmelez-vold-utils-jplib
