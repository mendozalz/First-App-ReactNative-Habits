import { useThemeColor } from "@/hooks/use-theme-color";
import { View, Text, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

export default function ProfileHeader({ name, role }: { name: string; role: string }) {
  const backgroundColor = useThemeColor({}, "surface");
  const primaryColor = useThemeColor({}, "primary");
  const onPrimaryColor = useThemeColor({}, "onPrimary");
  const textColor = useThemeColor({}, "text");
  const mutedColor = useThemeColor({}, "muted");

  return (
    <View style={[styles.card, { backgroundColor, marginTop: 50 }]}>
      <View style={[styles.avatar, { backgroundColor: primaryColor }]}>
        <ThemedText style={[styles.avatarTxt, { color: onPrimaryColor }]}>
          {name.charAt(0).toUpperCase()}
        </ThemedText>
      </View>
      <View style={[styles.card, { backgroundColor: backgroundColor, width: '50%' }]}>
        <View>
          <ThemedText style={[styles.name, { color: textColor }]}>{name}</ThemedText>
          <ThemedText style={[styles.role, { color: mutedColor }]}>{role}</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    gap: 12,
    width: '100%',
    justifyContent: 'flex-start'
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTxt: {
    fontWeight: "700",
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  role: {
    fontSize: 12,
  },
});
