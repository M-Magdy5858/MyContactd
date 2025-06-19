import colors from "@/assets/styles/colors";
import { useAppDispatch } from "@/store";
import { addToFavourites } from "@/store/contactsSlice";
import { Favourite } from "@/types";
import { getGender } from "@/utils";
import { FontAwesome } from "@expo/vector-icons";
import { Contact } from "expo-contacts";
import { Formik } from "formik";
import {
    Alert,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  message: Yup.string()
    .required("Message is required")
    .max(200, "Max 200 characters")
    .matches(/^[a-zA-Z0-9\s.,!?()'"-]+$/, "No special characters"),
});

type Props = {
  visible: boolean;
  onClose: () => void;
  contact: Contact;
};

export default function AddFavouriteModal({
  visible,
  onClose,
  contact,
}: Props) {
  const dispatch = useAppDispatch();

  if (!contact) return null;

  const handleSubmit = async (values: { message: string }) => {
    if (!contact.id) return;

    try {
      const gender = await getGender(contact);

      const fav: Favourite = {
        id: contact.id,
        message: values.message,
        gender,
      };

      dispatch(addToFavourites(fav));
      onClose();
    } catch (e) {
      Alert.alert("Error", "Failed to fetch gender info");
    }
  };


  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            style={styles.modal}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
          >
            <SafeAreaView>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                <FontAwesome name="close" size={22} color="#333" />
              </TouchableOpacity>

              <Text style={styles.title}>Add to Favourites</Text>

              <Formik
                initialValues={{ message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <TextInput
                      placeholder="Write your message"
                      style={styles.input}
                      multiline
                      onChangeText={handleChange("message")}
                      onBlur={handleBlur("message")}
                      value={values.message}
                      placeholderTextColor={colors.gray_400}
                    />
                    {touched.message && errors.message && (
                      <Text style={styles.error}>{errors.message}</Text>
                    )}
                    <Button title="Submit" onPress={handleSubmit as any} />
                  </>
                )}
              </Formik>
            </SafeAreaView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  closeBtn: {
    alignSelf: "flex-end",
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    minHeight: 100,
    textAlignVertical: "top",
    marginBottom: 12,
  },
  error: {
    color: "red",
    marginBottom: 12,
  },
});
