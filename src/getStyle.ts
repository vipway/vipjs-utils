import camelCase from './camelCase'
/**
 * 获取节点的CSS属性的值
 * @param element {Object} 节点
 * @param styleName {String} 属性名字
 * @returns {*}
 * @author: Cody
 * @date: 2021-10-24
 */
const getStyle = (element: HTMLElement, styleName: keyof CSSStyleDeclaration): string => {
	if (!element || !styleName) return ''
	styleName = camelCase(styleName as string) as keyof CSSStyleDeclaration
	if (styleName === 'float') {
		styleName = 'cssFloat'
	}
	try {
		const computed = document['defaultView']!.getComputedStyle(element, '')
		return element.style[styleName] || computed ? computed[styleName] as string : ''
	} catch (e) {
		return element.style[styleName] as string
	}
}


export default getStyle
