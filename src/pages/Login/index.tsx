import * as React from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { BookOpen, AtSign, Key } from "react-native-feather";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../../services/firebase";
import { loginProps } from "../../../routes";
import { pageStyles } from "./styles";

const LoginScreen: React.FC<any> = ({ navigation }: loginProps) => {
  const [email, setEmail] = React.useState("one@test.com");
  const [password, setPassword] = React.useState("123456");
  const [isLoading, setLoading] = React.useState(false);

  const tryLogin = () => {
    if (email.length < 6) {
      Alert.alert("Campo email invalido.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Campo senha invalido.");
      return;
    }
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        navigation.push("home");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.code);
        if (error.code == "auth/invalid-email") {
          Alert.alert("Email Invalido.");
        } else if (error.code == "auth/wrong-password") {
          Alert.alert("Senha Incorreta.");
        } else if (error.code == "auth/user-not-found") {
          Alert.alert("Usuário não cadastrado.");
        } else {
          Alert.alert("Não foi possível logar.");
        }
      });
  };

  return (
    <LinearGradient
      style={pageStyles.container}
      colors={["#161616", "#595959"]}
    >
      <View style={pageStyles.container}>
        <BookOpen width={150} height={150} color={"#735E5E"} />
        <Text style={{ color: "#735E5E", fontSize: 30 }}>Black Notes</Text>
      </View>
      <View style={pageStyles.formContainer}>
        <View style={pageStyles.inputBox}>
          <View style={pageStyles.inputIcon}>
            <AtSign
              width={30}
              height={30}
              strokeWidth={1.5}
              color={"#262626"}
            />
          </View>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
            placeholderTextColor={"#616161"}
            style={pageStyles.textInput}
          />
        </View>
        <View style={pageStyles.inputBox}>
          <View style={pageStyles.inputIcon}>
            <Key width={30} height={30} strokeWidth={1.5} color={"#262626"} />
          </View>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="senha"
            placeholderTextColor={"#616161"}
            style={pageStyles.textInput}
          />
        </View>
        <TouchableOpacity style={pageStyles.loginButton} onPress={tryLogin}>
          {isLoading ? (
            <ActivityIndicator color={"#616161"} size={"large"} />
          ) : (
            <Text style={pageStyles.loginTextButton}>Log in</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
