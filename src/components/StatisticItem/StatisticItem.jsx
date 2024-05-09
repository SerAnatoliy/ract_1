import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ head, total, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
        {icon}
      </IconContext.Provider>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{head}</StatisticText>
    </StatisticBox>
  );
};
