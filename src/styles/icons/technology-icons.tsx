import { IIconsPropsMakeStyles } from '@/types';
import { makeStyles } from '@mui/styles';

export const useStyledTechnologyIcons = makeStyles({
  root: {
    color: (props: IIconsPropsMakeStyles) => props.color,
    fontSize: '2rem',
  },
});
