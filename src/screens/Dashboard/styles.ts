import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import { 
  getStatusBarHeight, 
  getBottomSpace
} from 'react-native-iphone-x-helper'

import { DataListProps } from '.'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`
export const UserWrapper =styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(32)}px;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 16px;
`

export const User = styled.View`
  margin-left: 18px;
`

const baseTextUserInfo = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.shape};
`

export const UserGreeting = styled(baseTextUserInfo)`
  font-family: ${({theme}) => theme.fonts.regular};
`

export const UserName = styled(baseTextUserInfo)`
  font-family: ${({theme}) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
  color: ${({ theme })=> theme.colors.shape};
  font-size: ${RFValue(36)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
    horizontal : true,
    showsHorizontalScrollIndicator: false , 
    contentContainerStyle : { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(24)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(16)}px;
  
`

export const Title = styled.Text`
  margin-bottom: 16px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textDark};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(27)}px;
`

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
  ).attrs({
      showsVerticalScrollIndicator : false,
      contenContainerStyle :{ 
        paddingBottom: getBottomSpace()
  }
})`

`