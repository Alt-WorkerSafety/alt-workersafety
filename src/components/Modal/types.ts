export interface ModalProps {
    type: 'alarm' | 'add';
    content: string;
    isOpened?: boolean;
    onClose: () => void;
}