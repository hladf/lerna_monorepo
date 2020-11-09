const path = require('path');

module.exports = {
  contextDependencies: [path.resolve(__dirname, 'src/components')],
  // usageMode: 'collapse',
  components: 'src/components/**/*component.tsx',
  moduleAliases: {
    root: path.resolve(__dirname, 'src'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap',
        },
      ],
    },
  },
};

// reademe.md doc example:
// https://github.com/styleguidist/react-styleguidist/blob/master/examples/basic/src/components/Button/Readme.md

