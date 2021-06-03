import React from 'react';
import {View, Modal} from 'react-native';
import {BarIndicator} from 'react-native-indicators';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({isLoading = false, withModal = false}) => {
  if (withModal && isLoading) {
    return (
      <Modal transparent visible={isLoading}>
        <View
          style={{...commonStyles.loader, backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <BarIndicator size={25} color={colors.themeMain} />
        </View>
      </Modal>
    );
  }
  if (isLoading) {
    return (
      <View
        style={{...commonStyles.loader, backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <BarIndicator size={25} color={colors.themeMain} />
      </View>
    );
  }
  return null;
};

export default Loader;
