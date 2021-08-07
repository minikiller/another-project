export interface BaseData {
  ProductID: number
}

export interface Product extends BaseData {
  ProductName: string
  UnitPrice: number
  UnitsInStock: number
}

export interface ProductSelect {
  selected: boolean
}
