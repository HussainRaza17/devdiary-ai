export class StorageService {
    private storage: Map<string, any>;

    constructor() {
        this.storage = new Map<string, any>();
    }

    saveData(key: string, value: any): void {
        this.storage.set(key, value);
    }

    retrieveData(key: string): any | null {
        return this.storage.has(key) ? this.storage.get(key) : null;
    }

    deleteData(key: string): void {
        this.storage.delete(key);
    }

    clearStorage(): void {
        this.storage.clear();
    }
}