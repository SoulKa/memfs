import type {FsSynchronousApi} from "../node/types";
import type {SnapshotNodeType} from "./constants";

export interface SnapshotOptions {
  fs: FsSynchronousApi;
  path?: string;
  separator?: '/' | '\\';
}

export type SnapshotNode =
  | FolderNode
  | FileNode
  | SymlinkNode;

export type FolderNode = [
  type: SnapshotNodeType.Folder,
  meta: FolderMetadata,
  entries: {[child: string]: SnapshotNode},
];

export interface FolderMetadata {}

export type FileNode = [
  type: SnapshotNodeType.File,
  meta: FileMetadata,
  data: Uint8Array,
];

export interface FileMetadata {}

export type SymlinkNode = [
  type: SnapshotNodeType.Symlink,
  meta: SymlinkMetadata,
];

export interface SymlinkMetadata {
  target: string,
}
