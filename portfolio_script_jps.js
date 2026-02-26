// Custom element HTML here:
class navBar_jps extends HTMLElement { // CUSTOM HTML Element, for the navigation bar
    connectedCallback() {   // a callback is required (when a function passes another function as an attribute)
                            // callback used to call definition function whenever the custom element is added to the document
                            // 'this.innerHTML' injects custom HTML code into the tag
                            // " ` " contains the custom syntax for the new tag
                            // this custom element contains all the HTML needed for the navigation bar, typically atop the page
        this.innerHTML = `
            <ul class="navBar">               
                <li class="Horz"> <!-- Main -->
                    <a href="index.html" id="index-jps">Main</a>
                </li>
                <li class="Horz"> <!-- About -->
                    <a href="about.html" id="about-jps">About</a>
                </li>
                <li class="dropDown Horz"> <!-- Projects -->
                    <a href="projects.html" id="projects-jps">Projects</a>
                    <div class="dropDownCont">
                        <a href="projects.html">Project #1</a>
                        <a href="projects.html">Project #2</a>
                        <a href="projects.html">Project #3</a>
                    </div>
                    
                </li>
                <li class="Horz"> <!-- Contact -->
                    <a href="contact.html" id="contact-jps">Contact</a>
                </li>
            </ul>
        `;
    }
}

class footer_jps extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        `;
    }
}

class metaData_jps extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="keywords" content="Portfolio, Projects, Python, CAD, HID, Arduino">
        `;
    }
}

function formatCurrentPage() {  
    var pageID = location.pathname.split(".html").slice()[0].split("/")[1]; // Non-elegant way of obtaining the name of the webpage, for inspection
    if (pageID == "")   {   // Bug fix so basic URL shows active page
        pageID = "index";
    } 
        
    pageID = pageID + "-jps"
    document.getElementById(pageID).style.backgroundColor = "#CBE432";
    document.getElementById("debug").innerHTML = pageID

}

function formatProjectImageHeights(projectID) {

// TODO: won't work, try 'clientHeight, but read only!

    // Get current image height, compare with corresponding height of project description
    // Find the lower of the two, scale opposite accordingly
    projectContent = getElementsByClassName(projectID)
    var height_A = projectContent[0].style.height   // Get image and description heights
    var height_B = projectContent[1].style.height
    const heights = [height_B, height_A]            // Store heights in array (inverted for later use!)

    if (height_A != height_B) {
        if (height_B > height_A) {
            var ratio = height_B / height_A         // Desired image ratio, to maintain!
            var toChange = 1                        // Index to address height to change
        } else {
            var ratio = height_A / height_B         
            var toChange = 0                        // Makes use of inverted 'heights' array!
        }                                           // Used to set height to other, smaller, height
        projectContent[toChange].style.height = heights[toChange]
                                                    // Adjusts width with ratio
        projectContent[toChange].style.width = projectContent[toChange].style.width / ratio
    }

    
}


// Custom element definition here:
customElements.define("navbar-jps", navBar_jps); // Defines the class as a custom HTML element, ready to use!
customElements.define("footer-jps", footer_jps);
customElements.define("metaData-jps", metaData_jps);
