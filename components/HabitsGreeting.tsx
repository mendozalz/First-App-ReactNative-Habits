// components/HabitGreeting.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Greeting({ nombre }: { nombre: string }) {
  const fecha = new Date();
  // Ejemplo de saludo condicional basado en la hora.
  const horas = fecha.getHours();
  const saludo = horas < 12 ? 'Buenos días' : horas < 18 ? 'Buenas tardes' : 'Buenas noches';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{saludo}, {nombre}.</Text>
      <Text style={styles.fecha}>{fecha.toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, width: '100%' },
  titulo: { fontSize: 18, fontWeight: '600' },
  fecha: { color: '#666', marginTop: 4 },
});