import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f8f8' },
  header: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0'
  },
  topicTitle: { fontSize: 20, fontWeight: '600', textAlign: 'center', color: '#000' },
  levelSelector: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 },
  scriptToggle: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center'
  },
  scriptToggleText: { fontSize: 14, color: '#007AFF' },
  fullScriptContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0'
  },
  scriptHeader: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#f8f8f8',
    color: '#000',
    textAlign: 'center'
  },
  scriptList: { paddingHorizontal: 16 },
  scriptLine: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0'
  },
  currentLine: { backgroundColor: '#fff9c4' },
  scriptText: { fontSize: 16, lineHeight: 22, color: '#000' },
  loadingContainer: { padding: 16, alignItems: 'center', justifyContent: 'center' },
  loadingText: { marginTop: 8, color: '#007AFF' },
  container: { padding: 16, paddingBottom: 80 },
  messageList: { flex: 1 },
  messageRow: { flexDirection: 'row', marginBottom: 12, width: '100%' },
  rowLeft: { justifyContent: 'flex-start', alignItems: 'flex-start' },
  rowRight: { justifyContent: 'flex-end', alignItems: 'flex-end' },
  bubble: { maxWidth: '80%', padding: 12, borderRadius: 12 },
  userBubble: { backgroundColor: '#B3E5FC', borderBottomRightRadius: 0 },
  aiBubble: { backgroundColor: '#e0e0e0', borderBottomLeftRadius: 0 },
  messageText: { fontSize: 16, color: '#000' },
  timeText: { fontSize: 12, color: '#666', marginTop: 4, alignSelf: 'flex-end' },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
