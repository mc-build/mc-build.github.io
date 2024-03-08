Function definitions are used to create new functions. They can be used inside of [Directories](directories.md), or in the root of the `.mcb` file.

Applying the `tick` or `load` keyword to a function definition will add it to the `minecraft:tick` function tag or the `minecraft:load` function tag, respectively.

```
function <name> [tick|load] {
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

    !!! example "Creating a Ticking Function"
        ```
        function hello tick {
            say I spam chat every tick!
        }
        ```

    !!! example "Creating a Loading Function"
        ```
        function hello load {
            say I'm polite, and only say hello once when the Data Pack loads!
        }
        ```

