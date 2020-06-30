module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-undef': 2, // 禁用未声明的变量
    'no-unused-vars': 1, // 不建议出现未使用过的变量
    'no-mixed-spaces-and-tabs': 2, // 禁止使用空格和tab混合缩进
    'no-this-before-super': 2, // 禁止在调用super()之前使用this或super
    'no-const-assign': 2, // 禁止改变用const声明的变量
    'no-var': 1 // 建议使用let或const
  }
}
