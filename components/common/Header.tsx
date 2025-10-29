import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { Bell } from 'lucide-react-native';

interface HeaderProps {
  title: string;
  hasNotifications?: boolean;
  notificationCount?: number;
  onNotificationPress?: () => void;
}

export default function Header({
  title,
  hasNotifications = false,
  notificationCount = 0,
  onNotificationPress
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        {hasNotifications && onNotificationPress && (
          <TouchableOpacity 
            onPress={onNotificationPress}
            style={styles.notificationButton}
          >
            <Bell size={24} color={Colors.light.text} />
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        <Image 
          source={require('@/assets/images/applogo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Layout.spacing.xl + 10,
    paddingBottom: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: Colors.light.text,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.light.primary,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  logo: {
    width: 36,
    height: 36,
  },
});