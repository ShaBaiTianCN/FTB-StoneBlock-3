onEvent('rei.information', (event) => {
	event.addItem(['ftbstoneblock:stonepebble'], 'Pebbles', [
		'Break Stone with your hand to get Stone Pebbles',
	])
	event.addItem('ftbstoneblock:mob_soul', 'Souls', [
		'Has an 80% chance of spawning every time a mob dies.',
	])
	event.addItem('ftbstoneblock:ritual_starter', 'Rituals', [
		'Can be found in End City structures.',
	])
	event.addItem(
		'ftbstoneblock:cold_silverfish_shard',
		'Cold Silverfish Shard',
		['Can be found in dungeons in the stone area.']
	)
	event.addItem(
		'ftbstoneblock:warm_silverfish_shard',
		'Warm Silverfish Shard',
		['Can be found in dungeons in the nether area.']
	)
	event.addItem(
		'ftbstoneblock:silverfish_heart',
		'Silverfish Heart',
		[
			'Drops from the Mother Silverfish',
			' ',
			'Summon in the Boss Dungeon beyond the End Ring'
		]
	)

	event.addItem(
		'mob_grinding_utils:mob_swab_used',
		'Used Mob Swab',
		[
			'Use a Mob Swab on a mob'
		]
	)

	event.addItem(
		'mob_grinding_utils:golden_egg',
		'Golden Egg',
		[
			'Feed Nutritious Chicken Feed to a Chicken'
		]
	)

	event.addItem(
		'mob_grinding_utils:gm_chicken_feed_cursed',
		'GM Chicken Feed Cursed',
		[
			'Feed GM Chicken Feed Cursed to a Chicken'
		]
	)
	
	event.addItem(
		[
			'ars_nouveau:starbuncle_shards',
			'ars_nouveau:whirlisprig_shards',
			'ars_nouveau:drygmy_shard'
		],
		'Ars Shards',
		[
			'While normally biome-specific, they\'ve been set to spawn in Plains like other animals',
			' ',
			'See the Worn Notebook for more information'
		]
	)

	event.addItem('bloodmagic:weak_tau',
		'Weak Tau',
		[
			'Found in Simple Dungeons (see "The Antechamber" in the Sanguine Scientem)',
			' ',
			'Can be farmed on Farmland',
		]
	)

	event.addItem('bloodmagic:strong_tau',
		'Strong Tau',
		[
			'Can be rarely found in Simple Dungeons (see "The Antechamber" in the Sanguine Scientem)',
			' ',
			'If normal Tau Fruit grows while an animal is standing on top, it grows into Saturated Tau instead',
		]
	)
})
