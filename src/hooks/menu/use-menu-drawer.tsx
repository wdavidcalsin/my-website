import { useState } from 'react';

type PropEvent = React.KeyboardEvent | React.MouseEvent;

type DrawerHook = [boolean, () => void, (event: PropEvent) => void];

const useMenuDrawer = (): DrawerHook => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDrawerClose = (event: PropEvent): void => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(false);
  };

  return [isOpen, toggleDrawer, handleDrawerClose];
};

export default useMenuDrawer;
