Templates are essentially compile-time macros. They allow you to define a command, that when called, will be replaced with the code defined in the Template. This is useful for defining complex sequences of commands that are used multiple times in a script, or for modfiying the behavior of vanilla commands.

!!! note
    Templates can only be defined inside of `.mcbt` files.

## Creating a Template

To create a template, you use the `template` keyword followed by the name of the template. Inside the template block, you define the code that will be executed when the template is called.

```
template <template_name> {
    <template_definition>
}
```

### Defining Call Signatures

Defining a template call signature is done using the `with` keyword followed by a list of arguments, then a code block.

```
template my_super_template {
    with [args] {
        <mcb_code>
    }
}
```

Call signatures are checked in the order of definition, so it's best to order them from most specific to least specific.

??? info "Example"
    !!! example "Ordering Signatures for Specificity"
        ```{title="Definition"}
        template my_template {
            with check this first {
                say Very specific
            }
            with a:word b:word c:word {
                say Less specific
            }
            with a:raw {
                say Least specific
            }
        }
        ```

### Arguments

Each argument is defined as a name followed by a type. The type is optional, and if not provided, the argument will be treated as a literal.

Arguments can be referenced inside of Script blocks by name.

#### Argument Types
- `int` - This will match any integer.
- `float` - This will match any number.
- `js` - This expects an inline JavaScript block and will pass the computed value.
- `word` - Matches anything up until the end of the input or the next space.
- `raw` - Collects all remaining input as a string.
- `literal` - Special, matches the argument name exactly, and is the default if no type is provided.

??? info "Examples"
    !!! example "Simple Template"
        ```{title="Definition"}
        template my_template {
            with string:raw {
                say <%string%>
            }
        }
        ```

        ```{title="Usage"}
        my_template Hello, World!
        ```

        ```{title="Output"}
        say Hello, World!
        ```

!!! warning
    If you pass a Script Block to anything other than a `js` argument, it will be interpreted *before* being passed to the template.
    ??? info "Examples"
        !!! example "Passing a Script Block to a non-js Argument"
            ```{title="Definition"}
            template my_template {
                with a:number {
                    say <%a%>
                }
            }
            ```

            ```{title="Usage"}
            my_template <%1+1%>
            ```

            Because `a` is not a `js` argument, the JS block will be evaluated before being passed to the template. So the argument recieves the value `2` instead of the block `<%1+1%>`.

            ```{title="Output"}
            say 2
            ```


## Calling a Template

To call a template, you first need to import it. This is done using the `import` keyword followed by the path to the `.mcbt` file containing the template.

```
import <template_path>.mcbt
```

Once imported, you can call the template either via `template <template_name>` or `<template_name>` followed by the arguments.

```
[template] <template_name> [args]
```

!!! warning
    If your template name is the same as an MC-Build keyword, you must use the `template` keyword to call it.


## Tick and Load

Templates can define `tick` and `load` blocks, which are functions that will be appended to the `minecraft:tick` and `minecraft:load` function tags respectively.

```
template <template_name> {
    load {
        <mcb_code>
    }
    tick {
        <mcb_code>
    }
    with [args] {
        <mcb_code>
    }
}
```

!!! note
    Templates can only define one `load` and one `tick` block each

!!! warning
    The `tick` and `load` blocks are not appended to the `minecraft:tick` and `minecraft:load` functions unless the template is called at least once.


??? info "Examples"
    !!! example "A simple Clock Template"
        ```{title="Definition"}
        template clock {
            load {
                scoreboard objectives add i dummy
                scoreboard players add #clock.ticks i 0
            }
            tick {
                scoreboard players add #clock.ticks i 1
            }
            with get ticks player:word objective:word {
                scoreboard players operation <%player%> <%objective%> = #clock.ticks i
            }
            with get seconds player:word objective:word {
                scoreboard players operation #clock.seconds i = #clock.ticks i / 20
                scoreboard players operation <%player%> <%objective%> = #clock.ticks i
            }
        }
        ```