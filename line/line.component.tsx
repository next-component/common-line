import * as React from 'react'
import * as typings from './line.type'

export default class Line extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div className="_namespace">
                线
            </div>
        )
    }
}
                