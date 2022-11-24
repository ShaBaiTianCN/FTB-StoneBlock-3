onEvent("item.registry", (event) => {
  event
    .create("ftbstoneblock:stonepebble")
    .displayName("Stone Pebble")
    .food((food) => {
      food
        .hunger(1)
        .saturation(1)
        .effect("minecraft:hunger", 200, 0, 1)
        .effect("minecraft:slowness", 200, 1, 1)
        .effect("minecraft:resistance", 200, 1, 1)
        .fastToEat();
    });

  event.create("ftbstoneblock:mob_soul").displayName("Mob Soul");
  event.create("ftbstoneblock:press_rod_die").displayName("Rod Die");
  event.create("ftbstoneblock:ritual_starter").displayName("Ritual Starter");
  event.create("ftbstoneblock:cold_silverfish_shard");
  event.create("ftbstoneblock:warm_silverfish_shard");
  event.create("ftbstoneblock:silverfish_heart").glow(true);
  event
    .create("ftbstoneblock:incomplete_watch")
    .texture("projecte:item/rings/time_watch_off");

  event
    .create("ftbstoneblock:incomplete_raw_basic_processor")
    .texture("refinedstorage:item/raw_basic_processor");

  event
    .create("ftbstoneblock:incomplete_raw_improved_processor")
    .texture("refinedstorage:item/raw_improved_processor");

  event
    .create("ftbstoneblock:incomplete_raw_advanced_processor")
    .texture("refinedstorage:item/raw_advanced_processor");

  event
    .create("ftbstoneblock:incomplete_printed_logic_processor")
    .texture("ae2:item/printed_logic_processor");

  event
    .create("ftbstoneblock:incomplete_printed_calculation_processor")
    .texture("ae2:item/printed_calculation_processor");

  event
    .create("ftbstoneblock:incomplete_printed_engineering_processor")
    .texture("ae2:item/printed_engineering_processor");

  event
    .create("ftbstoneblock:millstone_dummy_block")
    .parentModel("create:block/millstone/item");

  event
    .create("avaritia:addon_singularity")
    .displayName("Addon: Processing Tier 2 Singularity");

  event
    .create("avaritia:balloon_singularity")
    .displayName("Balloon Singularity");

  event
    .create("avaritia:corrupted_ingot_singularity")
    .displayName("Corrupted Ingot Singularity");

  event
    .create("avaritia:enderium_block_singularity")
    .displayName("Enderium Block Singularity");

  event
    .create("avaritia:filter_pet_singularity")
    .displayName("Mob Filter (Pet) Singularity");

  event
    .create("avaritia:infused_enderpearl_singularity")
    .displayName("Infused Enderpearl Singularity");

  event
    .create("avaritia:manasteel_ingot_singularity")
    .displayName("Manasteel Ingot Singularity");

  event
    .create("avaritia:mob_soul_singularity")
    .displayName("Mob Soul Singularity");

  event
    .create("avaritia:nether_star_singularity")
    .displayName("Nether Star Singularity");

  event
    .create("avaritia:flux_block_singularity")
    .displayName("Flux Block Singularity");

  event
    .create("avaritia:crystal_nitro_singularity")
    .displayName("Nitro Crystal Singularity");

  event
    .create("avaritia:overclocker_node_singularity")
    .displayName("Node Overclocker Singularity");

  event
    .create("avaritia:palette_singularity")
    .displayName("Palette and Brush Singularity");

  event
    .create("avaritia:pellet_polonium_singularity")
    .displayName("Polonium Pellet Singularity");

  event
    .create("avaritia:pig_iron_ingot_singularity")
    .displayName("Pig Iron Ingot Singularity");

  event
    .create("avaritia:etherealslate_singularity")
    .displayName("Ethereal Slate Singularity");

  event
    .create("avaritia:magenta_matter_singularity")
    .displayName("Magenta Matter Singularity");

  event
    .create("avaritia:source_gem_singularity")
    .displayName("Source Gem Singularity");

  event
    .create("avaritia:track_singularity")
    .displayName("Train Track Singularity");

  event
    .create("avaritia:uraninite_singularity")
    .displayName("Uraninite Singularity");

  event.create("avaritia:wall_singularity").displayName("Wall Singularity");
  event
    .create("avaritia:emerald_cluster_singularity")
    .displayName("Emerald Cluster Singularity");
  event
    .create("avaritia:xp_jelly_baby_singularity")
    .displayName("Xp Jelly Baby Singularity");
});

onEvent("block.registry", (event) => {
  event
    .create("ftbstoneblock:dust")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Dust");
  event
    .create("ftbstoneblock:crushed_netherrack")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Crushed Netherrack");
  event
    .create("ftbstoneblock:crushed_endstone")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Crushed End Stone");
  event
    .create("ftbstoneblock:crushed_deepslate")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("Crushed Deepslate");

  for (let type in global.compressables) {
    let props = global.compressables[type];
    let maxLevel = props.maxLevel || global.maxCompress;
    let tool = props.tool || "pickaxe";
    let x = {
      1: "5.0",
      2: "10.0",
      3: "20.0",
    };
    let y = {
      1: "minecraft:needs_stone_tool",
      2: "minecraft:needs_iron_tool",
      3: "minecraft:needs_diamond_tool",
    };
    for (let i = 1; i <= maxLevel; i++) {
      event
        .create(`ftbstoneblock:${i}x_compressed_${type}`)
        .tagBlock(`minecraft:mineable/${tool}`)
        .tagBlock(y[i])
        .requiresTool(true)
        .material(props.material)
        .hardness(x[i])
        .displayName(`${i}x Compressed ${props.name}`);
    }
  }
});
