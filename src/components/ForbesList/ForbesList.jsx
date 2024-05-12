import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Leader</TitleTop>
          <TitleBottom>Board</TitleBottom>
        </BoardTitle>
      </BoardHeader>
      <LeaderBoardProfiles>
        {list.map(item => (
          <ForbesListItem key={item.id} {...item} />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
