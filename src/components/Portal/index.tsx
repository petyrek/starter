import { Component, ReactNode } from "react"
import ReactDOM from "react-dom"

type PortalProps = {
  node?: HTMLElement
  children: ReactNode
}

export class Portal extends Component<PortalProps> {
  defaultNode: HTMLElement | null = null

  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
  }

  render() {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement("div")
      document.body.appendChild(this.defaultNode)
    }

    const node = this.props.node ?? this.defaultNode

    if (!node) return null

    return ReactDOM.createPortal(this.props.children, node)
  }
}
