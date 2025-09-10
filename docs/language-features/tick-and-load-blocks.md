Blocks created with the `tick`, and `load` keywords will be appended to the `minecraft:tick`, and `minecraft:load` function tags respectively.

They do not embed a function call when created inside a function.

```
tick {
    <...>
}
```

```
load {
    <...>
}
```

??? info "Example"
    ```
    function say_hi {
        load {
            say this will run on load
        }
        tick {
            this will run every tick
        }
        say this will run when say_hi is run
    }
    ```
