import 'react-native-gesture-handler';
import * as React from 'react';
import { useState,useEffect } from 'react';
import { ActivityIndicator, Text, TextInput, View, StyleSheet, Button, ScrollView, FlatList ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm

function onPressButton() {
    alert("You pressed me")
  }


function Owner() {
  return (
    <View>
      
      <Text style={styles.paragraph}> I am your cat .</Text>
    </View>
  );
}
const styles1 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 44,
    alignItems: 'center',
  },
});

function FlatListBasics() {
    return (
      <View style={styles1.container}>
      <Text style={{width: 1325, height: 50, backgroundColor: 'gray' ,fontSize: 18,textAlign: 'center',fontWeight: 'bold',marginbottom: 10,}} > Numbers in German Language </Text>
        <FlatList
          data={[
            {key: 'Ein'},
            {key: 'Zwei'},
            {key: 'Drei'},
            {key: 'Four'},
            {key: 'Funf'},
            {key: 'Sechs'},
            {key: 'Sieben'},
            {key: 'Ach'},
            {key: 'Neoun'},
            {key: 'Zen'},
          ]}
          renderItem={({item}) => <Text style={styles1.item}> {item.key} </Text>}
        />
      </View>
    );
}

export default function App() {

  const [isName, setName] = useState(true);
  const [text , setText] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://en.wikipedia.org/wiki/List_of_football_clubs_in_India')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>My Hello-World app 🎉 </Text>
      <Text style={styles.paragraph}> Created with React-Native </Text>
      
          <TextInput
            style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
            placeholder="Enter your name " 
            onChangeText={text => setText(text)}
          />
        
      
      <Text> </Text>
      <Button
        onPress={() => {
          setName(false);
        }}
        
        color="#841584"
        disabled={!isName}
        title={isName ? 'Cllck Me ' : <Text style={styles.paragraph}> 'I am your cat'</Text>}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')} </Text>
      <Owner />
      <FlatListBasics />
      <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
      <Button
            onPress={onPressButton}
            title="Press Me"
          />
      <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>

    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});





