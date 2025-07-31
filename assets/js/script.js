const serviceBtn = document.getElementById("serviceBtn");
const servicePopup = document.getElementById("servicePopup");
const modalBackdrop = document.getElementById("modalBackdrop");
const cancelLink = document.getElementById("cancelLink"); // use a different ID
const cancelContainer = document.getElementById("cancelContainer");

// Open the popup
serviceBtn.addEventListener("click", () => {
  servicePopup.classList.remove("d-none");
  modalBackdrop.classList.remove("d-none");
  cancelContainer.classList.remove("d-none");
});

// Close the popup via cancel link
cancelLink.addEventListener("click", (e) => {
  e.preventDefault();
  closeServicePopup();
});

// Close the popup via backdrop
modalBackdrop.addEventListener("click", () => {
  closeServicePopup();
});

// Close popup function
function closeServicePopup() {
  servicePopup.classList.add("d-none");
  modalBackdrop.classList.add("d-none");
  cancelContainer.classList.add("d-none");
}


// records JS

function filterTasks(status) {
  // Update tab UI
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  // Show/hide entire task-wrapper based on card's data-status
  const wrappers = document.querySelectorAll('.task-wrapper');
  wrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.task-card');
    const cardStatus = card.getAttribute('data-status');

    if (status === 'all' || cardStatus === status) {
      wrapper.style.display = 'block';
    } else {
      wrapper.style.display = 'none';
    }
  });
}

// Initial display
filterTasks('all');

  function filterTasks(status) {
    // Highlight active tab
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");

    const loadingMessage = document.getElementById("loading-message");
    const noDataMessage = document.getElementById("no-data-message");
    const taskContainer = document.getElementById("taskContainer");
    const cards = taskContainer.querySelectorAll(".task-wrapper");

    // Hide all cards initially
    cards.forEach((card) => {
      card.style.display = "none";
    });

    // Show loading message
    loadingMessage.style.display = "block";
    noDataMessage.style.display = "none";

    // Simulate loading delay (e.g., fetch call can go here)
    setTimeout(() => {
      loadingMessage.style.display = "none";

      let visibleCount = 0;
      cards.forEach((card) => {
        const taskCard = card.querySelector(".task-card");
        const cardStatus = taskCard.getAttribute("data-status");

        if (status === "all" || cardStatus === status) {
          card.style.display = "block";
          visibleCount++;
        }
      });

      // Show 'No more data' if no cards match
      if (visibleCount === 0) {
        noDataMessage.style.display = "block";
      }
    }, 800); // Delay in ms
  }

  // Initial display on page load
  document.addEventListener("DOMContentLoaded", () => {
    filterTasks('all');
  });


  function openServicePopup() {
    document.getElementById('modalBackdrop').classList.remove('d-none');
    document.getElementById('servicePopup').classList.remove('d-none');
    document.getElementById('cancelContainer').classList.remove('d-none');
  }

  function closeServicePopup() {
    document.getElementById('modalBackdrop').classList.add('d-none');
    document.getElementById('servicePopup').classList.add('d-none');
    document.getElementById('cancelContainer').classList.add('d-none');
  }


  function openServicePopup() {
    document.getElementById("modalBackdrop").classList.remove("d-none");
    document.getElementById("servicePopup").classList.remove("d-none");
    document.getElementById("cancelContainer").classList.remove("d-none");
  }

  function closeServicePopup() {
    document.getElementById("modalBackdrop").classList.add("d-none");
    document.getElementById("servicePopup").classList.add("d-none");
    document.getElementById("cancelContainer").classList.add("d-none");
  }




