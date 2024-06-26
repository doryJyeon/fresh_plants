// 장바구니 데이터는 localstorage로 보관
export interface CartStoragePtops {
  [id: string]: CartStorageItem;
}

export interface CartStorageItem {
  name: string
  price: number
  count: number
}