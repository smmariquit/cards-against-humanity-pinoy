import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ACCENT = '#FACC15';
const PRIVACY_URL = 'https://uplbtools.me/privacy';
const TERMS_URL = 'https://uplbtools.me/terms';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.kicker}>Party card game</Text>
      <Text style={styles.title}>CAH Pinoy</Text>
      <Text style={styles.subtitle}>
        Cards Against Humanity-style game with Filipino humor. Pass-and-play coming soon.
      </Text>
      <View style={styles.pill}>
        <Text style={styles.pillText}>Expo scaffold ready</Text>
      </View>
      <View style={styles.legalRow}>
        <TouchableOpacity onPress={() => Linking.openURL(PRIVACY_URL)}>
          <Text style={styles.legalLink}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.legalSep}>·</Text>
        <TouchableOpacity onPress={() => Linking.openURL(TERMS_URL)}>
          <Text style={styles.legalLink}>Terms</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    paddingHorizontal: 28,
    paddingTop: 72,
    paddingBottom: 32,
  },
  kicker: {
    color: ACCENT,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 12,
  },
  subtitle: {
    color: '#A1A1AA',
    fontSize: 17,
    lineHeight: 26,
    maxWidth: 340,
  },
  pill: {
    marginTop: 32,
    alignSelf: 'flex-start',
    backgroundColor: '#18181B',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#27272A',
  },
  pillText: {
    color: '#E4E4E7',
    fontSize: 14,
    fontWeight: '600',
  },
  legalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 24,
  },
  legalLink: {
    color: '#71717A',
    fontSize: 13,
  },
  legalSep: {
    color: '#52525B',
    fontSize: 13,
    marginHorizontal: 8,
  },
});
