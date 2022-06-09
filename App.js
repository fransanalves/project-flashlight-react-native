import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

function App() {
  const [toggle, setToggle] = useState(false);
  const changeValueToggle = () => setToggle(prevValueToggle => !prevValueToggle);

  useEffect(() => { 
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => changeValueToggle());
    return () => subscription.remove();
  }, []);

  return (
    <View style={ toggle ? styles.containerLight : styles.container }>
      <TouchableOpacity onPress={ changeValueToggle }>
        <Image
        style={ toggle ? styles.imageLightOn : styles.imageLightOff }
        source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')} />
        <Image
        style={styles.imageLogoDio}
        source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')} />
      </TouchableOpacity>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  imageLightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#fff',
    width: 150,
    height: 150
  },
  imageLogoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250
  }
})
