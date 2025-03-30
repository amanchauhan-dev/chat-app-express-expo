import { View, type ViewProps } from 'react-native';


export function ScreenView({ className, ...otherProps }: ViewProps) {
    // { backgroundColor }
    return <View className={'px-5 ' + className} {...otherProps} />;
}
