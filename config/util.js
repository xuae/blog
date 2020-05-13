module.exports = {
  /**
   * kebab-case 转 PascalCase
   * @param value
   * @returns {void | string | * | boolean | Promise | Promise<any>}
   */
  kebab2Pascal: (value) => {
    return value.replace(/-(\w)/g, function(all, letter) {
      return letter.toUpperCase();
    })
  }
}
