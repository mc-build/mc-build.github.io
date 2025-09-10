Function definitions are used to create new functions. They can be used inside of [Directories](directories.md), or in the root of the `.mcb` file.

```
function <name> [function-tag] {
    <...>
}
```

`function-tag` is optional and can be used to add the function to a tag. If no namespace is specified the local namespace is used.

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

