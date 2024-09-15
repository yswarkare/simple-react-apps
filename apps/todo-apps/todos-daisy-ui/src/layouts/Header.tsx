import { Link } from 'react-router-dom';
import { HeaderItem } from '../models';

type Props = {
  items: Array<HeaderItem>,
  isLoggedIn: boolean
}

const Header = ({ items, isLoggedIn }: Props) => {
  return (
    <div className='w-fit flex flex-col justify-center item-center'>
      <ul className='w-fit p-2 gap-2 flex flex-row justify-around'>
        {items.map(
          ({ label, path, isPublic }) =>
            (isPublic || isLoggedIn) && (
              <li key={path} className='w-fit h-full flex px-2 py-1 rounded-md text-center'>
                <Link to={path} className='w-fit h-fit btn btn-info text-lg'>
                  {label}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Header;
