document.addEventListener("DOMContentLoaded", () => {
  const API = "http://localhost:3005/timetable";
  const daySelect = document.getElementById("daySelect");
  const classesContainer = document.getElementById("classes");
  const noClassesMsg = document.getElementById("noClasses");

  // Load classes when user changes the dropdown
  daySelect.addEventListener("change", () => loadTimetable());

  // Initial load for Monday
  loadTimetable();

  // Fetch timetable using Fetch + query params
  function loadTimetable() {
    const selectedDay = daySelect.value;

    // Show loading
    classesContainer.innerHTML = "<p>Loading...</p>";
    noClassesMsg.style.display = "none";

    /* 
      API request:
      GET /timetable?day=Monday
      JSON Server automatically filters by query param
    */
    fetch(`${API}?day=${selectedDay}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load timetable");
        }
        return res.json();
      })
      .then((data) => {
        // Clear loading text
        classesContainer.innerHTML = "";

        // If no classes found for selected day
        if (data.length === 0) {
          noClassesMsg.style.display = "block";
          return;
        }

        // Render each class as a card
        data.forEach((item) => {
          const card = document.createElement("article");
          card.className = "card";

          card.innerHTML = `
            <div><strong>Subject:</strong> ${item.subject}</div>
            <div><strong>Faculty:</strong> ${item.faculty}</div>
            <div><strong>Time:</strong> ${item.time}</div>
          `;

          classesContainer.appendChild(card);
        });
      })
      .catch((err) => {
        classesContainer.innerHTML = `<p style="color:red;">${err.message}</p>`;
      });
  }
});
