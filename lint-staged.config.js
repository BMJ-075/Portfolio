/* eslint-env node */
const formatCommand = 'prettier . --check';

export const config = {
  '*': formatCommand,
};

export default config;
