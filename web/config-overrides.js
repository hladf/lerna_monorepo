// eslint-disable
const { override, disableEsLint, useEslintRc } = require('customize-cra');
const path = require('path');
const eslintConfig = require('./.eslintrc-webpack.json');
const { addReactRefresh } = require('customize-cra-react-refresh');

const env = process.env.NODE_ENV;
console.log('\nEnvironment:', env, '\n');


const useEslintConfig = (configRules) => (config) => {
  const updatedRules = config.module.rules.map((rule) => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (
      rule.use &&
      rule.use.some((use) => use.options && use.options.useEslintrc !== void 0)
    ) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules },
      };
      ruleUse.options = newOptions;
      return rule;

      // Rule not using eslint. Do not modify.
    } else {
      return rule;
    }
  });

  config.module.rules = updatedRules;
  return config;
};

const envs = {
  development: override(
    // Rascunhos de testes com o eslint, favor não apagar
    // useEslintConfig(eslintConfig),
    // useEslintRc(path.resolve(__dirname, '.eslintrc-webpack.json')),
    // disableEsLint(),
    addReactRefresh(),
  ),
  production: override(disableEsLint()),
};

module.exports = envs[env] || envs.production;
