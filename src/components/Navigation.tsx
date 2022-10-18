import { Navbar } from 'flowbite-react';
import { ComponentProps, FC } from 'react';
import { useLinkClickHandler, useLocation } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <Navbar fluid rounded>
      <Brand />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/recipes">Recipes</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Link: FC<
  Omit<ComponentProps<typeof Navbar.Link>, 'href'> & { to: string }
> = ({ to, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const handleClick = useLinkClickHandler(to);

  return (
    <Navbar.Link {...props} href={to} onClick={handleClick} active={isActive} />
  );
};

const Brand: FC = () => {
  const handleClick = useLinkClickHandler('/');
  return (
    <Navbar.Brand href="/" onClick={handleClick}>
      <span className="self-center whitespace-nowarp text-xl font-semibold dark:text-white">
        <span aria-hidden="true" role="img" className="mr-2">
          ☕️
        </span>
        Coffee Guide
      </span>
    </Navbar.Brand>
  );
};
