// assets
import { IconWallet } from '@tabler/icons';
// constant
const icons = { IconWallet };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const wallet = {
  id: 'wallet',
  title: 'Wallet',
  type: 'group',
  children: [
    {
      id: 'wallet-1',
      title: 'Wallet',
      type: 'item',
      url: '/wallet',
      icon: icons.IconWallet,
      breadcrumbs: false
    }
  ]
};

export default wallet;
