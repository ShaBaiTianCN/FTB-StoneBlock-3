// onEvent('item.tooltip', (tooltip) => {
// 	tooltip.add('ftbstoneblock:machines', [
// 		'lmao yeah right',
// 		"there's like a million machines",
// 		"ain't no way we're tagging them all",
// 	])
// })

onEvent("item.tooltip", (tooltip) => {
  tooltip.add(
    ["ae2:inscriber", "ae2things:advanced_inscriber"],
    [
      Text.red(
        "压印器已被禁用，取而代之的是机械动力的序列组装。"
      ),
      Text.red(
        "如果您已经有一个了，它可以继续工作，但是您不能再制造新的了。"
      ),
    ]
  );
});
