import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

export default function Input({
  onChangeText,
  title,
  secure,
  icon,
  value,
  setValue,
  styler,
  placeholderr,
}) {
  return (
    <>
      <Text style={styles.butext}>{title}</Text>
      <View style={{width: '100%', paddingBottom: 20}}>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          style={styler}
          secureTextEntry={secure}
          placeholder={placeholderr}
          keyboardType="email-address"
        />
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            height: 18,
            width: 18,
            position: 'absolute',
            top: '30%',
            left: 10,
            tintColor: '#838383',
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  butext: {marginBottom: 10, color: '#000'},
});
