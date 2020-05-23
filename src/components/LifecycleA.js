import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishvas'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
            </div>
        )
    }
}

export default LifecycleA
