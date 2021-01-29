import styled from 'styled-components/native';
import {gray} from '../utils/colors';

export const Button = styled.TouchableOpacity`
  padding: 8px 20px;
  border-radius: 1rem;
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
  padding: 5px 10px;
  margin: 10px 0;
  height: auto;
`;

export const InfoText = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const SubTitle = styled.Text`
  margin-bottom: 30;
  margin-top: 10;
  color: red;
  width: 170px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 1.2rem;
  width: 170px;
  text-align: center;
`;
