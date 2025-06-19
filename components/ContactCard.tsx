import colors from "@/assets/styles/colors";
import { textStyles } from "@/assets/styles/textStyles";
import { useAppSelector } from "@/store";
import { FontAwesome } from "@expo/vector-icons";
import { Contact } from "expo-contacts";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Message from "./Message";
import Text from "./Text";

type Props = {
  contact: Contact;
  onStarPress?: (contact: Contact, isFavourite: boolean) => void;
};

const ContactItem: FC<Props> = ({ contact, onStarPress }) => {
  const { name } = contact;
  const { favourites } = useAppSelector((state) => state.favourites);

  const firstTwoInitials = name
    ? name
        .split(" ")
        .slice(0, 2)
        .map((n) => n.charAt(0).toUpperCase())
        .join("")
    : "??";

  const [showMore, setShowMore] = useState(false);

  const favouriteData = favourites.find((f) => f.id === contact.id);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: favouriteData ? colors.blue_600 : colors.white },
      ]}
    >
      <View style={styles.headWrapper}>
        {/* Avatar */}
        <View
          style={[
            styles.avatar,
            { backgroundColor: favouriteData ? colors.white : colors.blue_600 },
          ]}
        >
          <Text
            style={[
              textStyles.title_medium,
              { color: favouriteData ? colors.black : colors.white },
            ]}
          >
            {firstTwoInitials}
          </Text>
        </View>

        {/* Info Section */}
        <View style={styles.info}>
          <Text
            style={[
              textStyles.title_medium,
              { color: favouriteData ? colors.white : colors.black },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              textStyles.sub_text,
              { color: favouriteData ? colors.white : colors.black },
            ]}
          >
            {favouriteData ? favouriteData.gender : "Unknown"}
          </Text>
        </View>

        {/* Star Icon */}
        <TouchableOpacity
          onPress={() => contact.id && onStarPress?.(contact, !!favouriteData)}
          hitSlop={16}
        >
          <FontAwesome
            name={favouriteData ? "star" : "star-o"}
            size={24}
            color={favouriteData ? colors.gold_400 : colors.gray_300}
          />
        </TouchableOpacity>
      </View>
      {favouriteData && favouriteData.message && (
        <Message text={favouriteData.message} />
      )}
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,

    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  headWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  gender: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
});
