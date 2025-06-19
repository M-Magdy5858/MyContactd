import colors from "@/assets/styles/colors";
import AddFavouriteModal from "@/components/AddFavouriteModal";
import ContactItem from "@/components/ContactCard";
import Text from "@/components/Text";
import useContacts from "@/hooks/useContacts";
import { useAppDispatch } from "@/store";
import { removeFromFavourites } from "@/store/contactsSlice";
import { Contact } from "expo-contacts";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function Index() {
  const { contacts, loading, refetch, permissionDenied } = useContacts();
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const onFavouritePress = (contact: Contact, isFavourite: boolean) => {
    if (isFavourite && contact.id) {
      dispatch(removeFromFavourites(contact.id));
    } else {
      setSelectedContact(contact);
      setModalVisible(true);
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.wrapper}>
        <Text type="header" customStyle={styles.title}>
          My Contacts
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color={colors.blue_600} />
        ) : (
          <FlatList
            data={contacts}
            renderItem={({ item }) => (
              <ContactItem contact={item} onStarPress={onFavouritePress} />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <Text
                  type="body_medium"
                  customStyle={styles.emptyText}
                >
                  {permissionDenied
                    ? "Permission denied to access contacts."
                    : "No contacts found."}
                </Text>
                {!permissionDenied && <Button title="Open Settings" onPress={() => Linking.openSettings()}/>}
              </View>
            )}
            refreshing={loading}
            onRefresh={refetch}
            contentContainerStyle={styles.constainer}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {selectedContact && (
        <AddFavouriteModal
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
            setSelectedContact(null);
          }}
          contact={selectedContact}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.off_white,
  },
  wrapper: {
    padding: 16,
    flex: 1,
  },
  title: {
    marginBottom: 24,
    marginTop: 12,
    textAlign: "center",
  },
  constainer: {
    padding: 4,
    rowGap: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    marginBottom: 16,
  },
});
