import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Button from './../components/Button';
import TextInput from './../components/TextInput';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/EvilIcons';
 
function LoginScreen(props) {
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const onSignInButtonPressed = () => {
    console.log(email);
    console.log(password);
    props.navigation.navigate('Home');
  };
   return (
     <View style={styles.view}>
       <StatusBar barStyle="dark-content" backgroundColor="white" />
       <View style={styles.header}>
         <TouchableOpacity
           onPress={() => {
             BackHandler.exitApp();
           }}>
           <Icon name={'chevron-with-circle-left'} size={25} />
         </TouchableOpacity>
       </View>
       <Text style={styles.collection}>Login</Text>
       <Text style={styles.details}>Enter your detail below</Text>
       <Text style={styles.userOrEmail}>Email</Text>
       <TextInput
         keyboardType="email-address"
         icon={<EmailIcon name={'mail'} size={20} />}
         textPlaceHolder="Enter your E-mail"
         onChangeText={(text) => {
           setEmail(text);
         }}
       />
       <View style={styles.rowBetweenPassAndForgetPass}>
         <Text style={styles.password}>Password</Text>
         <Text style={styles.forgetPass}>Forget password?</Text>
       </View>
       <TextInput
         icon={<PasswordIcon name={'question'} size={25} />}
         textPlaceHolder="Enter your password"
         checkSecure={true}
         onChangeText={(text) => {
           setPassword(text);
         }}
       />
       <Button onPress={onSignInButtonPressed} name="Login" />
       <View style={styles.rowBetweenIsaMemberAndSignUpNow}>
         <Text>Not a member? </Text>
         <TouchableOpacity
           onPress={() => {
             props.navigation.navigate('Register');
           }}>
           <Text style={styles.signUpNow}>Sign Up now</Text>
         </TouchableOpacity>
       </View>
     </View>
   );
}
export default  LoginScreen;

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
  },
  userOrEmail: {
    textAlign: 'left',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 30,
  },
  rowBetweenPassAndForgetPass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  password: {
    textAlign: 'left', 
    fontSize: 12,
    marginLeft: 20,
  },
  forgetPass: {
    textAlign: 'right', 
    fontSize: 12,
    marginRight: 10,
  },
  rowBetweenIsaMemberAndSignUpNow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  signUpNow: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
