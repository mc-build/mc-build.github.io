Blocks are used to define an inline function, inside another function.

```
block [name] { [<macro arguments> | with <...>]
    <...>
}
```

## Creating a Block
When creating a block inside of a function, it will inline a call to it's generated function.

Creating an unnamed block will put the generated function into the parent function's folder + `zzz/<id>.mcfunction`.

??? info "Creating an Anonymous Block"
    ```{title="Code"}
    function example {
        say Before block
        block {
            say Hello, world!
        }
        say After block
    }
    ```

    ```{title="example.mcfunction"}
    say Before block
    function zzz/0
    say After block
    ```

    ```{title="zzz/0.mcfunction"}
    say Hello, world!
    ```

## Naming a Block
A named block will put it's generated function into the parent function's folder as `<name>.mcfunction`.

??? info "Creating an Named Block"
    ```{title="Code"}
    function example {
        block my_block {
            say Hello, world!
        }
    }
    ```

    ```{title="example.mcfunction"}
    function my_block
    ```

    ```{title="my_block.mcfunction"}
    say Hello, world!
    ```

## Using Macro Arguments

Blocks can take macro arguments, which are then passed to the inlined function call.

??? info "Using Macro Arguments"
    !!! example "Hard-coded Arguments"
        ```{title="Code"}
        function example {
            block my_block { {input: "world"}
                $say Hello, $(input)!
            }
        }
        ```

        ```{title="example.mcfunction"}
        function my_block {input: "world"}
        ```

        ```{title="my_block.mcfunction"}
        $say Hello, $(input)!
        ```

    !!! example "Dynamic Arguments"
        ```{title="Code"}
        function example {
            block my_block { with storage example:arguments {}
                $say Hello, $(input)!
            }
        }
        ```

        ```{title="example.mcfunction"}
        function my_block with storage example:arguments {}
        ```

        ```{title="my_block.mcfunction"}
        $say Hello, $(input)!
        ```
