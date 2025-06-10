import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../styles/components/Modal.styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  buoyName: string;
};

export default function AddBuoyModal({ visible, onClose, buoyName }: Props) {
  const [nome, setNome] = useState(buoyName);
  const [descricao, setDescricao] = useState('');
  const [tempo, setTempo] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <BlurView intensity={6} tint="dark" style={styles.blur}>
          <Pressable style={styles.modalContainer} onPress={e => e.stopPropagation()}>
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
              placeholder="Tempo de Atualização (segundos)"
              placeholderTextColor="#a5a4a4"
              value={tempo}
              onChangeText={setTempo}
            />

            <Pressable style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Salvar</Text>
            </Pressable>
          </Pressable>
        </BlurView>
      </Pressable>
    </Modal>
  );
}