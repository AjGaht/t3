import React, { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("91f52d5f-63d1-40bb-9a7a-bd831b3e80cb");
    }, []);
    
    return null;
}

export default CrispChat;