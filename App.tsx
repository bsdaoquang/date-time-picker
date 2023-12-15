import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from './src/components/DateTimePicker';

const App = () => {
  const [dateSelected, setDateSelected] = useState(new Date());

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <DateTimePicker
        selected={dateSelected}
        onSelect={val => setDateSelected(val)}
      />
    </View>
  );
};

export default App;
