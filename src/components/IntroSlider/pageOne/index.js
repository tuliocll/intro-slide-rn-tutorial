import React, {useState, useEffect} from 'react';
import {
  Text,
  Animated,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Img from '../../../assets/image/undraw_real_time_collaboration_c62i.svg';

export default function pageOne() {
  const [textTranslate] = useState(new Animated.Value(-100));
  const [vectorTranslate] = useState(new Animated.Value(-500));

  useEffect(() => {
    Animated.spring(textTranslate, {
      toValue: 30,
      speed: 1,
      useNativeDriver: true,
    }).start();

    Animated.spring(vectorTranslate, {
      toValue: 60,
      useNativeDriver: true,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinearGradient style={style.container} colors={['#FDC830', '#F37335']}>
      <Animated.View
        style={{
          transform: [{translateX: textTranslate}],
        }}>
        <Text style={style.titleText}>Comodidade</Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateY: vectorTranslate}],
        }}>
        <Img width={250} height={250} />
      </Animated.View>

      <View style={style.bottomNavigator}>
        <TouchableNativeFeedback onPress={() => console.log('foi')}>
          <View style={style.button}>
            <Text style={style.buttonText}>Anterior</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => console.log('foi')}>
          <View style={style.button}>
            <Text style={style.buttonText}>Proximo</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 34,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  bottomNavigator: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    margin: 5,
  },
  buttonText: {
    fontSize: 11,
    color: '#fff',
  },
});
