/* ============================================
   FINSIGHT — MOCK DATA
   ============================================ */

window.FinanceData = {

  user: {
    name: 'Pratap',
    initials: 'P',
  },

  // -- Net Worth --
  netWorth: {
    total: 284520,
    changePercent: 3.2,
    assets: {
      total: 412800,
      breakdown: [
        { name: 'Checking Account', value: 12400 },
        { name: 'Savings Account', value: 45200 },
        { name: 'Investment Portfolio', value: 187600 },
        { name: 'Retirement (RRSP)', value: 98400 },
        { name: 'Real Estate Equity', value: 52000 },
        { name: 'Crypto', value: 17200 },
      ]
    },
    liabilities: {
      total: 128280,
      breakdown: [
        { name: 'Mortgage', value: 98000 },
        { name: 'Student Loans', value: 18200 },
        { name: 'Credit Card', value: 4080 },
        { name: 'Car Loan', value: 8000 },
      ]
    },
    trend: {
      labels: ['Apr 25','May 25','Jun 25','Jul 25','Aug 25','Sep 25',
               'Oct 25','Nov 25','Dec 25','Jan 26','Feb 26','Mar 26'],
      values: [248000,251400,256800,259200,261000,264500,
               268900,272100,275800,279400,281200,284520],
    }
  },

  // -- Portfolio --
  portfolio: {
    totalValue: 187600,
    todayChange: { amount: 1240, percent: 0.66 },
    totalReturn: { amount: 34200, percent: 22.3 },
    allocation: [
      { name: 'US Stocks', value: 78800, percent: 42, color: '#3B82F6' },
      { name: 'Intl Stocks', value: 28140, percent: 15, color: '#6366F1' },
      { name: 'Bonds', value: 37520, percent: 20, color: '#10B981' },
      { name: 'Crypto', value: 17200, percent: 9.2, color: '#F59E0B' },
      { name: 'REITs', value: 13160, percent: 7, color: '#EC4899' },
      { name: 'Cash', value: 12780, percent: 6.8, color: '#9CA3AF' },
    ],
    holdings: [
      { symbol: 'VOO', name: 'Vanguard S&P 500', shares: 55, price: 542.10, value: 29816, change: 0.5 },
      { symbol: 'VTI', name: 'Vanguard Total Stock', shares: 42, price: 284.50, value: 11949, change: 1.2 },
      { symbol: 'MSFT', name: 'Microsoft Corp', shares: 18, price: 468.20, value: 8428, change: 0.8 },
      { symbol: 'AAPL', name: 'Apple Inc', shares: 25, price: 248.30, value: 6208, change: -0.4 },
      { symbol: 'BTC', name: 'Bitcoin', shares: 0.18, price: 95556, value: 17200, change: 2.1 },
      { symbol: 'BND', name: 'Vanguard Total Bond', shares: 120, price: 72.40, value: 8688, change: -0.1 },
    ],
    performance: {
      labels: ['Apr 25','May 25','Jun 25','Jul 25','Aug 25','Sep 25',
               'Oct 25','Nov 25','Dec 25','Jan 26','Feb 26','Mar 26'],
      portfolio: [153400,156200,160800,162400,158900,164200,169800,174500,178200,182400,185100,187600],
      benchmark: [150000,153100,156400,158200,155800,160100,163800,167200,170400,173800,176200,178900],
    }
  },

  // -- Budget --
  budget: {
    monthlyBudget: 5200,
    totalSpent: 3847,
    categories: [
      { name: 'Housing', budget: 1800, spent: 1800, icon: '🏠', color: '#3B82F6' },
      { name: 'Food & Dining', budget: 800, spent: 620, icon: '🍽️', color: '#10B981' },
      { name: 'Transportation', budget: 400, spent: 310, icon: '🚗', color: '#6366F1' },
      { name: 'Utilities', budget: 300, spent: 275, icon: '💡', color: '#F59E0B' },
      { name: 'Entertainment', budget: 250, spent: 180, icon: '🎬', color: '#EC4899' },
      { name: 'Shopping', budget: 350, spent: 290, icon: '🛍️', color: '#F97316' },
      { name: 'Health & Fitness', budget: 200, spent: 120, icon: '💪', color: '#0D9488' },
      { name: 'Subscriptions', budget: 100, spent: 92, icon: '📱', color: '#8B5CF6' },
      { name: 'Personal', budget: 200, spent: 85, icon: '✨', color: '#6B7280' },
      { name: 'Savings Goal', budget: 800, spent: 75, icon: '🎯', color: '#14B8A6' },
    ]
  },

  // -- Spending Analytics --
  spending: {
    byCategory: [
      { name: 'Housing', amount: 1800, color: '#3B82F6' },
      { name: 'Food & Dining', amount: 620, color: '#10B981' },
      { name: 'Transportation', amount: 310, color: '#6366F1' },
      { name: 'Utilities', amount: 275, color: '#F59E0B' },
      { name: 'Shopping', amount: 290, color: '#F97316' },
      { name: 'Entertainment', amount: 180, color: '#EC4899' },
      { name: 'Health', amount: 120, color: '#0D9488' },
      { name: 'Other', amount: 252, color: '#9CA3AF' },
    ],
    monthlyTrends: {
      labels: ['Oct','Nov','Dec','Jan','Feb','Mar'],
      values: [4850, 5120, 5640, 4920, 4380, 3847],
    },
    recentTransactions: [
      { date: '2026-03-02', description: 'Whole Foods Market', category: 'Food & Dining', amount: -87.43 },
      { date: '2026-03-01', description: 'Netflix Subscription', category: 'Subscriptions', amount: -17.99 },
      { date: '2026-03-01', description: 'Shell Gas Station', category: 'Transportation', amount: -52.30 },
      { date: '2026-02-28', description: 'Salary Deposit', category: 'Income', amount: 6200.00 },
      { date: '2026-02-28', description: 'Mortgage Payment', category: 'Housing', amount: -1800.00 },
      { date: '2026-02-27', description: 'Amazon', category: 'Shopping', amount: -124.50 },
      { date: '2026-02-27', description: 'GoodLife Fitness', category: 'Health & Fitness', amount: -49.99 },
      { date: '2026-02-26', description: 'Uber Eats', category: 'Food & Dining', amount: -34.25 },
      { date: '2026-02-25', description: 'Hydro One', category: 'Utilities', amount: -142.00 },
      { date: '2026-02-24', description: 'Cineplex Theatres', category: 'Entertainment', amount: -28.50 },
    ]
  },

  // -- Accounts --
  accounts: [
    { name: 'Chequing Account', institution: 'RBC Royal Bank', type: 'bank', balance: 12400, icon: '🏦' },
    { name: 'High Interest Savings', institution: 'EQ Bank', type: 'bank', balance: 45200, icon: '💰' },
    { name: 'TFSA Investment', institution: 'Wealthsimple', type: 'investment', balance: 89200, icon: '📈' },
    { name: 'RRSP', institution: 'RBC Direct Investing', type: 'investment', balance: 98400, icon: '🏦' },
    { name: 'Visa Infinite', institution: 'RBC', type: 'credit', balance: -4080, icon: '💳' },
    { name: 'Mortgage', institution: 'RBC', type: 'loan', balance: -98000, icon: '🏠' },
    { name: 'Student Loan', institution: 'NSLSC', type: 'loan', balance: -18200, icon: '🎓' },
    { name: 'Crypto Wallet', institution: 'Coinbase', type: 'crypto', balance: 17200, icon: '₿' },
  ]
};
