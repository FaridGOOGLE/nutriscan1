import { ScrollView, StyleSheet, Text, View } from 'react-native';

const highlights = [
  { label: 'Scan score', value: '86/100' },
  { label: 'Products checked', value: '24' },
  { label: 'Weekly average', value: '78' },
];

export default function AppNavigator() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kicker}>NutriScan</Text>
        <Text style={styles.title}>Food insights at a glance</Text>
        <Text style={styles.subtitle}>
          Scan packaged foods, compare nutrition signals, and keep track of
          healthier choices over time.
        </Text>
      </View>

      <View style={styles.scorePanel}>
        <Text style={styles.scoreLabel}>Current product</Text>
        <Text style={styles.score}>A</Text>
        <Text style={styles.scoreText}>
          Strong nutrition profile with low sugar and balanced ingredients.
        </Text>
      </View>

      <View style={styles.metrics}>
        {highlights.map((item) => (
          <View key={item.label} style={styles.metricCard}>
            <Text style={styles.metricValue}>{item.value}</Text>
            <Text style={styles.metricLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7faf8',
    padding: 24,
    paddingTop: 64,
  },
  header: {
    marginBottom: 28,
  },
  kicker: {
    color: '#1f7a4d',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  title: {
    color: '#15251c',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    marginBottom: 12,
  },
  subtitle: {
    color: '#53635a',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 560,
  },
  scorePanel: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#dfe8e2',
    borderRadius: 8,
    borderWidth: 1,
    padding: 28,
    shadowColor: '#0f2418',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },
  scoreLabel: {
    color: '#5e6f65',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  score: {
    color: '#1f7a4d',
    fontSize: 76,
    fontWeight: '900',
    lineHeight: 84,
  },
  scoreText: {
    color: '#3e4d44',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
    maxWidth: 360,
    textAlign: 'center',
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  metricCard: {
    backgroundColor: '#edf6f0',
    borderRadius: 8,
    flexGrow: 1,
    minWidth: 140,
    padding: 18,
  },
  metricValue: {
    color: '#15251c',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  metricLabel: {
    color: '#5e6f65',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
