import { Button } from "react-native";

function CustomButton({ onPress }) {
  return(
    <Button onPress={onPress} title="TEST"/>
  )
}

export default CustomButton