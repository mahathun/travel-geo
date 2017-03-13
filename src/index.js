import React,{Component} from 'react';
import {Stack} from './config/Routes'

import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class App extends Component {

  render() {

    return (
    <ThemeProvider uiTheme={uiTheme}>
      <Stack />
     </ThemeProvider>
    );
  }
}

export default App;
