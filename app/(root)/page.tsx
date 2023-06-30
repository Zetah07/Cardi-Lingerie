"use client";

import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';


const SetupPage =() => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div className="">
            <h1>Setup Page</h1>
        </div>
    );
}

export default SetupPage;