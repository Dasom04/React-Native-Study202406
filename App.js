import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='할 일을 입력하세요!' />
        <Button title='할 일 추가하기' />
      </View>
      <View>
        <Text style={{margin: 16}}>할 일 목록들...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    
  }
});
