import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Container} from 'native-base';
import CheckBox from 'react-native-check-box';

import PropertyCardHorizontal from '../src/components/PropertyCardHorizontal';
import Comments from '../src/components/Comments';
import Input from '../src/components/Input';
import MyCheckBox from '../src/components/MyCheckBox';
import Share from 'react-native-share';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PrpertiesDetails({navigation, item, props}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState([]);

  const arr = [
    {name: 'Baicony', id: 1},
    {name: 'Security', id: 2},
    {name: 'Quite', id: 3},
    {name: 'Gym', id: 4},
    {name: 'Libraries', id: 5},
    {name: 'Parkings', id: 6},
    {name: 'alevators', id: 7},
    {name: 'CleaningServieces', id: 8},
    {name: 'SecurityGuard', id: 9},
    {name: 'InternetServieces', id: 10},
  ];

  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  const Sharee = async () => {
    const options = {
      message: 'This is a test text',
    };
    try {
      const res = await Share.open(options);
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + ' / ' + month + ' / ' + year; //format: d-m-y;
  };
  const data = [
    {
      name: 'Mohammed Ali',
      date: new Date().toLocaleString(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/London.jpg'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Ahmed Mohammed',
      date: new Date().toDateString(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/Duabi.png'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Abdulelah Bader',
      date: new Date().toLocaleDateString(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Mohammed Ali',
      date: getCurrentDate(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/London.jpg'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Abdulelah Bader',
      date: getCurrentDate(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Ahmed Mohammed',
      date: getCurrentDate(),
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/Duabi.png'),
      Stars: require('../src/assets/Images/star.png'),
    },
  ];

  const dataHead = [
    {
      name2: 'First card',
      location: 'Egypt',
      beds: 6,
      bath: 2,
      dis: 210,
      pic: require('../src/assets/Images/homBanner.png'),
    },
  ];

  // const data1 = [
  //   {
  //     name: 'Mohammed Ali',
  //     date: new Date().toLocaleString(),
  //     comment: (
  //       <View style={{width: '100%', height: 50}}>
  //         <TextInput style={styles.TextInputCommentStyle} />
  //       </View>
  //     ),

  //     Avatar: require('../src/assets/Images/London.jpg'),
  //     Stars: require('../src/assets/Images/star.png'),
  //   },
  // ];
  return (
    <Container style={styles.ContainerStyle}>
      <ScrollView style={styles.ContainerStyle} bounces={false}>
        {/*================================head=========================*/}

        <View style={styles.HeadView}>
          <ScrollView style={styles.bg2} horizontal bounces={false}>
            <ImageBackground
              source={require('../src/assets/Images/homBanner.png')}
              style={styles.bg}></ImageBackground>
            <ImageBackground
              source={require('../src/assets/Images/stencil.blog-post-feature-15.jpg.webp')}
              style={styles.bg}></ImageBackground>

            <ImageBackground
              source={require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp')}
              style={styles.bg}></ImageBackground>
          </ScrollView>

          <View style={styles.TopHeadView}>
            <Text style={styles.ProprtiesDetailsStyle}>PrpertiesDetails</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home1');
              }}>
              <Image
                style={styles.BackStyle1}
                source={require('../src/assets/Images/back.png')}
              />
            </TouchableOpacity>
            <View style={styles.TopRightImgStyle}>
              <View style={styles.ViewHeadImgStyle}>
                <TouchableOpacity onPress={() => Sharee()}>
                  <Image
                    style={styles.ShareStyle}
                    source={require('../src/assets/Images/share.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ViewHeadImgStyle}>
                <Image
                  style={styles.HartStyle}
                  source={require('../src/assets/Images/harticon.png')}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/*================================head=========================*/}

        {/*==========================Middle======================================*/}

        {dataHead.map((item, key) => (
          <View style={styles.PropertyCardHorizontalStyle}>
            <View style={styles.BigContainers}>
              <View style={{justifyContent: 'space-around'}}>
                <View style={styles.ViewCardTextStyle}>
                  <Text style={styles.BigContainersText}>{item?.name2}</Text>
                  <View style={styles.RateNumStyle}>
                    <Text style={styles.DetailsTextStyle}>4.9</Text>
                    <Image
                      source={require('../src/assets/Images/star.png')}
                      style={styles.LittleImagesStyle}
                    />
                  </View>
                </View>

                <View style={styles.ViewCardTextStyle2}>
                  <Image
                    style={styles.LittleImagesStyle}
                    source={require('../src/assets/Images/location.png')}
                  />
                  <Text
                    style={{color: '#838383', fontSize: 15, marginLeft: 10}}>
                    {item?.location}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 6,
                  }}>
                  <Image
                    style={{
                      height: 18,
                      width: 18,
                      marginRight: 4,
                      tintColor: '#838383',
                    }}
                    source={require('../src/assets/Images/bed.png')}
                  />
                  <Text
                    style={{color: '#838383', fontSize: 15, marginRight: 20}}>
                    {item?.beds} Beds
                  </Text>
                  <Image
                    style={{
                      height: 18,
                      width: 18,
                      marginRight: 4,
                      tintColor: '#838383',
                    }}
                    source={require('../src/assets/Images/bath.png')}
                  />
                  <Text
                    style={{color: '#838383', fontSize: 15, marginRight: 20}}>
                    {item?.bath} Bath
                  </Text>
                  <Image
                    style={{
                      height: 18,
                      width: 18,
                      marginRight: 4,
                      tintColor: '#838383',
                    }}
                    source={require('../src/assets/Images/length.png')}
                  />
                  <Text
                    style={{color: '#838383', fontSize: 15, marginRight: 20}}>
                    {item?.dis} m
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.DescriptionContainer}>
          <Text style={styles.HeadText}>Description</Text>
          <Text style={styles.DescriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error
            asperiores quod tempore repellendus consequatur aliquid quam debitis
            mollitia sunt nam praesentium, hic iusto ipsum libero. Eius illum
            sed doloribus deserunt corporis id exercitationem magnam. Quidem,
            perferendis perspiciatis. Quod, unde commodi illum a cupiditate
            ullam doloremque iusto in recusandae quam, fugit possimus laudantium
            cum voluptates reprehenderit accusamus totam dignissimos
            exercitationem esse delectus. Delectus et, nesciunt accusantium rem
            doloremque repudiandae necessitatibus eius totam magnam nisi,
            laborum autem quas officiis molestiae laudantium impedit.
            Perferendis, doloribus quae porro corrupti, ipsa quos praesentium
            id, vel animi esse eum repellat nostrum aut ullam. Aut, dolores.
          </Text>
        </View>

        <View style={styles.DestailsContainer}>
          <Text style={styles.HeadText}>Details & Features</Text>

          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsTextStyle}>Bedrooms</Text>
            <View style={styles.TextViewStyle3}>
              <Text style={styles.DescriptionText2}>4 Beds</Text>
            </View>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsTextStyle}>Floors</Text>
            <View style={styles.TextViewStyle3}>
              <Text style={styles.DescriptionText2}>2</Text>
            </View>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsTextStyle}>Bathrooms</Text>
            <View style={styles.TextViewStyle3}>
              <Text style={styles.DescriptionText2}>4 Baths</Text>
            </View>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsTextStyle}>Square</Text>
            <View style={styles.TextViewStyle3}>
              <Text style={styles.DescriptionText2}>240m</Text>
            </View>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsTextStyle}>Property type</Text>
            <View style={styles.TextViewStyle3}>
              <Text style={styles.DescriptionText2}>Commercial</Text>
            </View>
          </View>
        </View>

        <View style={styles.AmenitiesContainer}>
          <Text style={styles.HeadText}>Amenities</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {arr.map((item, key) => (
              <MyCheckBox rightText={item?.name} />
            ))}
          </View>
        </View>
        <View style={styles.ReviewsContainer}>
          <Text style={styles.HeadText}>Reviews</Text>
          <View style={styles.ReviewTextViewStyle}>
            <View style={styles.ReviewTopViewStyle}>
              <Text style={styles.ReviewNumStyle}>4.5</Text>
              <View style={styles.StarStyle}>
                <Image
                  source={require('../src/assets/Images/star.png')}
                  style={styles.SmallImgStyle}
                />
                <Image
                  source={require('../src/assets/Images/star.png')}
                  style={styles.SmallImgStyle}
                />
                <Image
                  source={require('../src/assets/Images/star.png')}
                  style={styles.SmallImgStyle}
                />
                <Image
                  source={require('../src/assets/Images/star.png')}
                  style={styles.SmallImgStyle}
                />
                <Image
                  source={require('../src/assets/Images/star.png')}
                  style={styles.SmallImgStyle}
                />
              </View>
            </View>
            <View style={styles.ReviewTopViewStyle}>
              <Text style={styles.ReviewSmallTextStyle}>out of 5.0</Text>
              <Text style={styles.ReviewSmallTextStyle}>
                60 reviews on the product
              </Text>
            </View>
            <Pressable
              style={styles.Addbutton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.TextAddButtonStyle}>Add a review</Text>
            </Pressable>
          </View>

          <View style={styles.ServicesViewStyle2}>
            <Text style={styles.ServicesTextStyle}>Services</Text>
            <Text style={styles.ServicesTextStyle}>Location</Text>
          </View>

          <View style={styles.ServicesViewStyle}>
            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>
            <View style={styles.Num3ViewStyle}>
              <Text style={styles.Num3Style}>3</Text>
            </View>

            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>

            <View style={styles.Num3ViewStyle}>
              <Text style={styles.Num3Style}>3</Text>
            </View>
          </View>

          <View style={styles.ValueViewStyle}>
            <Text style={styles.ValueTextStyle}>Value For Money</Text>
            <Text style={styles.ServicesTextStyle}>Cleanliness</Text>
          </View>

          <View style={styles.ServicesViewStyle}>
            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>
            <View style={styles.Num3ViewStyle}>
              <Text style={styles.Num3Style}>3</Text>
            </View>

            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>

            <View style={styles.Num3ViewStyle}>
              <Text style={styles.Num3Style}>3</Text>
            </View>
          </View>

          <View style={styles.Cutter}></View>
          {data.map(item => (
            <Comments
              Avatar={item?.Avatar}
              Stars={item?.Stars}
              TextName={item?.name}
              TextDate={item?.date}
              TextComment={item?.comment}
            />
          ))}

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.TextInputCommentStyle}
                    placeholder="Enter your comment"
                    multiline={true}
                    value={value}
                    onChangeText={newValue => setValue(newValue)}></TextInput>
                  <Pressable
                    style={styles.Modalbutton}
                    onPress={() => {
                      setReviews(reviews => [
                        ...reviews,
                        {
                          name: 'New Comment',
                          date: new Date().toLocaleString(),
                          comment: value,
                          Avatar: require('../src/assets/Images/London.jpg'),
                          Stars: require('../src/assets/Images/star.png'),
                        },
                      ]),
                        setModalVisible(false);
                    }}>
                    <Text style={styles.TextButtonStyle}>Send</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          {reviews.map((item, key) => (
            <Comments
              Avatar={item?.Avatar}
              Stars={item?.Stars}
              TextName={item?.name}
              TextDate={item?.date}
              TextComment={item?.comment}
            />
          ))}

          <View style={styles.FlexDirectionStyle}>
            <Pressable
              style={styles.Modalbutton}
              onPress={() => {
                navigation.navigate('Signature');
              }}>
              <Text style={styles.TextButtonStyle}>Signature</Text>
            </Pressable>

            <Pressable
              style={styles.Modalbutton}
              onPress={() => {
                navigation.navigate('WebScreen');
              }}>
              <Text style={styles.TextButtonStyle}>Browse Website</Text>
            </Pressable>
          </View>
        </View>

        {/*==========================Middle======================================*/}
        {/*==========================Bottom======================================*/}

        {/*==========================Bottom======================================*/}
      </ScrollView>
      <View style={styles.bottomstyle}>
        <View
          style={{
            justifyContent: 'space-around',
            margin: 25,
          }}>
          <Text style={styles.PriceTextStyle}>Price</Text>
          <Text style={styles.PriceStyle}>EGB 1500,00</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home1', {name: 'Ahmed SABRY'});
            }}
            style={styles.button}>
            <Text style={styles.TextButtonStyle}>Send message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  ViewCheckListStyle3: {
    marginLeft: 180,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 0.21,
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  BigContainers: {
    height: 150,
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    marginTop: 6,
    flexDirection: 'row',
  },
  BigContainersText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },

  /*=======================*/
  TextInputCommentStyle: {
    paddingHorizontal: 30,
    width: '100%',
    color: '#838383',
    borderRadius: 15,
    height: 120,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ContainerStyle: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#f9f9f9',
  },
  bg: {height: windowHeight / 2.4, width: windowWidth},
  bg2: {height: windowHeight / 2.4, width: windowWidth, position: 'absolute'},

  TopHeadView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 60,
    alignSelf: 'center',
    left: 70,
  },

  ProprtiesDetailsStyle: {color: '#fff', fontSize: 20, alignSelf: 'center'},

  HeadView: {
    justifyContent: 'flex-start',

    alignSelf: 'flex-start',
  },

  PropertyCardHorizontalStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 330,
  },
  ViewCardTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
  },
  ViewCardTextStyle2: {flexDirection: 'row', marginHorizontal: 6},
  RateNumStyle: {flexDirection: 'row', left: 90},
  LittleImagesStyle: {height: 18, width: 18},
  FlexDirectionStyle: {
    flexDirection: 'row',
  },

  TopRightImgStyle: {left: 70, flexDirection: 'row'},
  BackStyle1: {
    height: 12,
    width: 12,
    right: 200,
    tintColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  ViewHeadImgStyle: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  HartStyle: {
    height: 25,
    width: 25,

    tintColor: '#838383',
    alignSelf: 'center',
  },
  ShareStyle: {
    height: 22,
    width: 22,
    tintColor: '#838383',
    alignSelf: 'center',
  },
  DescriptionContainer: {
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    marginTop: 340,
  },
  DescriptionText: {color: '#838383'},
  DescriptionText2: {color: '#838383'},
  HeadText: {fontSize: 16, fontWeight: '600', paddingBottom: 20, color: '#000'},
  DestailsContainer: {
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  DetailsTextStyle: {color: '#000'},

  ViewCheckListStyle: {
    flexDirection: 'row',
  },
  ViewCheckListStyle2: {
    flexDirection: 'row',
  },
  ViewSingleCheckListStyle: {
    height: 40,
    width: 140,

    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ADF9A9',
    borderColor: '#83EB7D',
    borderWidth: 2,
  },

  ViewBigSingleCheckListStyle: {
    height: 40,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ADF9A9',
    borderColor: '#83EB7D',
    borderWidth: 2,
  },
  TextListStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    alignSelf: 'center',
    color: '#000',
  },

  AmenitiesContainer: {
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  AmenitiesImgStyle: {
    height: 20,
    width: 20,
    marginRight: 10,
    tintColor: 'green',
  },
  TextViewStyle: {
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
    padding: 20,
  },
  TextViewStyle3: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    left: 180,
  },

  ViewDetailsTypeStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    left: 70,
  },

  AmenitiesTextStyle: {marginRight: 10},

  ReviewsContainer: {
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  ReviewTextViewStyle: {
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 10,
  },
  ReviewNumStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  SmallImgStyle: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    tintColor: '#ffc108',
  },
  StarStyle: {
    flexDirection: 'row',
  },

  ReviewSmallTextStyle: {color: '#838383'},
  ReviewTopViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  ServicesViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  ServicesViewStyle2: {
    flexDirection: 'row',
    right: 50,
    marginTop: 10,
    justifyContent: 'space-around',
  },

  ValueViewStyle: {
    flexDirection: 'row',
    right: 50,
    marginTop: 10,
    justifyContent: 'space-around',
  },

  SliderViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  BrownBar: {
    height: 5,
    width: '30%',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
  GreenBar: {
    height: 5,
    width: '50%',
    backgroundColor: '#10ca98',
    borderRadius: 20,
  },

  Cutter: {
    backgroundColor: '#f9f9f9',
    alignSelf: 'center',
    height: 7,
    width: '95%',
    marginBottom: 20,
    marginTop: 30,
  },
  TextViewStyle2: {
    backgroundColor: '#f9f9f9',
    borderRadius: 7,
    borderColor: '#838383',
    borderWidth: 1,
  },

  ServicesTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  ValueTextStyle: {
    fontSize: 16,
    left: 20,
    color: '#000',
  },

  Num3Style: {
    color: '#838383',
    fontSize: 12,
    borderRadius: 10,
  },
  Num3ViewStyle: {
    backgroundColor: '#f9f9f9',
    padding: 6,
    borderRadius: 10,
    bottom: 20,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },

  CommentViewStyle: {
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  SmallImgStyle2: {
    height: 16,
    width: 16,
    tintColor: '#ffc108',
  },

  AvatarImgStyle: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  CommentTopViewStyle: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
  },
  CommentTopViewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 20,
  },
  NameTextStyle: {fontSize: 16, left: 22},
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
  StarStyle2: {
    flexDirection: 'row',
    left: 8,
  },
  FlexDirectionStyle2: {
    flexDirection: 'row',
  },

  ModalFirstViewStyle: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
  },
  ModalSecondViewStyle: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    borderRadius: 30,
    flex: 0.3,

    justifyContent: 'center',
  },

  xStyle: {
    height: 12,
    width: 12,
    bottom: 20,
    tintColor: '#000',
    borderRadius: 10,
    padding: 15,
  },
  //========================bottom================================
  bottomstyle: {
    width: '130%',
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 90,
  },

  button: {
    backgroundColor: '#0d77d0',
    borderRadius: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    right: 20,
  },
  Addbutton: {
    backgroundColor: '#fff',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  TextButtonStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  TextAddButtonStyle: {alignSelf: 'center', fontSize: 20, color: '#000'},
  PriceTextStyle: {
    fontSize: 16,
    color: '#838383',
    marginBottom: 5,
  },
  PriceStyle: {
    fontSize: 20,
    fontWeight: '600',
    top: 20,
    color: '#000',
  },

  AddCommentButtonStyle: {
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#0d77d0',
    borderStyle: 'dashed',
  },
  AddCommentTextStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#0d77d0',
    fontWeight: '500',
  },
  Modalbutton: {
    backgroundColor: '#0d77d0',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    marginTop: 20,
    marginRight: 5,
  },
});

