import styled from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'

interface TransactionType{
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  padding: 18px 24px;
  border-radius: 4px;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
`

export const Amount = styled.Text<TransactionType>`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 20px;
  margin-top: 2px;

  color: ${({ theme, type}) => 
    type === 'positive' ? theme.colors.success : theme.colors.attention
}
`

export const  Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const  Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
` 
export const  Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  margin-right: 16px;
` 

const CategoryInfo = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
`
export const  CategoryName = styled(CategoryInfo)`
`  
export const  Date = styled(CategoryInfo)`

`