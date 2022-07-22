import styles from './Siderbar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h1>Sidebar</h1>
    </aside>
  );
}

export default Sidebar;
