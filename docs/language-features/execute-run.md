Any `execute ... run` command can be followed by a [Block](blocks.md) to create a new function that gets called by execute command.

```
execute ... run {
    <...>
}
```

??? info "Examples"
    !!! example "Conditional Execution"
        ```
        execute if score @s appleCount matches 1 run {
            say I have 1 apple!
        }
        ```

## Execute If / Else
Any `execute run` block can be turned into an `execute if / else` block by appending an `else execute ... run` or `else run` block to it

```
execute ... run {
    <...>
} else execute ... run {
    <...>
} else run {
    <...>
}
```

??? info "Examples"
    !!! example "Multi-Conditional Execution"
        ```
        execute if score @s appleCount matches ..0 run {
            say I have no apples!
        } else execute if score @s appleCount matches 1 run {
            say I have 1 apple!
        } else run {
            say I have more than 1 apple!
        }
        ```

## Execute If / Unless Function

You can embed a [Block](blocks.md) in the `if/unless function` execute sub-command.

```
execute <if|unless> function {
	<...>
} run <...>
```

??? info "Examples"
    !!! example "If Function"
        An `OR` condition using `if function`

        ```{title="example.mcb"}
        function a {
            execute if function {
                execute if score @s test matches 1 run return 1
                execute if score @s test matches 5 run return 1
                execute if score @s test matches 10 run return 1
                return 0
            } run say "Hello World!"
        }
        ```

        ```{title="example:a.mcfunction"}
        execute if function example:zzz/b run say "Hello World!"
        ```

        ```{title="example:zzz/b.mcfunction"}
        execute if score @s test matches 1 run return 1
        execute if score @s test matches 5 run return 1
        execute if score @s test matches 10 run return 1
        return 0
        ```
