import {View, Text, TouchableOpacity, Modal, Button} from 'react-native';
import React, {useState} from 'react';
import {ArrowDown2, CloseCircle} from 'iconsax-react-native';
import DatePicker from 'react-native-date-picker';

interface Props {
  selected?: Date;
  onSelect: (val: Date) => void;
}

const DateTimePicker = (props: Props) => {
  const {selected, onSelect} = props;

  const [isVisibleModalDatetime, setIsVisibleModalDatetime] = useState(false);

  const [dateTimeSelect, setDateTimeSelect] = useState(selected ?? new Date());

  return (
    <>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={() => setIsVisibleModalDatetime(true)}
          style={{
            backgroundColor: '#e0e0e0',
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 14,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{color: selected ? '#212121' : '#676767', fontSize: 16}}>
              {selected ? selected.toISOString() : 'choice'}
            </Text>
          </View>
          <ArrowDown2 size={22} color="#585858" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isVisibleModalDatetime}
        statusBarTranslucent
        transparent
        animationType="slide">
        <View
          style={{
            flex: 1,
            padding: 20,
            paddingTop: 52,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 20,
              margin: 20,
              backgroundColor: '#fafafa',
              borderRadius: 20,
              width: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', flex: 1}}>
                Date time picker
              </Text>

              <TouchableOpacity
                onPress={() => setIsVisibleModalDatetime(false)}>
                <CloseCircle size={24} color="#676767" />
              </TouchableOpacity>
            </View>
            <DatePicker
              date={dateTimeSelect}
              onDateChange={val => setDateTimeSelect(val)}
              mode="datetime"
            />

            <View>
              <Button
                title="Confirm"
                onPress={() => {
                  onSelect(dateTimeSelect);
                  setIsVisibleModalDatetime(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DateTimePicker;
