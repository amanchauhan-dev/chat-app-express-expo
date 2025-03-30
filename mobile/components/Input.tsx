import { TextInput, TextInputProps, View } from "react-native"


interface InputProps extends TextInputProps {
    preChild?: React.ReactNode;
    postChild?: React.ReactNode;
}

export const Input = ({ postChild = <></>, preChild = <></>, placeholderTextColor = 'white', ...rest }: InputProps) => {
    return (
        <View className={` px-2 justify-center items-center  rounded-lg overflow-hidden flex flex-row `} style={[{
            borderWidth: 2,
            borderColor: '#27272a'
        }]}>
            {preChild}
            <TextInput
                className="flex-1 !text-white"
                placeholderTextColor={placeholderTextColor}
                {...rest}
            />
            {postChild}
        </View>
    )
}