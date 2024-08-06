# Volcanic International
[Static Website](https://pages.github.com)

This site can load without a server! Clone this repository to your computer &
just open the [index file](index.html) in a web browser!

## Section Text Modification
Changes to text in each website section can be made by modifying & saving template files.
These files are dynamically loaded into the [index file](index.html) via JavaScript.
Each file primarily uses [Markdown](https://www.markdownguide.org/cheat-sheet) syntax & also supports HTML syntax.

* [home](templates/home.md.js)
* [about](templates/about.md.js)
* [contact](templates/contact.md.js)
* [video](templates/video.md.js)
* [donate](templates/donate.md.js)
* [subscribe1](templates/subscribe1.md.js) (subscribe picture)
* [subscribe2](templates/subscribe2.md.js) (sermons)
* [subscribe3](templates/subscribe3.md.js) (podcasts)

To modify the files, log into your GitHub account, navigate to the relevant file in this repository
& click the Pencil button to the top-right of the file. Once you've made your edits, click the
`Commit changes...` button. A form will appear in a modal asking you for additional information. Fill
in fields, where deemed necessary. This information makes it easier to review past changes. When done
click the `Commit changes` button in the modal. That's it! Refresh the site in your browser to confirm
your changes had the desired effect. There may be a slight delay while the changes are deployed.

### Templating
Each of these templates use [Markdown](https://www.markdownguide.org/cheat-sheet) syntax, embedded into a JavaScript variable.
This allows JavaScript functions to be called during template rendering.

#### Available Functions

* [icons](js/functions/icons.js) For rendering lists of social media network icons.
* [logo](js/functions/logo.js) For rendering logo elements.
* [photo](js/functions/photo.js) For rendering photo elements.
* [raster](js/functions/raster.js) For rendering raster graphic elements.
* [vector](js/functions/vector.js) For rendering vector graphic elements.

## Styling Variables
Basic Section styling can be modified with relative ease.
Variables have been defined in the following files to allow easy modification:

* [colors](css/colors.css)
* [text](css/text.css)
* [images](css/images.css)
