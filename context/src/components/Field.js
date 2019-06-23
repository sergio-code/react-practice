import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext

    render() {
        const labelName = this.context.language === 'dutch' ? 'Naam' : 'Name'
        return (
            <div className="ui field">
                <label>
                    {labelName}
                    <input type="text" />
                </label>
            </div>
        )
    }
}

export default Field
