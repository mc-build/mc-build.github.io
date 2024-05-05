Function definitions are used to create new functions. They can be used inside of [Directories](directories.md), or in the root of the `.mcb` file.

Applying the `tick` or `load` keyword to a function definition will add it to the `minecraft:tick` function tag or the `minecraft:load` function tag, respectively.

```
function <name> [function-tag] {
    <...>
}
```

??? info "Examples"
    !!! example "Creating a Function"
        ```
        function hello {
            say Hello, world!
        }
        ```

    !!! example "Adding a function to the `minecraft:tick` tag"
        ```
        function hello minecraft:tick {
            say I spam chat every tick!
        }
        ```

    !!! example "Adding a function to the `minecraft:load` tag"
        ```
        function hello minecraft:load {
            say I'm polite, and only say hello once when the Data Pack loads!
        }
        ```

    !!! example "Adding a function to a custom tag"
        ```
        function hello my_namespace:my_tag {
            say Hello!
        }
        ```
        If no namespace is specified the local namespace is used.
        ```
        function hello my_tag {
            say Hello!
        }
        ```

