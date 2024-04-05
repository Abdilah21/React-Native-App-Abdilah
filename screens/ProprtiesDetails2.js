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
} from 'react-native';
import React, {useState} from 'react';
import {Container} from 'native-base';

import PropertyCardHorizontal from '../src/components/PropertyCardHorizontal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProprtiesDetails2() {
  const data = [
    {
      name: 'Mohammed Ali',
      date: '25 / 3 / 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/London.jpg'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Ahmed Mohammed',
      date: '25 / 3 / 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/Duabi.png'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Abdulelah Bader',
      date: '25 / 3 / 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Mohammed Ali',
      date: '25 / 3 / 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/London.jpg'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Abdulelah Bader',
      date: '25 / 3 / 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error' +
        'asperiores quod tempore repellendus consequatur aliquid quam debitis' +
        'mollitia sunt nam praesentium, hic iusto ipsum libero.',
      Avatar: require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
      Stars: require('../src/assets/Images/star.png'),
    },
    {
      name: 'Ahmed Mohammed',
      date: '25 / 3 / 2023',
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
    },
  ];

  return (
    <Container style={styles.ContainerStyle}>
      <ScrollView style={styles.ContainerStyle}>
        {/*================================head=========================*/}
        <ImageBackground
          source={require('../src/assets/Images/stencil.blog-post-feature-15.jpg.webp')}
          style={styles.bg}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 60,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              PrpertiesDetails
            </Text>
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
                <Image
                  style={styles.ShareStyle}
                  source={require('../src/assets/Images/share.png')}
                  resizeMode="contain"
                />
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
        </ImageBackground>

        {/*================================head=========================*/}

        {/*==========================Middle======================================*/}
        {dataHead.map((item, key) => (
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              top: 350,
            }}>
            <View style={styles.BigContainers}>
              <View style={{justifyContent: 'space-around'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 6,
                  }}>
                  <Text style={styles.BigContainersText}>{item?.name2}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      left: 90,
                    }}>
                    <Text>4.9</Text>
                    <Image
                      source={require('../src/assets/Images/star.png')}
                      style={{height: 18, width: 18}}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 6,
                  }}>
                  <Image
                    style={{height: 18, width: 18}}
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
            <Text style={styles.DetailsStyle}>Bedrooms</Text>
            <Text style={styles.DetailsStyle2}>4 Beds</Text>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsStyle}>Floors</Text>
            <Text style={styles.DetailsStyle2}>2</Text>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsStyle}>Bathrooms</Text>
            <Text style={styles.DetailsStyle2}>4 Beds</Text>
          </View>
          <View style={styles.TextViewStyle}>
            <Text style={styles.DetailsStyle}>Prperty type</Text>
            <Text style={styles.DetailsStyle2}>Commercial</Text>
          </View>
        </View>

        <View style={styles.AmenitiesContainer}>
          <Text style={styles.HeadText}>Amenities</Text>
          <View style={styles.FlexDirectionStyle}>
            <Image
              source={require('../src/assets/Images/correct.png')}
              style={styles.AmenitiesImgStyle}
            />
            <Text style={styles.AmenitiesTextStyle}>Baicony</Text>

            <Image
              source={require('../src/assets/Images/correct.png')}
              style={styles.AmenitiesImgStyle}
            />
            <Text>Security</Text>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home1');
              }}
              style={styles.Addbutton}>
              <Text style={styles.TextAddButtonStyle}>Add a review</Text>
            </TouchableOpacity>
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

          {/* <View style={styles.ServicesViewStyle}>
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
                */}
          <View style={styles.Cutter}></View>
          {data.map((item, key) => (
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
          ))}

          {/*
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
                */}
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

    fontWeight: '600',
    fontSize: 18,
  },

  /*=======================*/
  ContainerStyle: {
    height: windowHeight,
    width: windowWidth,
  },
  bg: {height: windowHeight / 2.4, width: '100%'},
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
    marginTop: 130,
  },
  DescriptionText: {color: '#838383'},
  HeadText: {fontSize: 16, fontWeight: '600', paddingBottom: 20},
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
  DetailsStyle: {
    padding: 20,
  },
  DetailsStyle2: {
    padding: 20,
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
    justifyContent: 'space-between',
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
    width: '80%',
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
  },
  ValueTextStyle: {
    fontSize: 16,
    left: 20,
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
  NameTextStyle: {fontSize: 16, marginLeft: 22},
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
    marginLeft: 10,
  },
  FlexDirectionStyle2: {
    flexDirection: 'row',
  },
  //========================bottom================================
  bottomstyle: {
    width: '130%',
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderWidth: 1,
    height: '9%',
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
  },
});
