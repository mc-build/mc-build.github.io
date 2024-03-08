MC-Build includes placeholder syntaxe for raw JSON Files.

!!! note "Looking for Tags?"

    Tags have their own custom syntax in MC-Build.

    Check out [This Page](./tags.md) if you're looking for how to define function, block, entity, or other [tags](https://minecraft.fandom.com/wiki/Tag#Java_Edition).

!!! warning "Head's Up!"
    JSON File syntax may change in the near future to provide more generative features.

## Supported JSON Files

### [Advancements](https://minecraft.fandom.com/wiki/Advancement/JSON_format)
```
advancement <name> <json>
```
### [Item Modifiers](https://minecraft.fandom.com/wiki/Item_modifier)
```
item_modifier <name> <json>
```
### [Loot Tables](https://minecraft.fandom.com/wiki/Loot_table)
```
loot_table <name> <json>
```
### [Predicates](https://minecraft.fandom.com/wiki/Predicate)
```
predicate <name> <json>
```
### [Recipes](https://minecraft.fandom.com/wiki/Recipe)
```
recipe <name> <json>
```
### [Chat Type](https://minecraft.fandom.com/wiki/Data_pack#Folder_structure)
```
chat_type <name> <json>
```
### [Damage Type](https://minecraft.fandom.com/wiki/Damage_type)
```
damage_type <name> <json>
```
### [Dimension](https://minecraft.fandom.com/wiki/Dimension)
```
dimension <name> <json>
```
### [Dimension Type](https://minecraft.fandom.com/wiki/Dimension_type)
```
dimension_type <name> <json>
```

## [Worldgen](https://minecraft.fandom.com/wiki/Custom_world_generation)
```
worldgen <type> <name> <json>
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

```

advancement my_advancement {
    "criteria": {
        ...
    },
    "rewards": {
        ...
    }
}
```
