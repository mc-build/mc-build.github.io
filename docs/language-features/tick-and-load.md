Within the mcb language there are two special blocks for adding commands to be run on tick/load

the load or tick keywords followed by a block will add the commands generated to a function run by the respective tag.

`load {...}`

`tick {...}`

ex.

```
function say_hi{
    load{
        say this will run on load
    }
    tick {
        this will run every tick
    }
    say this will run when say_hi is run
}
```
