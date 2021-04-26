import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Button from './../components/Button';
import NameIcon from 'react-native-vector-icons/Ionicons';
import TextInput from './../components/TextInput';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
import MobileIcon from 'react-native-vector-icons/FontAwesome';

function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const onSignUpButtonPressed = () => {
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(mobile);
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.view}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Icon name={'chevron-with-circle-left'} size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.collection}>Registration</Text>
        <Text style={styles.details}>Enter your detail below</Text>

        <Text style={styles.name}>Name</Text>
        <TextInput
          icon={<NameIcon name={'man-outline'} size={22} />}
          textPlaceHolder="Enter your Name"
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Text style={styles.name}>Email</Text>
        <TextInput
          keyboardType="email-address"
          icon={<EmailIcon name={'mail'} size={20} />}
          textPlaceHolder="Enter your E-mail"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Text style={styles.name}>password</Text>
        <TextInput
          checkSecure={true}
          icon={<PasswordIcon name={'question'} size={25} />}
          textPlaceHolder="Enter your password"
          checkSecure={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Text style={styles.name}>Mobile</Text>
        <TextInput
          keyboardType="number-pad"
          icon={
            <MobileIcon name={'mobile-phone'} size={25} style={{margin: 5}} />
          }
          textPlaceHolder="Enter your Mobile Number"
          onChangeText={(text) => {
            setMobile(text);
          }}
        />
        <Button onPress={onSignUpButtonPressed} name="Register" />
        <View style={styles.rowBetweenIsaMemberAndLogin}>
          <Text>Have a Account ? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.Login}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default RegisterScreen;

//styles
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
  collection: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  details: {
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
    marginTop: 3,
    marginBottom: 30,
  },
  name: {
    textAlign: 'left',
    fontSize: 12,
    marginLeft: 20,
  },
  rowBetweenIsaMemberAndLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  Login: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
