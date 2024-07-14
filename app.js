const baseUrl = window.location.origin;

// Example data for services
const services = {
    1: { 
        title: "Bathroom", 
        content: "Comprehensive Bathroom Cleaning for Ultimate Freshness.",
        src: "public/bathroom.jpeg",
        icon: "public/bathroom_icon.svg",
        list: ["Feature 1", "Feature 2", "Feature 3"],
        faqs: [
            { title: "Faq 1", content: "content 1" },
            { title: "Faq 2", content: "content 2" },
            { title: "Faq 3", content: "content 3" }
        ]
    },
    2: { 
        title: "Livingroom", 
        content: "Impeccable Home Cleaning for Every Corner.",
        src: "public/livingroom.jpeg",
        icon: "public/livingroom_icon.svg",
        list: ["Feature A", "Feature B", "Feature C"],
        faqs: [
            { title: "Faq a", content: "content a" },
            { title: "Faq b", content: "content b" },
            { title: "Faq c", content: "content c" }
        ]
    },
    3: {
        title: "Bedroom",
        content: "Create a Serene and Tidy Bedroom Retreat.",
        src: "public/bedroom.jpeg",
        icon: "public/bedroom_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    },
    4: {
        title: "Laundry Room",
        content: "Keep Your Laundry Room Spotless and Efficient.",
        src: "public/laundryroom.png",
        icon: "public/laundryroom_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    },
    5: {
        title: "Kitchen",
        content: "Revitalize Your Kitchen with Detailed Cleaning Excellence.",
        src: "public/kitchen.jpeg",
        icon: "public/kitchen_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    },
    6: {
        title: "Door",
        content: "Enhance Your Home’s Entrance with Pristine Doors.",
        src: "public/door.png",
        icon: "public/door_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    },
    7: {
        title: "All Room",
        content: "Comprehensive Cleaning for Every Room in Your Home.",
        src: "public/allroom.jpeg",
        icon: "public/allroom_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    },
    7: {
        title: "Additional",
        content: "Transform Every Room with Detailed Cleaning Services.",
        src: "public/other.jpeg",
        icon: "public/other_icon.svg",
        list: ["Feature X", "Feature Y", "Feature Z"],
        faqs: [
            { title: "Faq x", content: "content x" },
            { title: "Faq y", content: "content y" },
            { title: "Faq z", content: "content z" }
        ]
    }
};

// Example data for testimonials
const testimonials = [
    { name: "Person 1", city: "City 1", comment: "Comment", stars: 4 },
    { name: "Person 2", city: "City 2", comment: "Comment", stars: 4 },
    { name: "Person 3", city: "City 3", comment: "Comment", stars: 4 }
];

// Example data for general FAQs
const generalFaqs = [
    { title: "Faq 1", content: "content 1" },
    { title: "Faq 2", content: "content 2" },
    { title: "Faq 3", content: "content 3" }
];

// Utility function to navigate to a new route
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// Function to generate testimonials HTML
function generateTestimonialsHTML() {
    return `<div>${testimonials.map(testimonial => `<h3>${testimonial.name}</h3><p>${testimonial.city}</p>`).join('')}</div>`;
}

// Function to generate service links HTML
function generateServiceLinksHTML(limit = Object.keys(services).length) {
    return Object.keys(services).slice(0, limit).map(id => {
        return `<p><a href="${baseUrl}/service/${id}" data-link>${services[id].title}</a></p>`;
    }).join('');
}

// Function to generate service card links HTML
function generateServiceCardLinksHTML(limit = Object.keys(services).length) {
    return Object.keys(services).slice(0, limit).map(id => {
        return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${services[id].src}" class="card-img-top" alt="${services[id].title}">
                <div class="card-body" style="position: relative;">
                    <img style="position: absolute; top: 0; right: 0; padding: 1rem; transform: translateY(-50%);" src="${services[id].icon}" alt="${services[id].title}">
                    <h5 class="card-title"><a href="${baseUrl}/service/${id}" data-link class="stretched-link text-decoration-none text-reset card-title">${services[id].title}</a></h5>
                </div>
            </div>
        </div>
        `;
    }).join('');
}


// Function to generate HTML for a list
function generateListHTML(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Function to generate FAQs HTML
function generateFaqsHTML(faqs) {
    return `<div>${faqs.map(faq => `<h3>${faq.title}</h3><p>${faq.content}</p>`).join('')}</div>`;
}

// Routes configuration
const routes = {
    '/': {
        name: "Home",
        page: `
        <div class="hero-container blue-bg">
            <div class="hero">
                <div class="hero-img-left"></div>
                <img class="img-fluid hero-img" src="public/hero.png" alt="Hero" width="576" height="640">
            </div>
            <img class="bubble" src="public/bubble.svg" alt="Bubble" width="1920" height="270">
        </div>
        <section class="px-4 pt-5 my-5 mt-0" style="background:#F7FAFC;">
            <div class="container">
                <h1 class="text-center display-4 fw-bold text-body-emphasis">TOP NOTCH SERVICE FOR YOUR PLACE</h1>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img class="img-fluid hero-img" src="public/handshake.svg" alt="Handshake" width="120" height="120">
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Reliability and Trust</h3>
                        <p>Dependable cleaning services you can count on for a pristine home, every time.</p>
                        </div>
                        <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img class="img-fluid hero-img" src="public/broom.svg" alt="Broom" width="120" height="120">
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Customized Care</h3>
                        <p>Tailored cleaning to meet your specific needs, from routine dusting to decluttering and organizing.</p>
                        </div>
                        <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img class="img-fluid hero-img" src="public/hearthand.svg" alt="HeartHand" width="120" height="120">
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Comprehensive Solutions</h3>
                        <p>Full-range services, including vacant house cleaning, to ensure every space is spotless and ready.</p>
                    </div>
                    </div>
            </div>
        </section>
        <section class="px-4 pt-5 my-5 mt-0">
            <div class="container">
                <h1 class="text-center display-4 fw-bold text-body-emphasis">Experience a Sparkling Home Every Day</h1>
                <p class="lead mb-4 text-center">Comprehensive commercial cleaning services for a healthier environment tailored to your schedule and needs.</p>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${generateServiceCardLinksHTML(5)}
                    <div class="col">
                        <a href="${baseUrl}/service" data-link class="text-reset text-decoration-none text-wrap fw-bold other-button-card">
                            Other Services
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-right-circle" viewBox="0 0 40 40">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        ${generateTestimonialsHTML()}
        `,
    },
    '/about': {
        name: "About",
        page: `
        <h1>About Page</h1>
        `,
    },
    '/faq': {
        name: "FAQ",
        page: `
        <h1>Faq Page</h1>${generateFaqsHTML(generalFaqs)}
        `,
    },
    '/service': {
        name: "Service",
        page: `
        <a href="${baseUrl}/" data-link>Home</a> > <span>Service</span><h1>Service Page</h1>${generateServiceLinksHTML()}
        `,
    },
}

// Router function
function router() {
    let path = window.location.pathname;

    const app = document.getElementById('app');

    if (path.startsWith('/service/')) {
        // Handle detail pages
        const postId = parseInt(path.split('/').pop());
        const service = services[postId];
        if (service) {
            // Determine next and previous service IDs
            const prevId = services[postId - 1] ? postId - 1 : null;
            const nextId = services[postId + 1] ? postId + 1 : null;

            // Generate navigation buttons
            const prevButton = prevId ? `<a href="${baseUrl}/service/${prevId}" data-link>Previous</a>` : '';
            const nextButton = nextId ? `<a href="${baseUrl}/service/${nextId}" data-link>Next</a>` : '';

            // Detail page
            app.innerHTML = `
                <a href="${baseUrl}/" data-link>Home</a> > <a href="${baseUrl}/service" data-link>Service</a> > <span>${service.title}</span>
                <h1>${service.title}</h1>
                <p>${service.content}</p>
                ${generateListHTML(service.list)}
                ${generateServiceLinksHTML()}
                <h2>FAQs</h2>
                ${generateFaqsHTML(service.faqs)}
                <div>
                    ${prevButton}
                    ${nextButton}
                </div>
                <a href="${baseUrl}/service" data-link>Back to Service</a>
            `;
        } else {
            app.innerHTML = '<h1>404 Not Found</h1>';
        }
    } else {
        // Handle normal pages
        app.innerHTML = routes[path].page || '<h1>404 Not Found</h1>';
    }
}

// Event listeners for navigation
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    // Handle link clicks
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));

            // Update nav links active class
            updateActiveLink();
        }
    });

    // Populate the navbar
    // Toggler prop
    const togglerProp = `data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"`
    function populateNavbarDropDownMenuLi() {
        return Object.keys(services).map(id => {
            return `
            <li>
                <a class="dropdown-item" href="${baseUrl}/service/${id}" data-link ${togglerProp}>${services[id].title}</a>
            </li>`;
        }).join('');
    }

    function populateNavbarUlWithLi() {
        const pathName = window.location.pathname;

        return Object.keys(routes).map(hrefLink => {
            // For this design the service is in the drop down
            if (hrefLink !== "/service") {
                const isActive = 
                (pathName === "/" && hrefLink === "/") ||
                pathName === hrefLink ||
                pathName?.startsWith(`${hrefLink}/`);
                const activeClass = isActive ? 'nav-link active' : 'nav-link';
                const ariaCurrent = isActive ? 'aria-current="page"' : '';
        
                return `
                    <li class="nav-item">
                        <a class="${activeClass} nav-link-ref" ${ariaCurrent} href="${baseUrl}${hrefLink}" data-link ${togglerProp}>${routes[hrefLink].name}</a>
                    </li>
                `;
            }
        }).join('');
    }
    
    function updateActiveLink() {
        const pathName = window.location.pathname;
        const navLinks = document.getElementsByClassName('nav-link-ref');
    
        Array.from(navLinks).forEach(link => {
            const href = link.getAttribute('href').replace(baseUrl, '');
            const isActive = 
            (pathName === "/" && href === "/") ||
            pathName === href ||
            pathName?.startsWith(`${href}/`);
    
            if (isActive) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    // Create the nav
    const nav = document.getElementById('nav');
    nav.innerHTML = `
    <div class="container">
        <a class="navbar-brand" href="/" data-link>
            <img src="public/logo.svg" alt="Landlady" width="242" height="55">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="flex-grow:0; margin-left: auto;">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${populateNavbarUlWithLi()}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="${baseUrl}/service" data-link ${togglerProp}>All Service</a></li>
                        <li><hr class="dropdown-divider"></li>
                        ${populateNavbarDropDownMenuLi()}
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    `;
    
    // Initialize the router on first page load
    router();
});

navigateTo(`${baseUrl}/`);

document.getElementById('currentYear').innerText = `© ${new Date().getFullYear()}`;