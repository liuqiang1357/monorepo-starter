export default {
  '*': 'prettier --check --ignore-unknown',
  '*.?(c|m)[jt]s?(x)': 'eslint --max-warnings 0 --no-warn-ignored',
};
