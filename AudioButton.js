import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

class AudioButton extends React.Component {

  render() {
    const {
      name,
      onPress,
    } = this.props;

    let buttonWidth = 30,
        buttonHeight = 30;

    if (name === 'play') {
      imagePath=require('./assets/icon_play_arrow.png');
    }

    if (name === 'pause') {
      imagePath=require('./assets/icon_pause.png');
    }

    if (name === 'skip') {
      imagePath=require('./assets/icon_rewind.png');
    }

    if (name === 'pause_circle') {
      buttonWidth = 80,
      buttonHeight = 68,
      imagePath=require('./assets/icon_pause_circle.png');
    }

    if (name === 'rewind') {
      buttonWidth = 28,
      buttonHeight = 66,
      imagePath=require('./assets/icon_rewind.png');
    }

    if (name === 'fastforward') {
      buttonWidth = 28,
      buttonHeight = 66,
      imagePath=require('./assets/icon_fastforward.png');
    }

    return (
      <TouchableOpacity
        style={[styles.container]}
        onPress={this.props.onPress}
        activeOpacity={0.5}
      >
        <View style={[styles.audioButton]}>
          <Image
            style={{
              width: buttonWidth,
              height: buttonHeight,
            }}
            source={imagePath}
          />
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  audioButton: {

  },
});

export default AudioButton;