import { UserInfoMenu } from '../UserInfoMenu/UserInfoMenu';

import css from './MobileSidebar.module.css';

export default function MobileSidebar() {
  return (
    <div className={css.sidebarBox}>
      <UserInfoMenu />
    </div>
  );
}
