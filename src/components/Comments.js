import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Comments({
  Avatar,
  Stars,
  TextName,
  TextDate,
  TextComment,
}) {
  return (
    <View style={styles.CommentViewStyle}>
      <View style={styles.FlexDirectionStyle2}>
        <Image source={Avatar} style={styles.AvatarImgStyle} />

        <View style={styles.StarStyle2}>
          <Image source={Stars} style={styles.SmallImgStyle2} />
          <Image source={Stars} style={styles.SmallImgStyle2} />
          <Image source={Stars} style={styles.SmallImgStyle2} />
          <Image source={Stars} style={styles.SmallImgStyle2} />
          <Image source={Stars} style={styles.SmallImgStyle2} />
        </View>
      </View>

      <View style={styles.CommentTopViewStyle2}>
        <Text style={styles.NameTextStyle}>{TextName}</Text>
        <Text style={styles.DateTextStyle}>{TextDate}</Text>
      </View>
      <Text style={styles.CommentTextStyle}>{TextComment}</Text>
    </View>
  );
}

{
  /* <View style={styles.CommentViewStyle}>
<View style={styles.FlexDirectionStyle2}>
  <Image source={item?.Avatar} style={styles.AvatarImgStyle} />

  <View style={styles.StarStyle2}>
    <Image source={item?.Stars} style={styles.SmallImgStyle2} />
    <Image source={item?.Stars} style={styles.SmallImgStyle2} />
    <Image source={item?.Stars} style={styles.SmallImgStyle2} />
    <Image source={item?.Stars} style={styles.SmallImgStyle2} />
    <Image source={item?.Stars} style={styles.SmallImgStyle2} />
  </View>
</View>

<View style={styles.CommentTopViewStyle2}>
  <Text style={styles.NameTextStyle}>{item?.name}</Text>
  <Text style={styles.DateTextStyle}>{item?.date}</Text>
</View>
<Text style={styles.CommentTextStyle}>{item?.comment}</Text>
</View> */
}
const styles = StyleSheet.create({
  CommentViewStyle: {
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  FlexDirectionStyle2: {
    flexDirection: 'row',
  },
  AvatarImgStyle: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  StarStyle2: {
    flexDirection: 'row',
    left: 8,
  },
  SmallImgStyle2: {
    height: 16,
    width: 16,
    tintColor: '#ffc108',
  },
  CommentTopViewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 20,
  },
  NameTextStyle: {fontSize: 16, left: 22, color: '#000'},
  DateTextStyle: {
    fontSize: 12,
    marginLeft: 10,
    color: '#838383',
    alignSelf: 'center',
  },
  CommentTextStyle: {
    fontSize: 12,
    bottom: 10,
    color: '#838383',
    marginLeft: 50,
  },
});
