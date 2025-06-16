// Buoy.tsx
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import EditBuoyModal from "./EditBuoyModal.component";
import styles from "../styles/components/Buoy.styles";
import LocationData from "../types/LocationData.type";

function Buoy({
  navigation,
  locationData,
  focus,
}: {
  navigation: any;
  locationData: LocationData;
  focus: (buoy: LocationData) => void;
}) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const buoy = locationData.buoy;

  return (
    <>
      <EditBuoyModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        buoyName={buoy.name ?? ""}
        buoyDescription={buoy.description ?? ""}
        buoyFrequency={buoy.frequencyAtTime}
        boiaId={buoy.id}
        onUpdated={() => {
          // Aqui você pode atualizar a lista de bóias ou chamar um fetch novamente.
          setIsEditModalVisible(false);
        }}
      />

      <Pressable
        style={({ pressed }) => [styles.buoy, { opacity: pressed ? 0.6 : 1 }]}
        onPress={() => focus(locationData)}
        onLongPress={() => setIsEditModalVisible(true)}
      >
        <View style={styles.leftComponents}>
          {!buoy.isDeleted ? (
            <View style={styles.GreenAlert} />
          ) : (
            <View style={styles.redAlert} />
          )}
          <Text style={styles.name}>{buoy.name}</Text>
        </View>
        <View style={styles.rightComponents}>
          <Pressable
            onPress={() => setIsEditModalVisible(true)}
            style={styles.button}
          >
            <Image
              source={require("../assets/config.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </Pressable>
        </View>
      </Pressable>
    </>
  );
}

export default Buoy;
