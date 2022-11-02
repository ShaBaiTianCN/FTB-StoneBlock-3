// priority: 800
const teaEvent = {
  name: "ftbstoneblock:tea",
  chance: 0.1,
  execute(event, player, location) {
    player.tell(["[Server]: getting a cup of tea, don't break the game!"]);
  },
};
