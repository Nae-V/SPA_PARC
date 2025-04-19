const routes = {
    '/': '/pages/home.html',
    '/list': '/pages/list.html',
};

async function render(pathname) {
    const html = await fetch(routes[pathname] || routes['/']).then((res) => res.text());
    document.getElementById('app').innerHTML = html;
    window.history.pushState({}, '', pathname);
}

window.onpopstate = () => render(window.location.pathname);

document.addEventListener('click', (e) => {
    if (e.target.matches('a[data-link]')) {
        e.preventDefault();
        render(e.target.getAttribute('href'));
    }
});

render(window.location.pathname);
