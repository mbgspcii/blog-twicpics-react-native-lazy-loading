
import { StyleSheet } from 'react-native';
import { installTwicPics } from '@twicpics/components/react-native';
import CarouselCards from "./CarouselCards";
import { SafeAreaView } from 'react-native-web';

installTwicPics({
  "domain": `https://demo.twic.pics/`,
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});


