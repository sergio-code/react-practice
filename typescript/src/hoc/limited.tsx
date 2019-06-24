import React from 'react'

const initialState = {
    text: '',
    charsCount: 0
}

type State = Readonly<typeof initialState>

interface IProps {
    maxLength?: number
    text?: string
}

interface IOnChange {
    (event: React.ChangeEvent<HTMLInputElement>): void
}

const limited = (WrappedComponent: any) => {
    class WrappedField extends React.Component<IProps, State> {
        constructor(props: IProps) {
            super(props)
            if (props.text) {
                initialState.text = props.text
                initialState.charsCount = props.text.length
            }
        }

        readonly state: State = initialState

        handleOnChange: IOnChange = (event) => {
            event.preventDefault()
            const { value } = event.target
            const newState: State = { text: value, charsCount: value.length }
            this.setState(newState)
        }

        verifyLength = (): string | JSX.Element | void => {
            const length = this.state.text.length
            const maxLength = this.props.maxLength || 50
            if (length <= maxLength && maxLength - length <= 10) {
                return `${maxLength - length} chars left`
            }

            if (length > maxLength) {
                const message = `${length -
                    maxLength} chars over ${maxLength} in current field`
                return <b>{message}</b>
            }
        }

        render() {
            return (
                <React.Fragment>
                    <WrappedComponent
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    />
                    {this.verifyLength()}
                </React.Fragment>
            )
        }
    }

    return WrappedField
}

export default limited
