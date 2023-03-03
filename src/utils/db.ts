import {
  get as _get,
  getMany as _getMany,
  set as _set,
  setMany as _setMany,
  update as _update,
  del as _del,
  delMany as _delMany,
  clear as _clear,
  entries as _entries,
  keys as _keys,
  values as _values,
  createStore,
} from 'idb-keyval'

const customStore = createStore('gbfApp', 'GoldBrick')

export default {
  get(key: IDBValidKey) {
    return _get(key, customStore)
  },
  getMany(keys: IDBValidKey[]) {
    return _getMany(keys, customStore)
  },
  set(key: IDBValidKey, val: any) {
    return _set(key, val, customStore)
  },
  setMany(entries: [IDBValidKey, any][]) {
    return _setMany(entries, customStore)
  },
  update(key: IDBValidKey, updater: (oldValue: any) => any) {
    return _update(key, updater, customStore)
  },
  del(key: IDBValidKey) {
    return _del(key, customStore)
  },
  delMany(keys: IDBValidKey[]) {
    return _delMany(keys, customStore)
  },
  clear() {
    return _clear(customStore)
  },
  entries() {
    return _entries(customStore)
  },
  keys() {
    return _keys(customStore)
  },
  values() {
    return _values(customStore)
  },
}
