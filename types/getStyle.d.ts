/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: Cody
 * @date: 2021-10-24
 */
declare const getStyle: (element: HTMLElement, styleName: keyof CSSStyleDeclaration) => string;
export default getStyle;
