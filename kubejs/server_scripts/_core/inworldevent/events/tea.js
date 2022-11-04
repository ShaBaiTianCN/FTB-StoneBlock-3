// priority: 800
const teaEvent = {
  name: "ftbstoneblock:tea",
  chance: 0.1,
  execute(event, player, location) {
    player.tell(["[服务器]：喝杯茶，不要暂停游戏！"]);
  },
};
