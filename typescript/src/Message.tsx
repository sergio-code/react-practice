import React from 'react'

interface IUserMessage {
    name?: string
    message: string
}

const Message = (props: IUserMessage): JSX.Element => {
    return (
        <p>
            {props.name}, {props.message}
        </p>
    )
}

export default Message
