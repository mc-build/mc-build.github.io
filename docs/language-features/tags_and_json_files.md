The Tag and JSON File Syntaxes are meant to allow you to to produce the vanilla json files through the mc-build syntax.

tags are the only json files that have special syntax currently, other files may get syntax upgrades in future.
other json files currently just accept the raw json.

```
# Data Pack Tags
tag <tag_type> <tag_name> [replace] {
    <tag_value> [replace]
}

# Data Pack JSON Files
advancement <name> <json>
item_modifier <name> <json>
loot_table <name> <json>
predicate <name> <json>
recipe <name> <json>
chat_type <name> <json>
damage_type <name> <json>
dimension <name> <json>
dimension_type <name> <json>

# Worldgen JSON Files
worldgen <type> <name> <json>
# Subtypes
worldgen biome <name> <json>
worldgen configured_carver <name> <json>
worldgen configured_feature <name> <json>
worldgen density_function <name> <json>
worldgen noise <name> <json>
worldgen noise_settings <name> <json>
worldgen placed_feature <name> <json>
worldgen processor_list <name> <json>
worldgen structure <name> <json>
worldgen structure_set <name> <json>
worldgen template_pool <name> <json>
worldgen world_preset <name> <json>
worldgen flat_level_generator_preset <name> <json>
```

ex.

```
tag functions my_tag {
    my_pack:my_function
    my_pack:my_function2 replace
}

tag blocks stonelike replace {
    minecraft:stone
    minecraft:cobblestone replace
}

advancement my_advancement {
    "criteria": {
        ...
    },
    "rewards": {
        ...
    }
}
```
