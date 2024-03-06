Clocks are another way of defining a function that runs every so often.

```
clock <name> <time> {
    <...>
}
```

The `time` argument is identical to the `schedule` command's [delay argument](https://minecraft.wiki/w/Argument_types#time). It takes a number, and a unit of time.

??? info "Examples"
    !!! example "Basic 20 Second Clock"
        This will run the `say Hello, world!` command every 20 seconds.

        ```mcfunction
        clock my_clock 20s {
            say Hello, world!
        }
        ```

    !!! example "Basic 1 Tick Clock"
        This will run the `say Hello, world!` command every tick.

        ```mcfunction
        clock my_clock 1t {
            say Hello, world!
        }
        ```
