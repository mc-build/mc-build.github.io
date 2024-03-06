# JavaScript Blocks

JavaScript blocks in mc-build allow you to run javascript and effect the output based on the code run.

## inline scripts

inline scripts are snippets, variable references, etc.

`<% code %>`

## multi line blocks

```
<%%
//Javascript Code
%%>
```

# Contexts

the different script blocks expose different methods to the user.

## Multi Line Script blocks

the return result here is ignored.

`emit`

the emit function takes a string and injects it into the output.

`emit.mcb`

this does the same but runs it through the mc-build compiler before emiting it.

`emit.block` takes a list of commands and emits it as a function embeding a function call.

returns the function signature of the created function.

`context` the compiler context currently in use.

`embed` takes a `BoundBlock` instance provided by a template `block` argument and embeds a reference to it. returns a string of commands produced by evaluating the block.

`require` require provided by nodejs relative to the current file.

## Inline Expressions

this is used internally in some cases, ex. when evaluating loops.

`context` the compiler context currently in use.

## Value Injection

`embed` takes a `BoundBlock` instance provided by a template `block` argument and embeds a reference to it. returns a string of commands produced by evaluating the block.

## Globals

`LOOP` - the method that produces an iterator used for evaluating compile time loops.
