import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function RegisterScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    nombres: "",
    apellidos: "",
    celular: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.password) {
      Alert.alert("Error", "Por favor completa los campos obligatorios.");
      return;
    }
    
    console.log("Datos capturados:", formData);
    Alert.alert(
      "Registro Exitoso", 
      `Bienvenido ${formData.nombres}.\nUsuario: ${formData.username}`
    );
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#2980B9', '#FFFFFF']}
        style={styles.gradientBackground}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContainer} 
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.registerCard}>
              <View style={styles.headerContainer}>
                <Image
                  source={require('@/assets/images/Pcblogo.png')}
                  style={styles.smallLogo}
                />
                <ThemedText style={styles.cardTitle}>Iniciar sesión</ThemedText>
                <ThemedText style={styles.cardSubtitle}>Ingresa tus datos para continuar</ThemedText>
              </View>

              <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                  <ThemedText style={styles.label}>Usuario / Correo</ThemedText>
                  <TextInput
                    style={styles.input}
                    placeholder="Ej: admin@izucar.gob.mx"
                    placeholderTextColor="#94A3B8"
                    autoCapitalize="none"
                    onChangeText={(val) => handleChange("username", val)}
                  />
                </View>

               

                

                <View style={styles.inputGroup}>
                  <ThemedText style={styles.label}>Contraseña</ThemedText>
                  <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    secureTextEntry
                    placeholderTextColor="#94A3B8"
                    onChangeText={(val) => handleChange("password", val)}
                  />
                </View>

                <TouchableOpacity 
                  style={styles.primaryButton}
                   onPress={() =>{
                router.push('/Menu')
                } }
                >
                  <ThemedText style={styles.buttonText}>Registrar Cuenta</ThemedText>
                </TouchableOpacity>

                
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  registerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 25,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  smallLogo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1E293B',
  },
  row: {
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#377123',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#1E838F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#64748B',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});