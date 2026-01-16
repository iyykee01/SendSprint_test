import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ErrorModalProps {
  title: string;
  bodyText: string;
  onPress: () => void;
}

export const ErrorModal = ({ ...props }: ErrorModalProps) => {
  return (
    <Modal visible={true} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{props.title}</Text>
          <Text style={styles.modalText}>{props.bodyText}</Text>
          <Pressable style={styles.retryButton} onPress={props.onPress}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
  },
});
