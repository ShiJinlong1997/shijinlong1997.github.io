Reflect.defineProperty(window, '$config', {
  get() {
    return {
      origin: 'https://shijinlong1997.github.io',
      repoList: [
        {
          name: 'purble-pairs',
          title: '记忆卡片',
        },
        {
          name: 'tetra',
          title: '俄罗斯方块',
        },
      ],
    };
  },
});
