/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
        <View style={styles.container}>
                    <Text style={styles.Text1}> This is example text </Text>
                    <Text style={styles.Text2}> This is example text </Text>
                    <Text style={styles.Text3}> This is example text </Text>
                    <Text style={styles.Text4}> This is example text </Text>
                    <Text style={styles.Text5}> This is example text </Text>
                    <Text style={styles.Text6}> This is example text </Text>
                    <Text style={styles.Text7}> This is example text </Text>
                    <Text style={styles.Text8}> This is example text </Text>
                    <Text style={styles.Text9}> This is example text </Text>
                    <Text style={styles.Text10}> This is example text </Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
        marginTop: 15,
  },

  Text1: {
        color: 'gold',
      },
  Text2: {
        marginTop: 15,
        color: 'lightgreen',
      },
  Text3: {
        marginTop: 15,
        color: 'black',
      },
  Text4: {
        marginTop: 15,
        color: 'black',
      },
  Text5: {
        marginTop: 15,
        color: 'black',
      },
  Text6: {
        marginTop: 15,
        color: 'black',
      },
  Text7: {
        marginTop: 15,
        color: 'gold',
      },
  Text8: {
        marginTop: 15,
        color: 'black',
      },
  Text9: {
        marginTop: 15,
        color: 'black',
      },
  Text10: {
        marginTop: 15,
        color: 'gold',
      },

});

export default App;
