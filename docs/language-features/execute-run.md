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
            playsound minecraft:entity.player.levelup @s ~ ~ ~ 1 1
        }
        ```

        This will say "I have 1 apple!" and play a sound if the executing entity has a score of 1 in the `appleCount` objective.

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
            playsound minecraft:entity.player.hurt @s ~ ~ ~ 1 1
        } else execute if score @s appleCount matches 1 run {
            say I have 1 apple!
            playsound minecraft:entity.player.levelup @s ~ ~ ~ 1 1
        } else run {
            say I have more than 1 apple!
            playsound minecraft:ui.toast.challenge_complete @s ~ ~ ~ 1 1
        }
        ```

        This will 1: say "I have no apples!" and play a sound if the executing entity has a score of 0 in the `appleCount` objective. 2: say "I have 1 apple!" and play a sound if the executing entity has a score of 1 in the `appleCount` objective. Or 3: say "I have more than 1 apple!" and play a sound if the executing entity has a score of more than 1 in the `appleCount` objective.