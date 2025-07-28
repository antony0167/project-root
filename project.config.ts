export type CommunicationType = 'postMessage' | 'customEvent' | 'broadcastChannel';

export const AppConfig = {
    communicationMethod: 'customEvent' as CommunicationType,
    microFrontendCount: 20,
    messageFrequency: 500,
    enableLogging: true
};
