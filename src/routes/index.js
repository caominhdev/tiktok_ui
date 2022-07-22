import Upload from '../pages/Upload';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { HeaderOnly } from '../components/Layout';
import Search from '../pages/Search';

const publicRoutes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
