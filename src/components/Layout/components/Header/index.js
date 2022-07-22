import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import images from '../../../../assets/images';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <Tippy
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                Ket qua
              </div>
            )}
          >
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Tippy>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
