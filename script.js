const formSeating = document.querySelector(".form-seating");

const asideMenuGreenTicket = document.querySelector(".aside-menu-tickets-green");
const asideMenuYellowTicket = document.querySelector(".aside-menu-tickets-yellow");
const asideMenuBlueTicket = document.querySelector(".aside-menu-tickets-blue");

function checkClick(e) {
  const targetSeating = e.target.closest(".seating-input");

  if (!targetSeating) return;

  numberOfTickets(targetSeating);
}

function numberOfTickets(target) {
  const targetInputValue = target.value;
  const [row, seat] = targetInputValue.split("-");

  if (target && target.checked) generateTicketInfoBlock(target, row, seat, targetInputValue);

  if (!target.checked) removeTicketInfoBlock(targetInputValue);
}

function generateTicketInfoBlock(target, row, seat, id) {
  if (target.getAttribute("name") === "green") asideMenuGreenTicket.appendChild(createPlace(row, seat, id));
  if (target.getAttribute("name") === "yellow") asideMenuYellowTicket.appendChild(createPlace(row, seat, id));
  if (target.getAttribute("name") === "blue") asideMenuBlueTicket.appendChild(createPlace(row, seat, id));
}

function createPlace(row, seat, id) {
  const divMoviePlace = document.createElement("div");

  divMoviePlace.classList.add("movie-block-inside");
  divMoviePlace.dataset.id = id;
  divMoviePlace.innerHTML = `<div class="movie-first-column">
      <p class="movie-place">Row: ${row}</p>
      <p class="movie-row">Place: ${seat}</p>
   </div>
   <div class="movie-second-column">
      <p class="movie-text-1">Have</p>
      <p class="movie-text-2">good</p>
      <p class="movie-text-3">day!</p>
   </div>`;

  return divMoviePlace;
}

function removeTicketInfoBlock(id) {
  const movieBlockInside = document.querySelectorAll(".movie-block-inside");
  movieBlockInside.forEach((item) => {
    if (item.dataset.id === id) {
      item.remove();
    }
  });
}

formSeating.addEventListener("click", checkClick);
