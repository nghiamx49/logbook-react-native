import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet, Vibration} from 'react-native';
import Dialog from 'react-native-dialog';
import Sound from 'react-native-sound';

const DialogScreen = () => {
  const [toggle, setToggle] = useState(false);

  const sound = new Sound('bell_ringing_04.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
      return;
    }
  });

  useEffect(() => {
    Sound.setCategory('Playback');
    return sound.release();
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const vibrateHandle = () => {
    Vibration.vibrate(1000);
  };

  const ringBell = () => {
    sound.play(success => {
      if (success) {
        console.log('sound playing end');
      } else {
        console.log('erorr');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Dialog" onPress={handleToggle} />
      <Dialog.Container visible={toggle}>
        <Dialog.Title>Vibrate and Ring a Bell</Dialog.Title>
        <Dialog.Description>
          <View style={styles.optionContainer}>
            <Button title="Vibrate" color="#841584" onPress={vibrateHandle} />
            <Button title="Ring a Bell" onPress={ringBell} />
          </View>
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleToggle} />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DialogScreen;
