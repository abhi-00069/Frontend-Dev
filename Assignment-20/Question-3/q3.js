$(document).ready(function () {
  const API_BASE = "http://localhost:3003/tasks";
  const $taskList = $("#taskList");
  const $filter = $("#priorityFilter");

  // Render task card
  function createTaskCard(task) {
    const $card = $(`
      <article data-id="${task.id}">
        <div class="info">
          <div class="title ${task.completed ? "completed" : ""}">
            ${task.title}
          </div>
          <div class="priority">Priority: ${task.priority}</div>
        </div>
        <div class="actions">
          <label>
            <input type="checkbox" class="toggleComplete" ${task.completed ? "checked" : ""}>
            Completed
          </label>
        </div>
      </article>
    `);
    return $card;
  }

  // Fetch tasks from server using GET + optional filters
  function loadTasks() {
    $taskList.html("Loading...");

    let url = API_BASE;

    // Apply filter using JSON Server query params
    const selected = $filter.val();
    if (selected === "Completed") {
      url += "?completed=true";
    } else if (selected) {
      url += "?priority=" + selected;
    }

    // GET request using jQuery AJAX
    $.ajax({
      url,
      method: "GET",
      dataType: "json",
      // Add comments for clarity
      /* 
        GET /tasks
        Or GET /tasks?priority=High
        Or GET /tasks?completed=true
      */
    })
      .done(function (tasks) {
        $taskList.empty();
        tasks.forEach((task) => {
          $taskList.append(createTaskCard(task));
        });
      })
      .fail(function () {
        $taskList.html("<div style='color:red;'>Failed to load tasks.</div>");
      });
  }

  // Toggle completed state using PATCH
  function toggleTaskCompleted(id, newValue, $checkbox, $title) {
    $.ajax({
      url: `${API_BASE}/${id}`,
      method: "PATCH",
      contentType: "application/json",
      data: JSON.stringify({ completed: newValue }),
      /* PATCH /tasks/:id { completed: true/false } */
    })
      .done(function () {
        // Update UI text style after success
        if (newValue) $title.addClass("completed");
        else $title.removeClass("completed");
      })
      .fail(function () {
        alert("Failed to update task.");
        // Revert checkbox
        $checkbox.prop("checked", !newValue);
      });
  }

  // Listen for checkbox toggle (delegation since tasks load dynamically)
  $taskList.on("change", ".toggleComplete", function () {
    const $card = $(this).closest("article");
    const id = $card.data("id");
    const newValue = $(this).is(":checked");
    const $title = $card.find(".title");

    // Send PATCH request
    toggleTaskCompleted(id, newValue, $(this), $title);
  });

  // Apply filter when dropdown is changed
  $filter.on("change", function () {
    loadTasks();
  });

  // Initial load
  loadTasks();
});
