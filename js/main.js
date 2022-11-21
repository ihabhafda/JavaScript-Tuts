// Get Slider Items | Array.Form [ES6 Feature]
var sliderimages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slides
var slidesCount = sliderimages.length;

// Set Current Slide
var currentslide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement("ul");

// Set ID On Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

    // Create The LI
    var paginationItem = document.createElement("li");

    // Set Custom Attribute
    paginationItem.setAttribute("data-index", i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// And The Created Ul Element To the Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUL = document.getElementById("pagination-ul");

// Get Pagination Items | Array.Form [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentslide = parseInt(this.getAttribute("data-index"));

        theChecker();

    }

}

// Trigger The Checker Function
theChecker();

// next slide function
function nextSlide () {

    if (nextButton.classList.contains("disabled")) {

    // Do Nothing
    return false;

    } else {

        currentslide++;
    
        theChecker();
    
    }

}

// prev slide function
function prevSlide () {
    if (prevButton.classList.contains("disabled")) {

    // Do Nothing
    return false;

    } else {

        currentslide--;
    
        theChecker();

    }

}

// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = "Slide #" + (currentslide) + " of " + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderimages[currentslide - 1].classList.add("active");

    // Set Active Class On Current Pagination Item
    paginationCreatedUL.children[currentslide - 1].classList.add("active");

    // Check if Current Slide is The First
    if (currentslide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");

    } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");

    }

    // Check if Current Slide is The Last
    if (currentslide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");

    } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");

    }

}

// Remove All A Active Classes From Images And Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderimages.forEach(function (img) {

        img.classList.remove("active");

    });

    // Loop Through Pagination Bullets
    paginationBullets.forEach(function (Bullet) {

        Bullet.classList.remove("active");

    });

}