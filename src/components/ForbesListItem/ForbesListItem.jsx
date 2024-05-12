import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  return (
    <ForbesItem>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {capitalStatus(isIncrease)}
      </Capital>
    </ForbesItem>
  );
};

const capitalStatus = isIncrease => {
  if (isIncrease) {
    return <FcBullish color={theme.colors.success} size={22} />;
  }

  return <FcBearish color={theme.colors.error} size={22} />;
};
