import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'



const Button = ({ children, className, ...rest }: TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...rest} className={`p-1 bg-green-600 rounded-lg px-3 ${className}`}>
            <ThemedText className='text-center'>{children}</ThemedText>
        </TouchableOpacity>
    )
}

export default Button