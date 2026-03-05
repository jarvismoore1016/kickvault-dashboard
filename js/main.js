/* ============================================================
   KICKVAULT DASHBOARD — Main JS
   Handles: sidebar active state, tab switching, view toggles
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sidebar: highlight active page ---- */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });


  /* ---- Tab switching (detail.html) ---- */
  document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels  = tabGroup.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const targetId = btn.dataset.tab;
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  });


  /* ---- View toggle (collection.html, schedule.html) ---- */
  document.querySelectorAll('[data-view-toggle]').forEach(toggleGroup => {
    const buttons = toggleGroup.querySelectorAll('.view-toggle-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const view = btn.dataset.view;
        const container = btn.closest('[data-view-toggle]')
          .nextElementSibling;

        if (container) {
          container.querySelectorAll('[data-view]').forEach(v => {
            v.classList.toggle('active', v.dataset.view === view);
          });
        }
      });
    });
  });


  /* ---- Schedule: mark complete actions ---- */
  document.querySelectorAll('.mark-complete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.schedule-item');
      if (!item) return;

      item.style.opacity = '0.5';
      item.style.pointerEvents = 'none';
      btn.textContent = '✓';
    });
  });

});
