
Tags are used to group together multiple items, blocks, or functions under a single name. For more information, see the [Minecraft Wiki](https://minecraft.fandom.com/wiki/Tag#Java_Edition).

MC-Build includes a custom syntax for defining tags, without having to leave the comfort of your `.mcb` file.

```
tag <tag_type> <tag_name> [replace] {
    <tag_value> [replace]
}
```

??? info "Examples"
	!!! example "Function Tags"
		```mcb
		tag functions my_functions {
			my_pack:my_function
			my_pack:my_function2
			my_pack:my_function3 replace
		}

		tag functions my_other_functions replace {
			#my_pack:my_functions
			my_pack:my_function4
		}
		```

	!!! example "Block Tags"
		```mcb
		tag blocks air {
			minecraft:air
			minceraft:cave_air
			minecraft:void_air
		}
		```