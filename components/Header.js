import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Header = ({
  title,
  menu,
  rotateleft,
  rotateright,
  left,
  right,
  cancle,
  done,
  closeX,
  close
}) => {

  return (
    <>
      {menu && (
        <View style={styles.menuHeaderContainer}>
          <TouchableOpacity>
            <Feather name={menu} size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.menuHeaderText}>{title}</Text>
        </View>
      )}
      {rotateleft && rotateright && (
        <View style={styles.cropHeaderContainer}>
          <TouchableOpacity onPress={close}>
            <Text style={styles.cancleText}>Cancle</Text>
          </TouchableOpacity>

          <View style={styles.rotateView}>
            <TouchableOpacity onPress={left}>
              {/* 'raoate-ccw' */}
              <Feather name={rotateleft} size={30} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity onPress={right}>
              {/* rotate-cw */}
              <Feather name={rotateright} size={30} color="#fff" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={done}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      )}
          {closeX && (
      
      <View style={styles.extractTextHeaderContainer}>
      <Text style={styles.extractTextHeaderText}>Your Extracted Text</Text>
        <TouchableOpacity onPress={close}>
        <Feather name={closeX} size={30} color="#fff" />
      </TouchableOpacity>
    </View>

    )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  menuHeaderContainer: {
    width: "100%",
    backgroundColor: "#8145DB",
    height: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  menuHeaderText: {
    width: "80%",
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 28.13,
    textAlign: "center",
  },
  cropHeaderContainer: {
    width: "100%",
    backgroundColor: "#8145DB",
    height: 100,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  rotateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  cancleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 28.13,
  },
  doneText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 28.13,
  },
  extractTextHeaderContainer: {
    width: "100%",
    backgroundColor: "#8145DB",
    height: 100,
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  extractTextHeaderText: {
    width: "95%",
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 28.13,
    textAlign: "center",
  },
});
