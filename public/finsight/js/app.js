/* ============================================
   FINSIGHT — APP LOGIC
   DOM population, navigation, mobile menu
   ============================================ */

(function () {
  'use strict';
  var D = window.FinanceData;

  // -- Utility: format currency --
  function fmt(amount, decimals) {
    var abs = Math.abs(amount);
    var str = abs.toLocaleString('en-US', {
      minimumFractionDigits: decimals || 0,
      maximumFractionDigits: decimals || 0,
    });
    var prefix = amount < 0 ? '-$' : '$';
    return prefix + str;
  }

  // -- Set greeting and date --
  function initGreeting() {
    var hour = new Date().getHours();
    var greeting = 'Good morning';
    if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
    else if (hour >= 17) greeting = 'Good evening';
    document.querySelector('.greeting').textContent = greeting + ', ' + D.user.name;

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('.topbar-date').textContent = today.toLocaleDateString('en-US', options);
  }

  // -- Populate Net Worth summary cards --
  function renderNetWorthSummary() {
    document.getElementById('netWorthValue').textContent = fmt(D.netWorth.total);
    document.getElementById('netWorthChange').textContent = '+' + D.netWorth.changePercent + '% this month';
    document.getElementById('totalAssets').textContent = fmt(D.netWorth.assets.total);
    document.getElementById('totalLiabilities').textContent = fmt(D.netWorth.liabilities.total);
  }

  // -- Populate Portfolio summary cards --
  function renderPortfolioSummary() {
    document.getElementById('portfolioValue').textContent = fmt(D.portfolio.totalValue);
    document.getElementById('portfolioReturn').textContent = '+' + fmt(D.portfolio.totalReturn.amount) + ' all time';
    document.getElementById('todayChange').textContent = '+' + fmt(D.portfolio.todayChange.amount);
    document.getElementById('todayChangePercent').textContent = '+' + D.portfolio.todayChange.percent + '%';
    document.getElementById('totalReturn').textContent = '+' + fmt(D.portfolio.totalReturn.amount);
    document.getElementById('totalReturnPercent').textContent = '+' + D.portfolio.totalReturn.percent + '%';
  }

  // -- Populate Holdings table --
  function renderHoldings() {
    var tbody = document.getElementById('holdingsTableBody');
    tbody.innerHTML = D.portfolio.holdings.map(function (h) {
      var changeClass = h.change >= 0 ? 'text-green' : 'text-red';
      var changeSign = h.change >= 0 ? '+' : '';
      return '<tr>' +
        '<td><span class="holding-symbol">' + h.symbol + '</span><br><span class="holding-name">' + h.name + '</span></td>' +
        '<td class="text-right">' + fmt(h.value) + '</td>' +
        '<td class="text-right ' + changeClass + '">' + changeSign + h.change + '%</td>' +
        '</tr>';
    }).join('');
  }

  // -- Populate Budget section --
  function renderBudget() {
    var spent = D.budget.totalSpent;
    var budget = D.budget.monthlyBudget;
    var remaining = budget - spent;
    var percent = Math.round((spent / budget) * 100);

    document.getElementById('monthlyBudget').textContent = fmt(budget);
    document.getElementById('totalSpent').textContent = fmt(spent);
    document.getElementById('budgetRemaining').textContent = fmt(remaining);

    var bar = document.getElementById('overallProgressBar');
    bar.style.width = percent + '%';
    if (percent >= 90) bar.className = 'progress-fill danger';
    else if (percent >= 75) bar.className = 'progress-fill warning';
    else bar.className = 'progress-fill healthy';

    document.getElementById('overallProgressLabel').textContent = percent + '% of budget used';

    var container = document.getElementById('budgetCategories');
    container.innerHTML = D.budget.categories.map(function (cat) {
      var p = Math.round((cat.spent / cat.budget) * 100);
      var status = 'healthy';
      if (p >= 100) status = 'danger';
      else if (p >= 75) status = 'warning';

      return '<div class="budget-category-card card">' +
        '<div class="budget-cat-header">' +
          '<span class="budget-cat-icon">' + cat.icon + '</span>' +
          '<span class="budget-cat-name">' + cat.name + '</span>' +
          '<span class="budget-cat-amounts">' + fmt(cat.spent) + ' / ' + fmt(cat.budget) + '</span>' +
        '</div>' +
        '<div class="progress-bar"><div class="progress-fill ' + status + '" style="width:' + Math.min(p, 100) + '%"></div></div>' +
        '<span class="budget-cat-percent">' + p + '% used</span>' +
      '</div>';
    }).join('');
  }

  // -- Populate Transactions table --
  function renderTransactions() {
    var tbody = document.getElementById('transactionsTableBody');
    tbody.innerHTML = D.spending.recentTransactions.map(function (t) {
      var amountClass = t.amount >= 0 ? 'text-green' : '';
      var amountStr = t.amount >= 0 ? '+' + fmt(t.amount, 2) : fmt(t.amount, 2);
      var dateStr = new Date(t.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return '<tr>' +
        '<td class="text-muted">' + dateStr + '</td>' +
        '<td>' + t.description + '</td>' +
        '<td><span class="category-badge">' + t.category + '</span></td>' +
        '<td class="text-right ' + amountClass + '">' + amountStr + '</td>' +
        '</tr>';
    }).join('');
  }

  // -- Populate Accounts grid --
  function renderAccounts() {
    var container = document.getElementById('accountsGrid');
    container.innerHTML = D.accounts.map(function (a) {
      var balanceClass = a.balance < 0 ? 'negative' : '';
      return '<div class="account-card">' +
        '<div class="account-card-top">' +
          '<span class="account-icon">' + a.icon + '</span>' +
          '<span class="account-type-badge ' + a.type + '">' + a.type + '</span>' +
        '</div>' +
        '<span class="account-name">' + a.name + '</span>' +
        '<span class="account-institution">' + a.institution + '</span>' +
        '<span class="account-balance ' + balanceClass + '">' + fmt(a.balance) + '</span>' +
      '</div>';
    }).join('');
  }

  // -- Sidebar navigation --
  function initNavigation() {
    var navItems = document.querySelectorAll('.nav-item');
    var sections = document.querySelectorAll('.dashboard-section');

    navItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = item.getAttribute('data-section');
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
      });
    });

    // Track active section with IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navItems.forEach(function (n) { n.classList.remove('active'); });
          var active = document.querySelector('[data-section="' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  // -- Mobile sidebar toggle --
  function initMobileMenu() {
    var btn = document.getElementById('mobileMenuBtn');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');

    btn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // -- Chart filter buttons (active toggle) --
  function initFilterButtons() {
    document.querySelectorAll('.chart-filters').forEach(function (group) {
      group.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          group.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
        });
      });
    });
  }

  // -- Init --
  document.addEventListener('DOMContentLoaded', function () {
    initGreeting();
    renderNetWorthSummary();
    renderPortfolioSummary();
    renderHoldings();
    renderBudget();
    renderTransactions();
    renderAccounts();
    initNavigation();
    initMobileMenu();
    initFilterButtons();
  });
})();
