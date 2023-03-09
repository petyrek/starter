import { ErrorDetail } from "./ErrorDetail"
import { Component, ReactNode } from "react"

type Props = {
  children: ReactNode
}

type State = {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  componentDidCatch(e: Error) {
    this.setState({ error: e })
  }

  render() {
    if (this.state.error) {
      return <ErrorDetail error={this.state.error} />
    }

    return this.props.children
  }
}
