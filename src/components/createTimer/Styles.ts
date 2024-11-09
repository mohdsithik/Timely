import { StyleSheet } from "react-native";
import Dimension from "../../constants/Dimension";
import Colors from "../../constants/Colors";
import FontStyles from "../../assets/stylesheet/FontStyles";

const styles = StyleSheet.create({
    container: {
      padding: Dimension.n(20),
      backgroundColor: Colors.gray373737,
      borderRadius: Dimension.n(16),
      marginHorizontal: Dimension.n(20),
    },
    closeImage: {
      alignSelf: 'flex-end',
      marginBottom: Dimension.n(20),
    },
    timernameCollector: {
      backgroundColor: Colors.gray595959,
      borderRadius: Dimension.n(4),
      ...FontStyles.poppinM10RWhite,
      width: '60%',
      paddingStart: Dimension.n(10),
    },
    addButton: {
      ...FontStyles.poppinM10RWhite,
      marginHorizontal: Dimension.n(20),
      marginVertical: Dimension.n(8),
    },
    addButtonCon: {
      backgroundColor: Colors.blue918FFF,
      borderRadius: Dimension.n(4),
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: '40%',
      marginLeft: Dimension.n(10),
    },
    summitCon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Dimension.n(20),
    },
    timerCon:{
      width: '100%',
      alignSelf: 'center',
      marginBottom: Dimension.n(10),
    }
  });

  export default styles;
  