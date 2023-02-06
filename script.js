function insertNav() {
	let navBar = document.querySelector("#nav-placeholder");

	let navCode = 
	`<nav class="nav-bar">
		<ul class="nav-list serif">
			<li class="nav-item"><a href="index.html">Home</a></li>
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
		<ul class="side-list serif">
			<li class="side-item"><a href="index.html">Home</a></li>
			<li class="side-item"><a href="details.html">Details</a></li>
			<li class="side-item"><a href="travel.html">Travel</a></li>
			<li class="side-item"><a href="faq.html">FAQ</a></li>
			<li class="side-item"><a href="weddingparty.html">Wedding Party</a></li>
			<li class="side-item"><a href="gallery.html">Photos</a></li>
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

// need to figure out the burger toggle function

let test = document.querySelector(".cover-details");
test.addEventListener("click", function(){ alert("Hello World!"); });
