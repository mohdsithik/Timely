import React, { FC } from 'react';
import {
 KeyboardAvoidingView,
 Modal,
 Platform,
 StyleProp,
 TouchableOpacity,
 View,
 ViewStyle,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './Styles';

interface ModalProps {
 visible: boolean;
 onClose: () => void;
 children: React.ReactNode;
 modalContentStyle?: StyleProp<ViewStyle>;
 isBottomModal?: boolean;
}

const CModal: FC<ModalProps> = ({
 visible,
 onClose,
 children,
 modalContentStyle,
 isBottomModal,
}) => {
 return (
  <Modal
   visible={visible}
   onDismiss={onClose}
   transparent
   statusBarTranslucent
   animationType="slide"
   onRequestClose={onClose}
  >
   <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   >
    <BlurView style={styles.blurBg} blurType="dark" blurAmount={9} onTouchStart={onClose} />
    {isBottomModal ? (
     <View style={styles.flex1}>
      <View
       style={[isBottomModal ? styles.modalBottomContent : styles.modalContent, modalContentStyle]}
      >
       <TouchableOpacity style={styles.flex1} onPress={onClose}>
        <View />
       </TouchableOpacity>
       {children}
      </View>
     </View>
    ) : (
     <View style={styles.modalContainer}>
      <View
       style={[isBottomModal ? styles.modalBottomContent : styles.modalContent, modalContentStyle]}
      >
       {children}
      </View>
     </View>
    )}
   </KeyboardAvoidingView>
  </Modal>
 );
};

export default CModal;
