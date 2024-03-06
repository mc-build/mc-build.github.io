Within the mcb language an import statement can be used to include aditional files into your program, mcb supports 3 kinds of imports.

1. JavaScript, Importing a JavaScript file will take the context exported via commonjs and will inject it into the JavaScript enviroment in the current file.

2. mcbt files, Importing a `.mcbt` will load all the macros from that file into the current file and make them usable.

3. libraries, Importing a library by name will load the code included in the library and add a set of macros to the current file.

`import <location>`
