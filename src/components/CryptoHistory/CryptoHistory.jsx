import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { convertDate } from 'helpers/formatDate';
// import format from 'date-fns/format';

export const CryptoHistory = ({ list }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {list.map(item => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{convertDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
