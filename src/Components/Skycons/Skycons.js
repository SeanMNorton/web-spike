import React from 'react'
import Skycons from 'react-skycons'

class Icon extends React.Component {

  render () {
    const iconName = this.props.iconName.toUpperCase().replace(/-/gi, '_')
    return (
      <Skycons color='black'
       icon={iconName}
       autoplay={true}
       style={{width: '20%', height: '20%'}}
        />
    )
  }
}

export default Icon
