import { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  symbol: string;
  price: number;
}
export const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
];

export const coinList: DataType[] = [
  {
    key: '1',
    name: '비트코인',
    symbol: 'KRW-BTC',
    price: 0,
  },
  {
    key: '2',
    name: '이더리움',
    symbol: 'KRW-ETH',
    price: 0,
  },
  {
    key: '3',
    name: '리또속',
    symbol: 'KRW-XRP',
    price: 0,
  },
];
