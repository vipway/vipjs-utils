module.exports = {
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2020,
    impliedStrict: true,
    sourceType: 'module',
    parser: 'babel-eslint',
  },

  env: {
    'browser': true,
    'node': true,
    'commonjs': true
  },
  /**
   * 规则的含义：
   * off or 0 - 关闭(禁用)规则 
   * warn or 1 - 将规则视为一个警告（并不会导致检查不通过） 
   * error or 2 - 将规则视为一个错误 (退出码为1，检查不通过) 
   */
  rules: {
    'import/no-unresolved': 'off',
    'quotes': ['error', 'single'], // 强制使用一致的单引号 
    'indent': ['error', 2], // 强制使用一致的缩进
    'interface-name': 'off', // 接口名要求大写开头
    'ordered-imports': 'off', // 要求将import语句按字母顺序排列并进行分组。
    'object-literal-sort-keys': 'off', // 检查对象文字中键的排序。
    'no-consecutive-blank-lines': 'off', // 不允许连续出现一个或多个空行
    'no-namespace': 'off', // 不允许使用内部modules和命名空间
    'no-param-reassign': 0, // 不允许对 function 的参数进行重新赋值
    'arrow-parens': 0, // 箭头函数定义的参数需要括号
    'linebreak-style': 0, // 强制使用一致的换行风格 
    'semi': ['error', 'never'], // 不使用分号
    'no-underscore-dangle': 0, // 允许在标识符中使用下划线
    'no-restricted-imports': 0, // 禁用特定的 import
    'prefer-destructuring': ['error', {
      'object': true,
      'array': false
    }],
    'prefer-promise-reject-errors': 0,
    'func-names': 0, // 强制使用命名的 function 表达式 
    'no-console': 0, // 禁用console 
    'no-prototype-builtins': 0, // 禁止直接使用Object.prototypes 的内置属性 
    'no-return-assign': 0, // 禁止在 return 语句中使用赋值语句
    'import/extensions': 'off', // 取消对文件扩展名的验证
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号：不允许逗号
    'lines-between-class-members': 0,
    'arrow-body-style': 'off',
    'no-extra-boolean-cast': 0, // 禁止不必要的布尔转换
    'no-extra-semi': 0, // 禁止不必要的分号 
    'no-lonely-if': 0, // 不允许将if语句作为else块中的唯一语句
    'no-restricted-syntax': 0,
    'no-restricted-globals': 0, // 禁用特定的全局变量 
    'no-useless-escape': 0, // 转义字符串
    'no-plusplus': 0, // 禁止使用一元操作符 ++ 和 –,
    'guard-for-in': 0, // 要求 for-in 循环中有一个 if 语句
    'default-param-last': 0, // 数有默认值的参数必须在最后
    'no-nested-ternary': 0, // 
    'operator-linebreak': 0, // 强制操作符使用一致的换行符
    'consistent-return': 0 , // 一致性的返回
  }
}