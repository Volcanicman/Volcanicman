jQuery(window).ready(function() {
    // Load section HTML into the index page.
    let sections = [
        'home',
        'about',
        'contact',
        'donate',
        'sermons',
        'podcast',
    ];
    sections.forEach(function (section) {
        jQuery('#' + section).load(section + '.html');
    })
});
