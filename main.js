let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach((sect, index) => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 200;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        // Check if at the top of the page
        if (top === 0) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            navlinks[0].classList.add('active'); // Assuming the first link corresponds to the top section
            return; // Exit the loop since we're at the top
        }

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
        }
    });
};

// about logic start
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// about logic end

/**
   * Skills animation
   */
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-progress');
        setProgressBarWidth(bar, targetWidth);
    });

    function setProgressBarWidth(bar, width) {
        bar.style.width = `${width}%`;
    }
});


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}