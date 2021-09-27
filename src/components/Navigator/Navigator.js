import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BinaryOperations } from '../../screens/BinaryOperations/BinaryOperations';
import { Converter } from '../../screens/Converter/Converter';
import { LogicalBinaryOperations } from '../../screens/LogicalBinaryOperations/LogicalBinaryOperations';
import theme from '../../core/theme/theme';

const Tab = createMaterialBottomTabNavigator();

export function Navigator() {
  return (
    <Tab.Navigator
      activeColor={theme.color.secondary}
      barStyle={{ backgroundColor: theme.color.primary }}
      initialRouteName='Converter'
    >
      <Tab.Screen
        name='Converter'
        options={{
          tabBarLabel: 'Converter',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='numeric'
              color={color}
              size={26}
            />
          ),
        }}
        component={Converter}
      />
      <Tab.Screen
        name='BinaryOperations'
        options={{
          tabBarLabel: 'Binary Operations',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='calculator-variant'
              color={color}
              size={26}
            />
          ),
        }}
        component={BinaryOperations}
      />
      <Tab.Screen
        name='LogicalBinaryOperations'
        options={{
          tabBarLabel: 'Logical Binary Operations',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='calculator'
              color={color}
              size={26}
            />
          ),
        }}
        component={LogicalBinaryOperations}
      />
    </Tab.Navigator>
  );
}
