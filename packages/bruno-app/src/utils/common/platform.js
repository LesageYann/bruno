import trim from 'lodash/trim';
import path from 'path';
import slash from './slash';

export const isElectron = () => {
  if (!window) {
    return false;
  }

  return window.ipcRenderer ? true : false;
};

export const isLocalCollection = (collection) => {
  return collection.pathname ? true : false;
};

export const resolveRequestFilename = (name) => {
  return `${trim(name)}.bru`;
};

export const getSubdirectoriesFromRoot = (rootPath, pathname) => {
  // convert to unix style path
  pathname = slash(pathname);
  rootPath = slash(rootPath);

  const relativePath = path.relative(rootPath, pathname);
  return relativePath ? relativePath.split(path.sep) : [];
};

export const getDirectoryName = (pathname) => {
  // convert to unix style path
  pathname = slash(pathname);

  return path.dirname(pathname);
};
