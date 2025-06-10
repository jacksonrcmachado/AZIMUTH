// EditBuoyModal.component.tsx
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import styles from "../styles/components/Modal.styles";
import ToastService from "../services/alerts/alert";
import { updateBuoy } from "../utils/boias/updateBuoys";

type Props = {
  visible: boolean;
  onClose: () => void;
  buoyName: string;
  buoyDescription: string;
  buoyFrequency?: number;
  boiaId: string;
  onUpdated?: () => void;
};

export default function EditBuoyModal({
  visible,
  onClose,
  boiaId,
  buoyName,
  buoyDescription,
  buoyFrequency,
  onUpdated,
}: Props) {
  const [nome, setNome] = useState(buoyName);
  const [descricao, setDescricao] = useState(buoyDescription);
  const [tempo, setTempo] = useState(buoyFrequency?.toString() || "");

  const handleUpdate = async () => {
    const freqValue = tempo ? parseFloat(tempo) : undefined;

    if (tempo && isNaN(freqValue as number)) {
      ToastService.error("Erro", "Frequência deve ser um número válido.");
      return;
    }

    const result = await updateBuoy({
      boiaId,
      name: nome,
      description: descricao,
      frequencyAtTime: freqValue,
    });

    if (result) {
      ToastService.success("Sucesso", `Bóia ${nome} atualizada com sucesso!`);
      onUpdated?.(); // Usando operador de encadeamento opcional
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <BlurView intensity={5} tint="dark" style={styles.blur}>
          <Pressable
            style={styles.modalContainer}
            onPress={(e) => e.stopPropagation()}
          >
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </Pressable>

            <Text style={styles.title}>
              Editar bóia <Text style={styles.buoyName}>{buoyName}</Text>
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nome da bóia"
              placeholderTextColor="#a5a4a4"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="Descrição"
              placeholderTextColor="#a5a4a4"
              value={descricao}
              onChangeText={setDescricao}
            />

            <TextInput
              style={styles.input}
              placeholder="Frequência (ms)"
              placeholderTextColor="#a5a4a4"
              keyboardType="numeric"
              value={tempo}
              onChangeText={setTempo}
            />

            <Pressable style={styles.submitButton} onPress={handleUpdate}>
              <Text style={styles.submitButtonText}>Atualizar</Text>
            </Pressable>
          </Pressable>
        </BlurView>
      </Pressable>
    </Modal>
  );
}
