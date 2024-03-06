Directories allow you to create folders for organizing your Data Pack's generated files.

```
dir <name> {
    <...>
}
```

??? info "Examples"
    !!! example "Creating a Directory"
        ```mcfunction
        dir my_directory {
            function my_function {
                say Hello, world!
            }
        }
        ```

        This will create a folder called `my_directory` and put the `my_function` function inside it.