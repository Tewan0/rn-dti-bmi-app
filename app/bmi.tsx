import React, { useState } from "react";
import {
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBmi = () => {
    Keyboard.dismiss();
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setBmiCategory("น้ำหนักต่ำกว่าเกณฑ์");
      } else if (bmiValue < 25) {
        setBmiCategory("น้ำหนักปกติ");
      } else if (bmiValue < 30) {
        setBmiCategory("น้ำหนักเกิน");
      } else {
        setBmiCategory("อ้วน");
      }
    }
  };

  const resetBmi = () => {
    Keyboard.dismiss();
    setHeight("");
    setWeight("");
    setBmi(0);
    setBmiCategory("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/bmiLogo.png")}
          style={styles.imgLogo}
        />
        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>ป้อนค่าส่วนสูง (ซม.)</Text>
          <TextInput 
            style={styles.textInput} 
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            placeholder="เช่น 170"
          />
          <Text style={styles.labelInput}>ป้อนค่าน้ําหนัก (กก.)</Text>
          <TextInput 
            style={styles.textInput} 
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholder="เช่น 60"
          />
          {/* ปุ่มคำนวณและปุ่มรีเซ็ต ในแนวนอน */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity style={styles.btnReset} onPress={resetBmi}>
              <Text style={styles.textBtn}>รีเซ็ตค่า</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalculate} onPress={calculateBmi}>
              <Text style={styles.textBtn}>คำนวณ BMI</Text>
            </TouchableOpacity>
          </View>
          {/* ส่วนของการแสดงผล */}
          <View style={styles.cardResult}>
            <Text style={{ fontSize: 20, fontFamily: "prompt_700Bold", color: "#000000"}}>BMI</Text>
            <Text style={{ fontSize: 40, fontFamily: "prompt_700Bold", color: "#2d98e4"}}>{bmi.toFixed(2)}</Text>
            <Text style={{ fontSize: 20, fontFamily: "prompt_700Bold", color: "#000000"}}>{bmiCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardResult: {
    marginTop: 25,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.35,
  },
  textBtn: {
    color: "#ffffff",
    fontFamily: "prompt_700Bold",
    fontSize: 13,
  },
  btnCalculate: {
    flex: 2,
    backgroundColor: "#2d98e4",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  btnReset: {
    flex: 1,
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 13,
    marginBottom: 10,
  },
  labelInput: {
    fontFamily: "prompt_700Bold",
    fontSize: 16,
    marginBottom: 10,
  },
  cardInput: {
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    marginTop: 20,
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E6F4FE",
  },
});
