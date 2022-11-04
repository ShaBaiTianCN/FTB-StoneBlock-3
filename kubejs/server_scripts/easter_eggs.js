onEvent("player.logged_in", (event) => {
  let player = event.player;

  //Birthdays
  let currentDate = new Date();
  let today =
    currentDate.getMonth() +
    1 + //[0,11] so +1
    "-" +
    currentDate.getDate(); //[0,31]
  //Syntax, max is [12-31]
  let birthdays = [
    ["Gaz", "3-9", "模组开发"],
    ["OfficialyMax", "3-10", "任务撰写员"],
    ["Dinnerbeef & UnRealDinnerbone", "6-8", "Alpha版测试"],
    ["Slowpoke101", "6-19", "总书记"],
    ["manmaed", "6-30", "Alpha版测试"],
    ["Loneztar", "7-15", "Beta团队主任"],
    ["Mikey", "10-11", "模组开发主任"],
    ["5ully_", "10-15", "Alpha版测试"],
    ["Sunekaer", "10-20", "整合包开发主任"],
    ["aaronhowser1", "12-2", "任务撰写员"],
  ];

  birthdays.forEach((birthday) => {
    let birthdayPerson = birthday[0];
    let birthdayDate = birthday[1];

    if (birthdayDate == today) {
      player.tell([
        Component.string("生日快乐，"),
        Component.string(birthdayPerson + "！")
          .underlined()
          .hover(Component.string(birthday[2])),
      ]);
    }
  });
});
