import { visit, SKIP } from 'unist-util-visit'
import type { Node, Parent } from 'unist'
import type { Element, Properties } from 'hast'

export default function rehypeTableWrapper() {
	return (tree: Node) => {
		visit(tree, 'element', (node: Node, index: number | null, parent: Parent | null) => {
			const element = node as Element
			if (!parent || index === null || index === undefined || element.tagName !== 'table') {
				return
			}
			const wrapper: Element = {
				type: 'element',
				tagName: 'div',
				properties: {
					className: ['overflow-x-auto'],
				} as Properties,
				children: [element],
			}
			parent.children[index] = wrapper
			return SKIP
		})
	}
}
