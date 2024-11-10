import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import styles from './Styles';

interface ButtonProps {
 text: string;
 onPress: () => void;
}

interface CAlertModalProps {
 title: string;
 content: string | string[];
 buttons?: ButtonProps[];
 style?: StyleProp<ViewStyle>;
}



const CAlertModal: React.FC<CAlertModalProps> = ({ title, content, buttons }) => {
 const renderContent = () => {
  return <Text style={styles.bulletText}>{content}</Text>;
 };

 const renderButtons = () => (
  <View style={[styles.buttonContainer, buttons && buttons.length === 1 && styles.singleButton]}>
   {buttons &&
    buttons.length > 0 &&
    buttons.map((button, index) => {
     return (
      index < 3 && (
       <TouchableOpacity
        key={index}
        style={[styles.buttonWrapper, buttons.length > 1 && styles.multiButtonWrapper]}
        onPress={() => button.onPress()}
       >
        <Text
         style={[
          styles.buttonText,
          (buttons.length === 2 || buttons.length === 3) &&
           index === 0 && { alignSelf: 'flex-start' },
          buttons.length === 2 && index === 1 && { alignSelf: 'flex-end' },
          buttons.length === 3 && index === 2 && { alignSelf: 'flex-end' },
         ]}
        >
         {button.text}
        </Text>
       </TouchableOpacity>
      )
     );
    })}
  </View>
 );

 return (
  <View style={styles.modalContainer}>
   <Text style={styles.title}>{title}</Text>

   <ScrollView>
    <View>{renderContent()}</View>
   </ScrollView>
   {buttons && <View>{renderButtons()}</View>}
  </View>
 );
};

export default CAlertModal;
