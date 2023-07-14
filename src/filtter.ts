/**
 * @description 类型解释
 * @param value 关键字
 * @param options 类型
 * @param v 匹配的关键字
 * @param l 返回的字段
 * @returns {string|*}
 */
const paraphrase = (
  value: string | number,
  options: any[] = [],
  v = 'value',
  l = 'label'
): string => {
  const newData = options.filter(x => {
    return x[v] === value
  })
  if (newData.length > 0) {
    return newData[0][l]
  }
  return ''
}

export default paraphrase;
