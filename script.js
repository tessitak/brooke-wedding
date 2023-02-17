function insertNav() {
	let navBar = document.querySelector("#nav-placeholder");

	let navCode = 
	`<nav class="nav-bar drk-blue-bkg">
		<ul class="nav-list">
			<li class="nav-item"><a href="index.html">Home</a></li>
			<li class="nav-item"><a href="https://withjoy.com/Andrewlovesbrooke/rsvp" target="_blank">RSVP</a></li>
			<li class="nav-item"><a href="details.html">Details</a></li>
			<li class="nav-item"><a href="travel.html">Travel</a></li>
			<li class="nav-item"><a href="faq.html">FAQ</a></li>
			<li class="nav-item"><a href="weddingparty.html">Wedding Party</a></li>
			<li class="nav-item"><a href="gallery.html">Gallery</a></li>
		</ul>
		<div class="hamburger hidden" onclick="burgerToggle(this)">
		  <div class="bar1"></div>
		  <div class="bar2"></div>
		  <div class="bar3"></div>
		</div>
	</nav>
	<aside class="side-menu hidden" id="side-menu">
		<ul class="side-list italic-font">
			<li class="side-item"><a href="index.html">Home</a></li>
			<li class="nav-item"><a href="https://withjoy.com/Andrewlovesbrooke/rsvp">RSVP</a></li>
			<li class="side-item"><a href="details.html">Details</a></li>
			<li class="side-item"><a href="travel.html">Travel</a></li>
			<li class="side-item"><a href="faq.html">FAQ</a></li>
			<li class="side-item"><a href="weddingparty.html">Wedding Party</a></li>
			<li class="side-item"><a href="gallery.html">Gallery</a></li>

		</ul>
	</aside>`;

	navBar.innerHTML += navCode;
}

document.onload = insertNav();

function burgerToggle(x) {
  x.classList.toggle("change");
  let sideMenu = document.getElementById("side-menu");
  sideMenu.classList.toggle("hidden");
}