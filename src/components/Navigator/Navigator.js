import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { LogicalBinaryOperations } from '../../../LogicalBinaryOperations/LogicalBinaryOperations';
import { BinaryOperations } from '../../screens/BinaryOperations/BinaryOperations';
import { Converter } from '../../screens/Converter/Converter';

const Tab = createMaterialBottomTabNavigator();

export function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='LogicalBinaryOperations'
        component={LogicalBinaryOperations}
      />
      <Tab.Screen
        name='BinaryOperations'
        component={BinaryOperations}
      />
      <Tab.Screen name='Converter' component={Converter} />
    </Tab.Navigator>
  );
}
