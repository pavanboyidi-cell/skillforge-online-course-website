// SkillForge Academy - Interactive Course Website Script

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Category filter cards
  const categoryCards = document.querySelectorAll(".category-card");
  const courseCards = document.querySelectorAll(".course-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      categoryCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const filter = card.getAttribute("data-filter");
      courseCards.forEach((course) => {
        const match = filter === "all" || course.getAttribute("data-category") === filter;
        course.classList.toggle("hidden", !match);
      });
    });
  });

  // Auto-select course from card button
  const selectButtons = document.querySelectorAll(".select-course-btn");
  const courseSelect = document.getElementById("courseSelect");

  selectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCourse = btn.getAttribute("data-course");
      if (courseSelect && selectedCourse) {
        courseSelect.value = selectedCourse;
      }
    });
  });

  // Enrollment form submission feedback
  const enrollForm = document.getElementById("enrollForm");
  const enrollMessage = document.getElementById("enrollMessage");

  if (enrollForm && enrollMessage) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = document.getElementById("studentName").value.trim();
      const courseVal = document.getElementById("courseSelect").value;
      const paceVal = document.getElementById("paceSelect").value;

      enrollMessage.textContent = `Enrollment confirmed for ${nameVal} in "${courseVal}" (${paceVal} pace).`;
      enrollMessage.classList.add("show");
      enrollForm.reset();
    });
  }
});
