onEvent("item.registry", (event) => {
  event
    .create("ftbstoneblock:stonepebble")
    .displayName("石子")
    .food((food) => {
      food
        .hunger(1)
        .saturation(1)
        .effect("minecraft:hunger", 200, 0, 1)
        .effect("minecraft:slowness", 200, 1, 1)
        .effect("minecraft:resistance", 200, 1, 1)
        .fastToEat();
    });

  event.create("ftbstoneblock:mob_soul").displayName("怪物灵魂");
  event.create("ftbstoneblock:press_rod_die").displayName("棒 模具");
  event.create("ftbstoneblock:ritual_starter").displayName("仪式启动器");
  event.create("ftbstoneblock:cold_silverfish_shard").displayName("冷蠹虫碎片");
  event.create("ftbstoneblock:warm_silverfish_shard").displayName("热蠹虫碎片");
  event.create("ftbstoneblock:silverfish_heart").glow(true).displayName("蠹虫之心");
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
    .create("ftbstoneblock:millstone_dummy_block")
    .parentModel("create:block/millstone/item");

  event
    .create("avaritia:addon_singularity")
    .displayName("插件：处理中Tier 2奇点");

  event
    .create("avaritia:balloon_singularity")
    .displayName("气球奇点");

  event
    .create("avaritia:corrupted_ingot_singularity")
    .displayName("Corrupted Ingot（等模组soulshards）奇点");

  event
    .create("avaritia:enderium_block_singularity")
    .displayName("末影块奇点");

  event
    .create("avaritia:filter_pet_singularity")
    .displayName("Mob Filter (Pet)（等模组darkutils翻译）奇点");

  event
    .create("avaritia:infused_enderpearl_singularity")
    .displayName("蕴魔末影珍珠奇点");

  event
    .create("avaritia:manasteel_ingot_singularity")
    .displayName("魔力钢锭奇点");

  event
    .create("avaritia:mob_soul_singularity")
    .displayName("怪物灵魂奇点");

  event
    .create("avaritia:nether_star_singularity")
    .displayName("下界之星奇点");

  event
    .create("avaritia:flux_block_singularity")
    .displayName("通量方块奇点");

  event
    .create("avaritia:crystal_nitro_singularity")
    .displayName("下界水晶奇点");

  event
    .create("avaritia:overclocker_node_singularity")
    .displayName("节点超频元件奇点");

  event
    .create("avaritia:palette_singularity")
    .displayName("调色盘与画笔奇点");

  event
    .create("avaritia:pellet_polonium_singularity")
    .displayName("钋靶丸奇点");

  event
    .create("avaritia:pig_iron_ingot_singularity")
    .displayName("生铁锭奇点");

  event
    .create("avaritia:etherealslate_singularity")
    .displayName("悬幽石板奇点");

  event
    .create("avaritia:magenta_matter_singularity")
    .displayName("Magenta Matter（等extendedexchange翻译）奇点");

  event
    .create("avaritia:source_gem_singularity")
    .displayName("魔源宝石奇点");

  event
    .create("avaritia:track_singularity")
    .displayName("列车轨道奇点");

  event
    .create("avaritia:uraninite_singularity")
    .displayName("晶质铀奇点");

  event.create("avaritia:wall_singularity").displayName("压缩空间壁奇点");
  event
    .create("avaritia:emerald_cluster_singularity")
    .displayName("Emerald Cluster（等buddingcrystals翻译）奇点");
  event
    .create("avaritia:xp_jelly_baby_singularity")
    .displayName("经验果冻宝宝奇点");
});

onEvent("block.registry", (event) => {
  event
    .create("ftbstoneblock:dust")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("尘土");
  event
    .create("ftbstoneblock:crushed_netherrack")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("粉碎的下界岩");
  event
    .create("ftbstoneblock:crushed_endstone")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("粉碎的末地石");
  event
    .create("ftbstoneblock:crushed_deepslate")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("粉碎的深板岩");

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
        .displayName(`${i}x 压缩${props.name}`);
    }
  }
});
