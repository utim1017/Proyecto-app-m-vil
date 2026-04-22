import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Definición de las opciones del menú para facilitar el mantenimiento
const MENU_OPTIONS = [
  {
    id: '1',
    title: 'ESTABLECIMIENTOS',
    subtitle: '12 registrados',
    icon: 'business',
    color: '#1E838F', // Teal institucional
    route: '/establecimientos',
  },
  {
    id: '2',
    title: 'TARIFAS',
    subtitle: 'Planes 2024',
    icon: 'document-text',
    color: '#E8702D', // Naranja de acento
    route: '/tarifas',
  },
  {
    id: '3',
    title: 'MENSAJES',
    subtitle: '3 nuevos',
    icon: 'chatbubbles',
    color: '#5D5FEF', // Violeta
    route: '/notificaciones',
  },
  {
    id: '4',
    title: 'MI PERFIL',
    subtitle: 'Configuración',
    icon: 'person',
    color: '#27AE60', // Verde
    route: '/perfil',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  // Función para obtener la fecha actual formateada
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    return new Date().toLocaleDateString('es-ES', options);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.imgur.com/8Km9tLL.jpg' }} 
      style={styles.background}
      blurRadius={10}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          
          {/* SECCIÓN SUPERIOR: Bienvenida */}
          <View style={styles.header}>
            <View>
              <Text style={styles.welcomeText}>¡Hola, Alejandro!</Text>
              <Text style={styles.dateText}>{getCurrentDate()}</Text>
            </View>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => router.push('/')}
            >
              <Ionicons name="notifications-outline" size={26} color="white" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          {/* CUERPO: Grid de Acciones */}
          <View style={styles.gridContainer}>
            {MENU_OPTIONS.map((item) => (
              <TouchableOpacity 
                key={item.id}
                style={[styles.card, { backgroundColor: item.color }]}
                activeOpacity={0.8}
                onPress={() => router.push(item.route as any)}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.iconCircle}>
                    <Ionicons name={item.icon as any} size={24} color="white" />
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.5)" />
                </View>
                
                <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* SECCIÓN INFERIOR: Acción Principal */}
          <TouchableOpacity 
            style={styles.emergencyButton}
            activeOpacity={0.9}
            onPress={() => alert("Iniciando Protocolo de Protección")}
          >
            <View style={styles.emergencyIcon}>
              <Ionicons name="shield-checkmark" size={24} color="white" />
            </View>
            <View style={styles.emergencyTextContainer}>
              <Text style={styles.emergencyTitle}>SISTEMA OPERATIVO</Text>
              <Text style={styles.emergencySubtitle}>PC&B Izúcar de Matamoros</Text>
            </View>
          </TouchableOpacity>

        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.4)', // Capa oscura para legibilidad
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 35,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    color: 'white',
    letterSpacing: -0.5,
  },
  dateText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  notificationDot: {
    position: 'absolute',
    top: 12,
    right: 14,
    width: 8,
    height: 8,
    backgroundColor: '#E8702D',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#1E293B',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 55) / 2, // Cálculo dinámico para dos columnas con gap
    aspectRatio: 0.95,
    borderRadius: 28,
    padding: 20,
    marginBottom: 15,
    justifyContent: 'space-between',
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    // Sombra para Android
    elevation: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconCircle: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 10,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
  },
  emergencyButton: {
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  emergencyIcon: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 16,
  },
  emergencyTextContainer: {
    marginLeft: 15,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
  },
  emergencySubtitle: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  }
});