import React from 'react'
import limited from './hoc/limited'

const field = (props: any): any => {
    return (
        <React.Fragment>
            <input type="text" {...props} />
            {props.value && <span>( {props.value.length} chars)</span>}
            <br />
        </React.Fragment>
    )
}

const SpecialField = limited(field)

export default SpecialField
