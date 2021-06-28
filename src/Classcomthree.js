import React from 'react'


export default class Classcomthree extends React.Component {
    render() {
        return <div>
            <h4> {this.props.text.name}
                - {this.props.data}
            </h4>
        </div>
    }
}