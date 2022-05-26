import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/datafiles/arIrMB5WY4Uhhgv0OuShBLzoAt9AnrzQCh9Z5wjW/spinner loading/data.json"
        speed={ 4 }
      />
    );
  }
}

export default Loading;
