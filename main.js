document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const tabContents = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.dataset.target;
      activateTab(target);
    });
  });

  function activateTab(target) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    const activeTab = document.querySelector(target);
    const activeNavLink = document.querySelector(`[data-target="${target}"]`);

    activeTab.classList.add("active");
    activeNavLink.classList.add("active");
  }
});
