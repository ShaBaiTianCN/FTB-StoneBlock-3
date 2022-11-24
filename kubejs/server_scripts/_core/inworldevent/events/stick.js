// priority: 800
const stickEvent = {
  name: "ftbstoneblock:stick",
  chance: 0.2,
  names: [
    "你有没有觉得自己像个塑料袋？",
    "斯迪克然 - 它想和您的领导谈谈",
    "我是根木棍，你也是个棍！",
    "分支 - 抓住根木棍",
    "诚实之棍",
    "谎言之棍",
    "木棍光年 - 无限的树和星辰大海！",
    "我不是树根",
    "照亮人生而不是照亮前路",
    "最粘的粘性棍子",
    "不知道我从哪来的？我也不知道！",
    "我想从树木学校退学，但是他们说我不能翻叶！",
    "我的树皮比我的皮还差",
    "残年之树：浇水即可",
    "列夫斯基托夫之棍",
    "用途广泛，可以在任何地方棍动！",
    "幸运的倒霉棒",
    "神圣的占卜之棍 - 剩余 0 次",
    "训练中的树",
    "Loneztar 的测试棒",
    "Slowpoke101 不想要我",
  ],
  execute(event, player, location) {
    player.tell([`这有根木棍！ :hearts:`]);
    let chosenName = this.names[Math.floor(Math.random() * this.names.length)];
    player.give(
      Item.of("minecraft:stick", {
        RepairCost: 0,
        display: { Name: '{"text":"' + chosenName + '"}' },
      })
    );
  },
};
