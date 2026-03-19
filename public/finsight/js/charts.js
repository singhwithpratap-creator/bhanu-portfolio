/* ============================================
   FINSIGHT — CHART RENDERING (Chart.js)
   ============================================ */

(function () {
  'use strict';
  var D = window.FinanceData;

  // -- Global Chart.js defaults --
  Chart.defaults.color = '#9CA3AF';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.font.weight = 400;
  Chart.defaults.plugins.legend.display = false;

  var GRID_COLOR = 'rgba(0, 0, 0, 0.04)';

  var TOOLTIP = {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    titleColor: '#111827',
    bodyColor: '#6B7280',
    titleFont: { weight: 600 },
    padding: 12,
    cornerRadius: 8,
    boxPadding: 4,
    displayColors: false,
  };

  function dollarLabel(ctx) {
    return '$' + ctx.parsed.y.toLocaleString();
  }

  function dollarTick(value) {
    if (value >= 1000) return '$' + (value / 1000).toFixed(0) + 'k';
    return '$' + value;
  }

  var SCALES = {
    x: {
      grid: { color: GRID_COLOR, drawTicks: false },
      border: { display: false },
      ticks: { padding: 8 },
    },
    y: {
      grid: { color: GRID_COLOR, drawTicks: false },
      border: { display: false },
      ticks: { padding: 8, callback: dollarTick },
    },
  };

  // =============================================
  // 1. Net Worth Trend — Line chart
  // =============================================
  function initNetWorthTrendChart() {
    var ctx = document.getElementById('netWorthTrendChart');
    if (!ctx) return;
    var data = D.netWorth.trend;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Net Worth',
          data: data.values,
          borderColor: '#0D9488',
          backgroundColor: createGradient(ctx, 'rgba(13,148,136,0.12)', 'rgba(13,148,136,0)'),
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#0D9488',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            callbacks: { label: dollarLabel }
          }),
        },
        scales: SCALES,
      }
    });
  }

  // =============================================
  // 2. Assets vs Liabilities — Horizontal Bar
  // =============================================
  function initAssetsLiabilitiesChart() {
    var ctx = document.getElementById('assetsLiabilitiesChart');
    if (!ctx) return;

    var assetItems = D.netWorth.assets.breakdown;
    var liabilityItems = D.netWorth.liabilities.breakdown;

    var labels = assetItems.map(function (a) { return a.name; })
                  .concat(liabilityItems.map(function (l) { return l.name; }));
    var values = assetItems.map(function (a) { return a.value; })
                  .concat(liabilityItems.map(function (l) { return -l.value; }));
    var colors = assetItems.map(function () { return '#0D9488'; })
                  .concat(liabilityItems.map(function () { return '#EF4444'; }));

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          borderRadius: 4,
          barThickness: 20,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.4,
        indexAxis: 'y',
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            callbacks: {
              label: function (ctx) {
                return '$' + Math.abs(ctx.parsed.x).toLocaleString();
              }
            }
          }),
        },
        scales: {
          x: {
            grid: { color: GRID_COLOR, drawTicks: false },
            border: { display: false },
            ticks: {
              padding: 8,
              callback: function (v) {
                return '$' + Math.abs(v / 1000).toFixed(0) + 'k';
              }
            },
          },
          y: {
            grid: { display: false },
            border: { display: false },
            ticks: { padding: 8, font: { size: 11 } },
          },
        },
      }
    });
  }

  // =============================================
  // 3. Asset Allocation — Doughnut
  // =============================================
  function initAllocationChart() {
    var ctx = document.getElementById('allocationChart');
    if (!ctx) return;
    var data = D.portfolio.allocation;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(function (d) { return d.name; }),
        datasets: [{
          data: data.map(function (d) { return d.value; }),
          backgroundColor: data.map(function (d) { return d.color; }),
          borderWidth: 0,
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%',
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            displayColors: true,
            callbacks: {
              label: function (ctx) {
                return ' $' + ctx.parsed.toLocaleString() + ' (' + data[ctx.dataIndex].percent + '%)';
              }
            }
          }),
        },
      }
    });

    // Build HTML legend
    var legend = document.getElementById('allocationLegend');
    legend.innerHTML = data.map(function (d) {
      return '<span class="legend-item">' +
        '<span class="legend-color" style="background:' + d.color + '"></span>' +
        d.name + ' ' + d.percent + '%' +
        '</span>';
    }).join('');
  }

  // =============================================
  // 4. Portfolio Performance — Dual Line
  // =============================================
  function initPortfolioPerformanceChart() {
    var ctx = document.getElementById('portfolioPerformanceChart');
    if (!ctx) return;
    var data = D.portfolio.performance;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Portfolio',
            data: data.portfolio,
            borderColor: '#0D9488',
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#0D9488',
            tension: 0.4,
          },
          {
            label: 'Benchmark',
            data: data.benchmark,
            borderColor: '#D1D5DB',
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [6, 4],
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: '#D1D5DB',
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            displayColors: true,
            callbacks: { label: dollarLabel }
          }),
        },
        scales: SCALES,
      }
    });
  }

  // =============================================
  // 5. Spending by Category — Doughnut
  // =============================================
  function initSpendingCategoryChart() {
    var ctx = document.getElementById('spendingCategoryChart');
    if (!ctx) return;
    var data = D.spending.byCategory;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(function (d) { return d.name; }),
        datasets: [{
          data: data.map(function (d) { return d.amount; }),
          backgroundColor: data.map(function (d) { return d.color; }),
          borderWidth: 0,
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%',
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            displayColors: true,
            callbacks: {
              label: function (ctx) {
                return ' $' + ctx.parsed.toLocaleString();
              }
            }
          }),
        },
      }
    });

    // Build HTML legend
    var legend = document.getElementById('spendingLegend');
    legend.innerHTML = data.map(function (d) {
      return '<span class="legend-item">' +
        '<span class="legend-color" style="background:' + d.color + '"></span>' +
        d.name + ' $' + d.amount.toLocaleString() +
        '</span>';
    }).join('');
  }

  // =============================================
  // 6. Monthly Spending Trends — Bar chart
  // =============================================
  function initMonthlySpendingChart() {
    var ctx = document.getElementById('monthlySpendingChart');
    if (!ctx) return;
    var data = D.spending.monthlyTrends;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Spending',
          data: data.values,
          backgroundColor: data.values.map(function (v, i) {
            return i === data.values.length - 1 ? '#0D9488' : '#E5E7EB';
          }),
          borderRadius: 6,
          barThickness: 32,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        plugins: {
          tooltip: Object.assign({}, TOOLTIP, {
            callbacks: { label: dollarLabel }
          }),
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { padding: 8 },
          },
          y: {
            grid: { color: GRID_COLOR, drawTicks: false },
            border: { display: false },
            ticks: { padding: 8, callback: dollarTick },
            beginAtZero: true,
          },
        },
      }
    });
  }

  // -- Gradient helper --
  function createGradient(canvas, colorTop, colorBottom) {
    var el = canvas.getContext ? canvas : document.getElementById(canvas);
    var ctx = el.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, colorTop);
    gradient.addColorStop(1, colorBottom);
    return gradient;
  }

  // -- Initialize all charts on DOM ready --
  document.addEventListener('DOMContentLoaded', function () {
    initNetWorthTrendChart();
    initAssetsLiabilitiesChart();
    initAllocationChart();
    initPortfolioPerformanceChart();
    initSpendingCategoryChart();
    initMonthlySpendingChart();
  });
})();
