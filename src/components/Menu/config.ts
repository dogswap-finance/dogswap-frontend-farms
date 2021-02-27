import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.smiling.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.smiling.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x576A96697843618D2274B1bba41F8007ba2a939e',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/SmilingFinance/",
      },
      {
        label: "Docs",
        href: "https://docs.smiling.finance/",
      },
      {
        label: "Blog",
        href: "https://smilingfinance.medium.com/",
      },
    ],
  }
]

export default config
