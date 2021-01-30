import styled from 'styled-components/native';
import { gray } from '../utils/colors';

export const Button = styled.TouchableOpacity`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 170px;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  border: 2px solid ${gray};
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  width: 170px;
  border-radius: 10px;
`;

export const InfoText = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const SubTitle = styled.Text`
  margin-bottom: 30px;
  margin-top: 10px;
  color: red;
  width: 170px;
  text-align: center;
  font-size: 20px;
`;

export const Title = styled.Text`
  font-size: 29.4px;
  width: 170px;
  text-align: center;
`;
