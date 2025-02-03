StartupEvents.registry('block', event => {
  event.create('unb_packed_ice') // Create a new block
    .displayName('Packed Ice') // Set a custom name
    .soundType('glass') // Set a material (affects the sounds and some properties)
    .hardness(10.0) // Set hardness (affects mining time)
    .resistance(50.0) // Set resistance (to explosions, etc)
    .tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)

  event.create('unb_blue_ice') // Create a new block
    .displayName(Text.translate('block.kubejs.unb_blue_ice')) // Set a custom name
    .soundType('glass') // Set a material (affects the sounds and some properties)
    .hardness(10.0) // Set hardness (affects mining time)
    .resistance(50.0) // Set resistance (to explosions, etc)
    .tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
})