onEvent('rei.information', (event) => {
	event.addItem(['ftbstoneblock:stonepebble'], 'Pebbles', [
			'空手破坏石头以获得圆石石子。',
	])
	event.addItem('ftbstoneblock:mob_soul', 'Souls', [
			'在怪物死亡时有80%的概率掉落。',
	])
	event.addItem('ftbstoneblock:ritual_starter', 'Rituals', [
			'能够在末地建筑中找到。',
	])
	event.addItem(
			'ftbstoneblock:cold_silverfish_shard',
			'Cold Silverfish Shard',
			['可在石头区域的地牢中找到。']
	)
	event.addItem(
			'ftbstoneblock:warm_silverfish_shard',
			'Warm Silverfish Shard',
			['可在地狱区域的地牢中找到。']
	)
	event.addItem(
			'ftbstoneblock:silverfish_heart',
			'Silverfish Heart',
			[
					'由蠹虫妈妈掉落',
					' ',
					'在末地环中的Boss地牢中生成'
			]
	)

	event.addItem(
			'mob_grinding_utils:mob_swab_used',
			'Used Mob Swab',
			[
					'对一个怪物使用怪物棉签。'
			]
	)

	event.addItem(
			'mob_grinding_utils:golden_egg',
			'Golden Egg',
			[
					'给鸡喂食营养丰富鸡饲料。'
			]
	)

	event.addItem(
			'mob_grinding_utils:gm_chicken_feed_cursed',
			'GM Chicken Feed Cursed',
			[
					'给鸡喂食GM鸡饲料。'
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
					'虽然通常是生物群系特有的，但它们被设置为像其它动物一样在平原上生成',
					' ',
					'在破旧的笔记本中查看更多信息'
			]
	)

	event.addItem('bloodmagic:weak_tau',
			'Weak Tau',
			[
					'可以在恶魔领域中找到（请查阅血染知书中的“The Antechamber”）',
					' ',
					'可以在耕地上种植',
			]
	)

	event.addItem('bloodmagic:strong_tau',
			'Strong Tau',
			[
					'可以在恶魔领域中稀有地找到（请查阅血染知书中的“The Antechamber”）',
					' ',
					'如果普通血命果生长时在它上面杀死一只动物，它会长成饱满血命果',
			]
	)
})
