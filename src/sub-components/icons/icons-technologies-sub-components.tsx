import { IconList } from '@/constants';
import { StyledTechnologyIcons } from '@/styles';
import { IPropsIcon } from '@/types';
import { IoIosCreate } from 'react-icons/io';

const IconsTechnologiesSubComponents: React.FC<IPropsIcon> = ({ name }) => {
  const icon = IconList[name]?.icon;
  const color = IconList[name]?.color;

  if (!icon || !color) {
    return <StyledTechnologyIcons as={IoIosCreate} color={'black'} />;
  }

  return <StyledTechnologyIcons as={icon} color={color} />;
};

export default IconsTechnologiesSubComponents;
