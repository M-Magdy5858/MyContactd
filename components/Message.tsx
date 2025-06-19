import colors from "@/assets/styles/colors";
import { textStyles } from "@/assets/styles/textStyles";
import { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./Text";

interface Props {
  text: string;
  maxLines?: number;
}

const Message: FC<Props> = ({ text, maxLines = 2 }) => {
  const [expanded, setExpanded] = useState(true);
  const [showToggle, setShowToggle] = useState(false);

  const onTextLayout = (e: any) => {
    console.log('onTextLayout called', e.nativeEvent.lines.length);
    if (e.nativeEvent.lines.length > 2 && !showToggle) {
      setShowToggle(true);
            setExpanded(false);
    }
  };

  const toggleShowMore = () => {
    setExpanded(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[textStyles.body_light, styles.message]}
        numberOfLines={expanded ? undefined : 2}
        onTextLayout={onTextLayout}
      >
        {text}
      </Text>
      {showToggle && (
        <TouchableOpacity onPress={toggleShowMore}>
          <Text style={[textStyles.body_medium, styles.showMore]}>
            {expanded ? "Show Less" : "Show More"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  message: {
    color: colors.off_white,
    marginTop: 12,
  },
  showMore: {
    color: colors.blue_200,
    marginTop: 5,
    textDecorationLine: "underline",
  },
});

export default Message;
