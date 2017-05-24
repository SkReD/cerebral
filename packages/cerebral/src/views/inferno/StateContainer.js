import Component from 'inferno-component'
import {createDummyController} from '../../utils'

class StateContainer extends Component {
  getChildContext () {
    return {
      controller: createDummyController(this.props.state, this.props.signals)
    }
  }
  render () {
    return this.props.children
  }
}

export default StateContainer