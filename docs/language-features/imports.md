MC-Build supports importing of JavaScript, Templates, and libraries.

## Importing JavaScript Files
```
import <path_to_file>.js
```

When importing a JavaScript file, the context exported via `module.exports` will be injected into the JavaScript environment in the current file.

??? info "Examples"
	!!! example "Importing a JavaScript File"
		```{title="my_js_file.js"}
		module.exports = {
			helloWorldString: "Hello, world!"
			myIterator: function* () {
				yield 1;
				yield 2;
				yield 3;
			}
		}
		```

		```{title="example.mcb"}
		import ./my_js_file.js

		function example {
			say <% helloWorldString %>
		}

		REPEAT myIterator as i {
			function <% i %> {
				say I'm function <% i %>!
			}
		}
		```

## Importing Template Files
```
import <path_to_file>.mcbt
```

When importing a `.mcbt` file, all the templates from that file will be loaded into the current file and made usable.

??? info "Examples"
	!!! example "Importing a Template File"
		```{title="my_template.mcbt"}
		template hello {
			with arg1:word {
				say Hello, <% arg1 %>!
			}
		}
		```

		```{title="example.mcb"}
		import ./my_template.mcbt

		function hello {
			hello world
		}
		```


## Importing Libraries
```
import <library_name>
```

When importing a library by name, the code included in the library will be loaded and any templates from it will be added to the current file.

??? info "Examples"
	!!! example "Importing a Library"
		```{title="example.mcb"}
		import hello_world_lib

		function hello {
			hello world
		}
		```