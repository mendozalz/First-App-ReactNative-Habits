import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    titulo: string;
    streak: number;
    isComplete: boolean;
    priority?: 'low' | 'medium' | 'high';
};

const priorityStyles = {
    low: { backgroundColor: '#aaee8bff', color: '#000' },
    medium: { backgroundColor: '#f5911fff', color: '#000' },
    high: { backgroundColor: '#f19696ff', color: '#000' },
} as const;

export default function AvidCard({ titulo, streak, isComplete, priority = 'high' }: Props) {
    const p = priorityStyles[priority];
    return (
        <View style={[styles.card, isComplete ? styles.completada : null]}>
            <View style={styles.row}>
                <Text style={styles.titulo}>{titulo}</Text>
                {isComplete && <Text style={[styles.check, { marginBottom: 8 }]}>✓</Text>}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.streak}>{streak} días de racha</Text>
                <Text style={[styles.badge, { backgroundColor: p.backgroundColor, color: p.color }]}>{priority}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { padding: 16, borderRadius: 12, backgroundColor: '#8d8d8dff' },
    completada: { backgroundColor: '#d4d8d5ff' },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titulo: { color: '#494848ff', fontWeight: '600' },
    check: { color: '#1ff50cff', fontSize: 20, fontWeight: 'bold' },
    streak: { color: '#242323ff', marginTop: 8 },
    badge: { padding: 4, borderRadius: 8, fontSize: 12, fontWeight: 'bold' },
});