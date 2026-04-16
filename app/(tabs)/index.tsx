import Habitcard from '@/components/Habitcards';
import HabitsGreeting from '@/components/HabitsGreeting';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '@/components/Screen';
import ProfileHeader from '@/components/Profileherder';




const habits = [
  { id: '1', titulo: 'Beber agua', streak: 3, isComplete: true },
  { id: '2', titulo: 'Leer', streak: 1, isComplete: false },
  { id: '3', titulo: 'Caminar', streak: 7, isComplete: true },
];

export default function Home() {
  return (
    <Screen>
      <ProfileHeader name="Lenin Mendoza" role="Dev" />
      <HabitsGreeting nombre="Ana" />
      {habits.map(h => (
        <Habitcard
          key={h.id}
          titulo={h.titulo}
          streak={h.streak}
          isComplete={h.isComplete}
        />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f6ff',
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',

  },
});
