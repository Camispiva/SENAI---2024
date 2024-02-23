import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alô Mundo</Text>
      <p></p>
      <Image
        style={styles.logo}
         source={{uri: 'https://w7.pngwing.com/pngs/629/4/png-transparent-cartoon-blue-butterfly-cartoon-blue-butterfly.png'}} 
       
        />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 logo:{
  width: 160,
  height:150,
 },

})
