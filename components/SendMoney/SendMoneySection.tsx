import React, { FunctionComponent, useRef, useCallback, useState, useEffect } from "react";
import { Alert, StyleSheet,Text, TextInput, View, Modal, Button } from "react-native";
import styled from "styled-components/native";
import Avatar from "./../../assets/avi/avatar.png";
import { colors } from "../colors";
import { SendMoneySectionProp } from "./types";
import BottomSheet from "@gorhom/bottom-sheet";
import SendMoneyItem from "./SendMoneyItem";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ButtonContainer = styled.View`
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  margin: 10px 0;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.accent}; 
  padding: 10px 15px; 
  align-items: center;
  border-radius: 5px; 
  margin: 10px; 
  width: 100px; 
  max-width: 120px;
`;

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  /* min-height: 40%; */
  padding-left: 20px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FunctionComponent<SendMoneySectionProp> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState<{ id: number; name: string; amount: string; background: string }[]>([]);

  const handleAddPress = () => {
    setIsVisible(true);
  };

  const handleSubmit = () => {
    if (name && amount) {
      const newItem = { id: Date.now(), name, amount, background: colors.accent, img:Avatar };
      setItems([...items, newItem]);
      setName("");
      setAmount("");
      setIsVisible(false);
    } else {
      Alert.alert("Please enter both name and amount.");
    }
  };
  
  useEffect(() => {
    const loadItemsFromStorage = async () => {
      try {
        const savedItems = await AsyncStorage.getItem('savedItems');
        if (savedItems) {
          setItems(JSON.parse(savedItems));
        }
      } catch (error) {
        console.error("Error loading items from AsyncStorage", error);
      }
    };

    loadItemsFromStorage();
  }, []);

  useEffect(() => {
    const saveItemsToStorage = async () => {
      try {
        await AsyncStorage.setItem('savedItems', JSON.stringify(items));
      } catch (error) {
        console.error("Error saving items to AsyncStorage", error);
      }
    };

    saveItemsToStorage();
  }, [items]);

  return (
    <SendMoneySectionBackground>
      <SendMoneyRow style={{ marginBottom: 25 }}>
        <Text style={{ fontSize: 19, color: colors.secondary }}>
          Send Money To
        </Text>
        <TextButton onPress={handleAddPress}>
          <Text style={{ fontWeight: "bold", color: colors.tertiary }}>
            +Add
          </Text>
        </TextButton>
      </SendMoneyRow>

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: 300, padding: 20, backgroundColor: colors.white, borderRadius: 10 }}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={{ borderWidth: 0.5, borderColor: colors.secondary, marginBottom: 10, padding: 8,borderRadius:15 }}
            />
            <TextInput
              placeholder="Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={{ borderWidth: 0.5, borderColor: colors.secondary, marginBottom: 10, padding: 8, borderRadius:15 }}
            />
            <ButtonContainer>
            <StyledButton onPress={handleSubmit}>
              <Text>Submit</Text>
              </StyledButton>
            <StyledButton onPress={() => setIsVisible(false)} style={{backgroundColor:colors.tertiary}}>
              <Text>Cancel</Text>
            </StyledButton>
            </ButtonContainer>
          </View>
        </View>
      </Modal>

      <SendMoneyList
        data={[...props.data, ...items]}
        contentContainerStyle={{
          paddingRight: 25,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <SendMoneyItem {...item} />}
      />
    </SendMoneySectionBackground>
  );
};
const styles = StyleSheet.create({
Button:{
  borderRadius:25,

}

})

export default SendMoneySection;

