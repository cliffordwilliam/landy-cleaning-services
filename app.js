const baseUrl = window.location.origin;

// Example data for services
const services = {
    1: { 
        title: "First Service", 
        content: "This is the first service.",
        list: ["Feature 1", "Feature 2", "Feature 3"],
        faqs: [
            { title: "Faq 1", content: "content 1" },
            { title: "Faq 2", content: "content 2" },
            { title: "Faq 3", content: "content 3" }
        ]
    },
    2: { 
        title: "Second Service", 
        content: "This is the second service.",
        list: ["Feature A", "Feature B", "Feature C"],
        faqs: [
            { title: "Faq a", content: "content a" },
            { title: "Faq b", content: "content b" },
            { title: "Faq c", content: "content c" }
        ]
    },
    3: {
        title: "Third Service",
        content: "This is the third service.",
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
        <h1>Home Page</h1>${generateServiceLinksHTML(2)}<a href="${baseUrl}/service" data-link>Service</a>${generateTestimonialsHTML()}
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
    <div class="container-fluid">
        <a class="navbar-brand" href="/" data-link>Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
