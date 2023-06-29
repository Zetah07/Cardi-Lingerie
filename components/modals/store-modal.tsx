"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return(
    <Modal
        title="Tienda"
        description="Añadir una nueva tienda para gestionar productos y categorías"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Formulario para crear una tienda en el futuro
        </Modal>
    );
}