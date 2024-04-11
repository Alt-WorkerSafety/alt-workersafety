export interface ModalProps {
    content: string;
    isOpened?: boolean;
    onClose: () => void;
}