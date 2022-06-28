import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type EventCodeInputProps = {
    cellCount?: number | undefined
    onSelect: (code: string) => void
}

const EventCodeInput = (props: EventCodeInputProps) => {
    const cellCount = props.cellCount || 6
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount });
    const [nativeProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const setValueCallback = (value: string) => {
        if (value.length === cellCount) props.onSelect(value)

        setValue(value)
    }

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...nativeProps}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValueCallback}
                cellCount={cellCount}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        textAlign: 'center',
        margin: 2,
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default EventCodeInput;