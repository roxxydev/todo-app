import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
    id: 'todo-storage',
    encryptionKey: 'S0m3eNcrypt3dK3y',
});

export const mmkvStorage = {
    setItem: (key: string, value: string) => storage.set(key, value),
    getItem: (key: string) => storage.getString(key) ?? null,
    removeItem: (key: string) => storage.delete(key),
};
