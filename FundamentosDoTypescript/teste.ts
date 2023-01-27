function sum(a, b) {
  return a + b;
}

console.log(sum("1", "2"));

{
  /* <S> → Representando State
<T> → Representando Type 
<K> → Representando Key 
<V> → Representando Value 
<E> → Representando Element */
}

type ConstProp = {
  const1: number;
  const2?: number;
};

interface ConstPropsS extends ConstProp {
  const3: number;
  const4: number;
}

function testeDeConst(const1: ConstPropsS) {}

function testeDeConst2({ const3, const4, const1, const2 }: ConstPropsS) {}

type User = {
  id: number;
  name: string;
};

type Char = {
  nickname: string;
  level: number;
};

type PlayerInfo = User & Char;
// ouu
// type PlayerInfo = User  & {
//   nickname: string,
//   level: number
// }

let info: PlayerInfo = {
  id: 1,
  name: "João Inácio",
  nickname: "birobirobiro",
  level: 50,
};

// Fazendo união com interfaces
// interface IAccount extends IUser, IPayment {}
