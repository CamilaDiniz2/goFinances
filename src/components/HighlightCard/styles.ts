import styled, { css } from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'; 

interface TypeProps{
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape
};
  border-radius: 5px;
  padding: 20px 24px;
  margin-right: 16px;
  padding-bottom: ${RFValue(42)}px;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};

`
export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  
  ${({type}) => type === "up" && css`
    color: ${({theme}) => theme.colors.success}
    `}
  ${({type}) => type === "down" && css`
    color: ${({theme}) => theme.colors.attention}
  `}
  ${({type}) => type === "total" && css`
  color: ${({theme}) => theme.colors.shape}
  `}
` 
export const Footer = styled.View`
`
export const Amount = styled.Text<TypeProps>`
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.title};
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(48)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-top: 36px;

`
export const LastTransaction = styled.Text<TypeProps>`
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.text};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`