import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

function LogIn({ navigation }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    if (!name || !mobile || !email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
    } else {
      navigation.navigate('OTP');
    }
  };

  return (
    <SafeAreaView style={styles.pineappleJuice}>
      <TouchableOpacity onPress={() => navigation.navigate('TastyNest')} style={styles.goHome}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.funkyText}>Sign In</Text>
      <TextInput
        style={styles.bananaBread}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogIn}>
        <Text style={styles.donutButton}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.marshmallow}>Or Continue With</Text>
      <View style={styles.tacoRow}>
        <Image source={require('./assets/Google__G__Logo-512.png')} style={styles.pizzaSlice} />
        <Image source={require('./assets/github-icon-1-logo.png')} style={styles.pizzaSlice} />
        <Image source={require('./assets/LinkedIn-Icon-Logo.wine.png')} style={styles.sushiRoll} />
      </View>
    </SafeAreaView>
  );
}

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.brand}>TastyNest</Text>
        <Image source={require('./assets/PizzaLogo.png')} style={styles.img2} />
      </View>
      <Image source={require('./assets/ChatGPT_Image.png')} style={styles.img} />
      <Text style={styles.line}>Carving Delicious Food?</Text>
      <Text style={styles.line2}>
        We'll Bring It to you in <Text style={styles.line22}>No Time</Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.btnn}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.sign}>
        Don't have an Account?
        <TouchableOpacity style={styles.sing2} onPress={() => navigation.navigate('SignIn')}>
          <Text> Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

function SignIn({ navigation }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !mobile || !email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
    } else {
      navigation.navigate('OTP');
    }
  };

  return (
    <SafeAreaView style={styles.pineappleJuice}>
      <TouchableOpacity onPress={() => navigation.navigate('TastyNest')} style={styles.goHome}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.funkyText}>Sign Up</Text>
      <TextInput
        style={styles.bananaBread}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.crazyNoodles}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.donutButton}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.marshmallow}>Or Continue With</Text>
      <View style={styles.tacoRow}>
        <Image source={require('./assets/Google__G__Logo-512.png')} style={styles.pizzaSlice} />
        <Image source={require('./assets/github-icon-1-logo.png')} style={styles.pizzaSlice} />
        <Image source={require('./assets/LinkedIn-Icon-Logo.wine.png')} style={styles.sushiRoll} />
      </View>
    </SafeAreaView>
  );
}

function OTP({ navigation }) {
  return (
    <SafeAreaView style={styles.pineappleJuice}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.goHome}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.funkyText}>Enter Your OTP</Text>
      <TextInput style={styles.bananaBread} placeholder="OTP" />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.donutButton}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.pineappleJuice}>
      <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={styles.goHome}>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TastyNest" component={WelcomeScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
  },
  img2: {
    width: 40,
    height: 40,
    marginLeft: 4,
    marginBottom: 30
  },
  brand: {
    fontWeight: '700',
    fontSize: 41,
    marginBottom: 40,
  },
  line: {
    fontWeight: '700',
    fontSize: 21,
    marginBottom: 0,
  },
  line2: {
    fontWeight: '600',
    fontSize: 21,
    marginTop: 9,
  },
  line22: {
    fontWeight: '700',
    fontSize: 21,
    marginTop: 15,
  },
  sign: {
    fontWeight: '400',
    fontSize: 15,
    marginTop: 15,
  },
  sing2: {
    fontWeight: '700',
    fontSize: 15,
    marginTop:7,
  },
  btnn: {
    fontWeight: '700',
    fontSize: 21,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 125,
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 50,
    marginBottom: 15,
  },
  pineappleJuice: {
    flex: 1,
    backgroundColor: '#FFBF57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  funkyText: {
    fontWeight: '600',
    fontSize: 25,
  },
  marshmallow: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 30,
  },
  bananaBread: {
    width: '90%',
    paddingVertical: 20,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    paddingLeft: 20,
    fontWeight: '700',
    borderWidth: 2,
    borderColor: 'black',
  },
  crazyNoodles: {
    width: '90%',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    paddingLeft: 20,
    fontWeight: '700',
    borderWidth: 2,
    borderColor: 'black',
  },
  donutButton: {
    fontWeight: '700',
    fontSize: 21,
    backgroundColor: 'white',
    paddingHorizontal: 125,
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 50,
    marginBottom: 15,
  },
  pizzaSlice: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  sushiRoll: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  tacoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  goHome: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  arrow: {
    fontSize: 25,
  },
});
