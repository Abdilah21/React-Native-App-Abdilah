import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {Checkbox} from 'native-base';

export default function MyCheckBox({rightText}) {
  const [groupValue, setGroupValue] = useState([]);

  return (
    <>
      <View style={styles.ViewCheckListStyle}>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          onChange={values => {
            setGroupValue(values || []);
          }}>
          <Checkbox>
            <Text style={styles.rightTextStyle}>{rightText}</Text>
          </Checkbox>
        </Checkbox.Group>
      </View>
    </>
  );
}
// const [groupValue, setGroupValue] = useState([]);
//   return (
//     <>
//       <View style={styles.ViewCheckListStyle}>
//         <Checkbox.Group
//           colorScheme="green"
//           defaultValue={groupValue}
//           onChange={values => {
//             setGroupValue(values || []);
//           }}>
//           <Checkbox>
//             <Text style={styles.rightTextStyle}>{rightText}</Text>
//           </Checkbox>
//         </Checkbox.Group>
//       </View>
//     </>
//   );
const styles = StyleSheet.create({
  ViewCheckListStyle: {
    marginBottom: 10,
    width: '50%',
  },
  ViewCheckListStyle2: {
    marginLeft: 180,
    bottom: 20,
  },
  TextListStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  rightTextStyle: {fontSize: 16, color: '#000'},
  GlobalView: {},
});
