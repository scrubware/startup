# Zinger

[My Notes](notes.md)

Zinger is an app for sharing, voting on, and celebrating good quips, jokes, and one-liners.

## 🚀 Specification Deliverable

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever whipped up an absolute knee-slapper of a joke, only to have no one around you to hear it? Now, instead of wilting in silence, you can post them on Zinger! Zinger lets you share jokes, one-liners, rap bars, and anything else to get the crowd roaring that comes in at 500 characters or less. Other Zinger users will vote on the app, +1 points per like and -2 points per dislike, to crown the day's best and worst zingers.

### Design

![Design image](zinger_mockup.png)

This mockup shows the main interface that users will engage with when using the Zinger app. It will primarily be a mobile application.

### Key features

- Users will be able to log in to an account securely.
- Accounts will be connected to a username and a history of all the user's posts.
- Users can create and submit posts to the Zinger feed.
- Posts will be able to be viewed in an infinite-scroll format.
- Users will be able to vote on other users' posted "zingers" (jokes).
- User data will be saved to a database upon closing the app.
- Administrators will be able to remove jokes deemed inappropriate.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - HTML will be utilized for four main interfaces. A login page, a settings page, a page for viewing your "zingers", and the main interface, where zingers can be browsed and voted on.
- **CSS** - CSS will be utilized to ensure the content is centered and styled consistently across a number of devices and displays, as well as assisting with the engagement experience of the app.
- **React** - React will be utilized for the dynamic components of the app, such as loading user content, allowing user logins, allowing user creation and submission of "zingers", and allowing voting.
- **Service** - The Service represents endpoints for logins, votes, updating account profiles, submitting "zingers", submitting votes, retrieving account profiles, retrieving "zingers", and retrieving votes.
- **DB/Login** - The Database will store credentials and account info, in addition to all the "zingers" and their respective votes on the platform. Users must be logged in to participate in the Zinger platform.
- **WebSocket** - The WebSocket will facilitate the transmission of data relevant to the app, to synchronize data with the server and all clients.

## 🚀 AWS deliverable

- [x] **Server deployed and accessible with custom domain name** - [zinger](https://startup.scrubware.dev).

## 🚀 HTML deliverable

- [x] **HTML pages** - Four pages for Login, Account Management, Feed, and Creating Posts were created (index.html, account.html, feed.html, post.html).
- [x] **Proper HTML element usage** - Header/Footer/Main/Body tags were used to sort content, proper tags were used for content types.
- [x] **Links** - Each page includes a navigation to all of the other pages, the placeholder advertisement includes a link to its advertised product, and there is a link to the user's Account page from the user's post on the feed (the third post).
- [x] **Text** - Text is present in posts and most content locations.
- [x] **3rd party API placeholder** - There is a placeholder advertisement representing where a 3rd-party API would supply adverts for the platform.
- [x] **Images** - Images exist in the profile icon for each post, the advertisement placeholder, and in the account page.
- [x] **Login placeholder** - There is a login placeholder on the Login page (index.html).
- [x] **DB data placeholder** - The Feed represents the database placeholder as it will be supplied with user-generated content stored in the database (feed.html).
- [x] **WebSocket placeholder** - In the Account page and the Post page (account.html and post.html) there are buttons the user will be able to press to send data over the websocket.

## 🚀 CSS deliverable

- [x] **Header, footer, and main content body** - I implemented a header that stays fixed to the top of the screen when scrolling through the main content body, a footer that is always at the bottom of the screen unless browsing the feed, and a main content body that lays out content in a flexible way where needed.
- [x] **Navigation elements** - I styled the navigation elements to fit those of a more traditional app. The feed (feed.html) can be accessed through the "zinger" button in the top left, the post and account pages (post.html & account.html) can be accessed with button icons in the top right, and the login page (login.html) can be accessed through the "logout" button in the footer.
- [x] **Responsive to window resizing** - Certain content on the account and feed pages adjusts its layout to accommodate smaller views, while the app as a whole dynamically resizes the gutters on the left and right to keep the app experience in portrait mode.
- [x] **Application elements** - Various application elements, including buttons, post elements, and general content layouts, are styled to be visually appealing.
- [x] **Application text content** - Various text elements, including times, button texts, and headers, are styled to be visually appealing.
- [x] **Application images** - Various image elements, including profile icons, profile pictures, button images, and advertisement images, are styled to be visually appealing.

## 🚀 React part 1: Routing deliverable

- [x] **Bundled using Vite** - Used Vite to import critical components, including React, React Router, and Tailwind CSS.
- [x] **Components** - Decomposed each main page into a React component, and additionally decomposed posts and advertisements into their own components as well.
- [x] **Router** - Used the React Router to dynamically load main page content into a single index.html file.

## 🚀 React part 2: Reactivity deliverable

This section is admittedly scrappy at the moment, since this app is more intertwined than Simon.
Still, I managed to implement a minimum-case level of interactivity for now.

- [x] **All functionality implemented or mocked out** - All code that needed to be used more than once was encapsulated into reusable React components, as well as large domains of the project like each page. Some concepts in the app were also abstracted into TypeScript classes for a purer data representation.
- [x] **Hooks** - Hooks were used heavily in the implementation of all interactive components.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
