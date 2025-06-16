// AddBuoyModal.component.tsx
import React, { useState } from 'react';
import { Modal, Text, Pressable, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from "../styles/components/Modal.styles";
import ToastService from '../services/alerts/alert';
import { createNewBuoys } from '../utils/boias/createNewBuoys';

type Props = {
  visible: boolean;
  onClose: () => void;
  onCreated: () => void;
};

export default function AddBuoyModal({ visible, onClose, onCreated }: Props) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tempo, setTempo] = useState(0);

  React.useEffect(() => {
    if (!visible) {
      setNome("");
      setDescricao("");
      setTempo(0);
    }
  }, [visible]);

  const handleCreateBuoy = async () => {

    if (!nome || !descricao ) {
      ToastService.info(
        "Informação",
        "Por favor, preencha todos os campos antes de enviar."
      );
      return;
    }

    try {
      const buoy = {
        name: nome,
        description: descricao,
        frequencyAtTime: tempo,
      };

      const result = await createNewBuoys(buoy);

      if (result !== null) {
        onClose();
        ToastService.success(
          "Sucesso!",
          `Boia ${nome} criada com sucesso!`
        );
        onCreated();
      }
    } catch (error) {
      console.error("Erro ao criar boia:", error);
      ToastService.error("Erro", "Erro ao criar boia");
    }
  }


  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
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

            <Text style={styles.title}>Adicionar Nova Boias</Text>
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

            <Pressable style={styles.submitButton} onPress={handleCreateBuoy}>
              <Text style={styles.submitButtonText}>Cadastrar</Text>
            </Pressable>
          </Pressable>
        </BlurView>
      </Pressable>
    </Modal>
  );
}