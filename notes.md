# CS 260 Notes

## Exam

The <link> tag defines the relationship between the current document and an external resource.
The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
The <link> element is an empty element, it contains attributes only.

The <div> tag allows you to create divisions or sections within your web page.
#hashtags reference IDs while .dots reference classes in css declarations.
Padding is inside the element while margin is outside the element.

flex-direction: direction of the flex (row/col)
'display: flex' actually makes something flex
justify-content aligns horizontally
align-items aligns vertically

1) The HTML <link> element

    Declares a relationship to an external resource (commonly stylesheets and icons).

    Placed in <head>, requires rel and href attributes.

    Example: <link rel="stylesheet" href="styles.css">.

    ​

2) <div> and <span>

    <div>: Generic block-level container, used for layout, starts on a new line.

    <span>: Generic inline container for phrasing content, default display is inline.

    ​

3) CSS selectors: #title vs .grid

    #title targets the element with id="title" (unique per page).

    .grid targets elements with class="grid" (reusable).

    ID selectors have higher specificity than class selectors.

4) Padding vs margin

    Padding: Space between content and border, background color applies, cannot be negative.

    Margin: Space outside the border, separates elements, background does not apply, can be negative.

    ​

5) Flex image layout

    display: flex arranges children along the main axis.

    Use justify-content, align-items, flex-wrap, and gap for layout and spacing.

6) Example padding rule

    padding: 10px 20px 5px 0; sets top, right, bottom, left padding in order.

7) Arrow function basics

    Example: const fn = (x) => x * 2; returns x*2.

    With braces, use return; without braces, single expression is returned implicitly.

8) Array .map() output

    .map() returns a new array with each element transformed by the callback.

9) getElementById + addEventListener

    document.getElementById('btn').addEventListener('click', () => { ... }); attaches a click handler to the element with id="btn".

10) Querying with a # selector

    document.querySelector('#title') selects the element with id="title".

11) DOM truths

    The DOM is a live programming interface representing the document as a tree of nodes.

    CSS selectors can query nodes; event listeners can be attached.

12) Default display of <span>

    Default is inline.

    ​

13) Make all divs red with CSS

    div { background: red; }

14) Image with hyperlink

    <a href="/path"><img src="/img.png" alt="..."></a>

15) CSS box model order

    From inside out: content → padding → border → margin.

16) Target only the word "trouble" in "double trouble"

    Use: <span>double</span> <span class="trouble">trouble</span> and .trouble { color: green; }.

17) For loop + console.log output

    Standard for loop iterates indices; console.log prints each iteration’s value or index.

18) Select by id and set text color to green

    document.getElementById('byu').style.color = 'green';

19) Opening tags

    Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>.

20) Declare HTML5 doctype

    <!DOCTYPE html>

21) JS control flow syntax

    if (cond) { ... } else { ... }

    for (let i=0; i<N; i++) { ... }

    while (cond) { ... }

    switch (x) { case 'a': ...; break; default: ... }

22) Creating a JS object

    const obj = { key: 'value', count: 3 };

23) Adding new properties to objects

    Objects are dynamic: obj.newKey = 42; or obj['newKey'] = 42;

24) Include JavaScript on a page

    <script src="app.js"></script> (external) or <script> /* code */ </script> (inline).

25) Change only the text "animal" to "crow"

    Use: <span id="animal">animal</span> fish, then document.getElementById('animal').textContent = 'crow';

26) JSON description

    JSON is a text data format using JS object syntax: objects {}, arrays [], strings, numbers, booleans, null. Keys must be double-quoted strings.

27) CLI command purposes

    chmod: change file permissions; pwd: print working directory; cd: change directory; ls: list files; vim/nano: text editors; mkdir: make directory; mv: move/rename; rm: remove; man: show manual; ssh: secure shell remote login; ps: process status; wget: download; sudo: run as superuser.

28) Command creating a remote shell session

    ssh user@host establishes a secure remote shell session.

29) ls -la behavior

    -l: long listing with permissions/owner/size/time; -a: include dotfiles.

30) Domain parts in banana.fruit.bozo.click

    TLD: click; Root domain: bozo.click; Subdomains: fruit.bozo.click, banana.fruit.bozo.click.

31) HTTPS and certificates

    A valid server certificate is required for browsers to establish a trusted HTTPS connection.

32) DNS A records

    An A record maps a hostname to an IPv4 address; cannot point to another A record. Use CNAME to alias one name to another.

33) Well-known ports

    443: HTTPS; 80: HTTP; 22: SSH.

34) Promises output (concept)

    Promise executor runs immediately; .then/.catch run after the current call stack; setTimeout callbacks run later. Chained thens receive prior return value; returning a Promise flattens the chain; thrown errors skip to catch.
