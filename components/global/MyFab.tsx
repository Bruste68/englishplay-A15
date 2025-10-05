import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useOverlay } from "../../context/OverlayContext";

export default function MyFab() {
  const { toggleMy } = useOverlay();
  return (
    <TouchableOpacity onPress={toggleMy} style={styles.fab} activeOpacity={0.85}>
      <Ionicons name="person" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: Platform.select({ ios: 32, android: 24 }),
    width: 35,
    height: 35,
    borderRadius: 28,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
});
