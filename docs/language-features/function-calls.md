MCB Supports a few non standards call systems for functions, function calls can be made using a relative path, a hiarchical reference and an absolute function reference as well as normally with a literal function reference.

The hiarchical function reference starts with `^` and takes a number of steps up from the current function in which its used.

```
function ^<integer>
```

??? info "Example"
    ```{title="Code"}
    function dummy {
        block {
            function ^1
            function ^0
        }
    }
    ```

    ```{title="my_pack:zzz/0.mcfunction"}
    function my_pack:dummy
    function my_pack:zzz/0
    ```


The root function reference starts with `*` and will make a reference from current namespace with the given path.
```
function *<path>
```

??? info "Example"
    ```{title="Code"}
    dir folder {
        function dummy {
            function *dummy2
        }
    }
    function dummy2 {
        say Hello, world!
    }
    ```

    ```{title="folder/dummy.mcfunction"}
    function my_pack:dummy2
    ```

The relative function reference starts with either `./` or `../` and can be used to call a function relative to the call location. Similar to how file paths work in a file system.

```
function ./<path>
function ../<path>
```

??? info "Example"
    ```{title="Code"}
    dir folder {
        function dummy {
            function ./dummy2
            function ../dummy3
        }
        function dummy2 {
            say Hello, world!
        }
    }
    function dummy3 {
        say Hello, world!
    }
    ```

    ```{title="folder/dummy.mcfunction"}
    function my_pack:folder/dummy2
    function my_pack:dummy3
    ```



The final way of calling a function is as normal using using an absolute function call.

```
function <path>
```

??? info "Example"
    ```{title="Code"}
    dir folder {
        function dummy {
            function my_pack:folder/dummy2
        }
        function dummy2 {
            say Hello, world!
        }
    }
    ```

    ```{title="folder/dummy.mcfunction"}
    function my_pack:folder/dummy2
    ```