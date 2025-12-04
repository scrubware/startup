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

- [x] **Node.js/Express HTTP service** - The service is implemented with Node.js and Express HTTP. 
- [x] **Static middleware for frontend** - Static files are served from the public folder.
- [x] **Calls to third party endpoints** - If there are no posts in the feed, an image of a random cat with a notification to the user will be placed in the feed. Third-party endpoint provided by cataas.com. Click "Zinger" in the top left to refresh the cat. Click "clear feed" in the bottom right to clear the feed if you have added posts.
- [x] **Backend service endpoints** - Endpoints are implemented server-side for login, register, logout, making posts, and getting the feed.
- [x] **Frontend calls service endpoints** - Server endpoints are called via HTTP requests for login, register, logout, making posts, and getting the feed.
- [x] **Supports registration, login, logout, and restricted endpoint** - Login, Register, Logout, Posting to the Feed, and Viewing the Feed are all supported. Clearing the feed is supported for the purpose of testing the service, but will not be in the final application.


## 🚀 DB deliverable

- [x] **Stores data in MongoDB** - Data is stored in a persistent MongoDB cluster.
- [x] **Stores credentials in MongoDB** - Account credentials are stored in a persistent MongoDB cluster, and passwords are hashed.

## 🚀 WebSocket deliverable

- [x] **Backend listens for WebSocket connection** - The backend listens for WebSocket connections.
- [x] **Frontend makes WebSocket connection** - The frontend attempts WebSocket connection.
- [x] **Data sent over WebSocket connection** - Newly created posts are sent over WebSocket to be immediately added to other users' feeds without needing to refresh the page.
- [x] **WebSocket data displayed** - The data transmitted over WebSocket are newly created posts, which are added to the feed and displayed instantly.
- [x] **Application is fully functional** - The application supports creating and deleting posts, along with user registration/login and viewing the feed of all posts. Due to the strict nature of the platform, everyone is required to have a Paul Giamatti profile picture and a Paul Giamatti bio. Therefore, to prevent users from breaking the unspoken Giamatti rule, the ability to change the bio or profile picture has been deprecated. Usernames and display names do still show up on your account page to prove it's you.

Note that in order to test the functionality of the WebSocket, you will need to open two instances of the Zinger client.
In addition, you might not have permission to delete a post on one or the other of your logged-in accounts due to cookies, as you're really only supposed to log in with one account at a time.