{
  /*
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.CommentViewStyle}>
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
              </View>
            )}
          />
            */
}

{
  /* <View style={styles.ServicesViewStyle}>
            <Text style={styles.ServicesTextStyle}>services</Text>
            <View style={styles.SliderViewStyle}>
              <View style={styles.BrownBar}>
                <View style={styles.GreenBar}></View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.Num3ViewStyle}>
                  <Text style={styles.Num3Style}>3</Text>
                </View>
                <View style={styles.Num3ViewStyle}>
                  <Text style={styles.Num3Style}>3</Text>
                </View>
              </View>

              <View style={styles.BrownBar}>
                <View style={styles.GreenBar}></View>
              </View>
            </View>

            <Text style={styles.ServicesTextStyle}>Location</Text>
          </View>

          <View style={styles.ServicesViewStyle}>
            <Text style={styles.ServicesTextStyle}>Value For Money</Text>

            <Text style={styles.ServicesTextStyle}>Cleanliness</Text>
          </View>
          <View style={styles.SliderViewStyle}>
            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>
            <View style={styles.BrownBar}>
              <View style={styles.GreenBar}></View>
            </View>
          </View>
            */
}

{
  /* <TouchableOpacity
          onPress={() => {
            navigation.navigate('PropertiesDetails2');
          }}
          style={{height: 16, width: 16}}>
          <Image
            source={require('../src/assets/Images/harticon.png')}
            style={{
              height: 16,
              width: 16,
              bottom: 100,
              tintColor: '#000',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity> */
}
