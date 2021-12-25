export interface VolumeInfo {
    title: string;
    authors: Array<string>;
}

export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
}
