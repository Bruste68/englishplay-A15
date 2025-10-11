// ✅ components/ResumeDialog.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useLanguage } from '../hooks/useLanguage'; // ✅ 다국어 훅 추가

interface ResumeDialogProps {
  visible: boolean;
  onContinue: () => void;
  onRestart?: () => void;
  onExit?: () => void;
}

export const ResumeDialog: React.FC<ResumeDialogProps> = ({
  visible,
  onContinue,
  onRestart,
  onExit,
}) => {
  const { t } = useLanguage(); // ✅ 언어 가져오기

  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          {/* ✅ 다국어 텍스트 적용 */}
          <Text style={styles.title}>{t.resumeDialog?.title || 'Continue Practice?'}</Text>
          <Text style={styles.desc}>
            {t.resumeDialog?.desc ||
              'You were practicing before the app was paused. Would you like to continue?'}
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onContinue} style={[styles.btn, styles.continue]}>
              <Text style={styles.btnText}>{t.resumeDialog?.continue || 'Continue'}</Text>
            </TouchableOpacity>

            {/* 필요 시 재시작/종료 버튼 활성화 */}
            {onRestart && (
              <TouchableOpacity onPress={onRestart} style={[styles.btn, styles.restart]}>
                <Text style={styles.btnText}>{t.resumeDialog?.restart || 'Restart'}</Text>
              </TouchableOpacity>
            )}
            {onExit && (
              <TouchableOpacity onPress={onExit} style={[styles.btn, styles.exit]}>
                <Text style={styles.btnText}>{t.resumeDialog?.exit || 'Exit'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  continue: { backgroundColor: '#4CAF50' },
  restart: { backgroundColor: '#2196F3' },
  exit: { backgroundColor: '#E53935' },
  btnText: { color: '#fff', fontWeight: '600' },
});
