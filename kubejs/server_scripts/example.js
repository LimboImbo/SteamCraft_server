ServerEvents.recipes(event => {
  var globalMult = 1
  var coalMult = 1*globalMult
  var cobbleMult = 1*globalMult

  event.remove([{ id: 'create_recipes:diamondpressing' }])
  event.remove([{ id: 'create:mixing/lava_from_cobble' }])
  event.remove([{ id: 'create:crafting/kinetics/steam_engine' }])
  event.remove([{ id: 'better_campfires:new_soul_campfire_recipe' }])
  event.remove([{ id: 'better_campfires:new_campfire_recipe' }])
  event.remove({ output: 'minecraft:ice' })

  event.shaped(
    'create:steam_engine', // arg 1: output
    [
      ' A ',
      'CBC', // arg 2: the shape (array of strings)
      ' D '
    ],
    {
      A: '#forge:plates/gold',
      B: 'steam_craft_season_one:steam_core',  //arg 3: the mapping object
      C: 'create:andesite_alloy',
      D: 'minecraft:copper_block'
    }
  )
  
  event.recipes.create.mixing(Fluid.lava(100), [Item.of('minecraft:cobblestone', 5*cobbleMult), Item.of("minecraft:coal", 3*coalMult)]).heated()
  event.recipes.create.mixing(Fluid.water(100), 'minecraft:packed_ice').heated()
  event.recipes.create.mixing(Fluid.water(900), 'minecraft:blue_ice').heated()
});

LootJS.modifiers((event) => {
  event
      .addLootTableModifier("minecraft:gameplay/fishing")
      .removeLoot(ItemFilter.ALWAYS_TRUE);
  event
      .addLootTableModifier("minecraft:gameplay/fishing/junk")
      .removeLoot(ItemFilter.ALWAYS_TRUE);
  event
      .addLootTableModifier("minecraft:gameplay/fishing/fish")
      .removeLoot(ItemFilter.ALWAYS_TRUE);
  event
      .addLootTableModifier("minecraft:gameplay/fishing/treasure")
      .removeLoot(ItemFilter.ALWAYS_TRUE);
  
  event
      .addBlockLootModifier("kubejs:unb_blue_ice")
      .removeLoot(ItemFilter.ALWAYS_TRUE);

  event
      .addBlockLootModifier("kubejs:unb_packed_ice")
      .removeLoot(ItemFilter.ALWAYS_TRUE);

  event
      .addBlockLootModifier("#minecraft:leaves")
      .removeLoot("#minecraft:saplings");
});