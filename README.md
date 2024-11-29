# The 4th entertainment Company Website

## Overview

This project is a website built for The 4th entertainment using React. The website is styled with vanilla CSS and utilizes Airtable as a CMS (Content Management System). Various libraries were employed to enhance functionality and design.

## Libraries Used

- **Airtable**: Used as a CMS to manage content.
- **AOS**: Provides smooth animations on scroll, enhancing the user experience by adding visual appeal.
- **FontAwesome**: Used to include high-quality icons throughout the website, adding visual elements and improving user engagement.
- **Axios**: Utilized for making HTTP requests to fetch data from the Airtable CMS and handle API interactions.
- **dotenv**: Enables the use of environment variables to store sensitive information securely, such as API keys.
- **React-Icons**: Provides a wide range of icons to choose from and integrate seamlessly into the website's design.
- **React-Router-DOM**: Used for declarative routing in the application, allowing for navigation between different pages without page refresh.
- **React-Loader-Spinner**: Used to display loading spinners during data fetching or processing, enhancing the user experience by indicating progress.
- **React-Scroll**: Allows smooth scrolling to specific sections of the website, improving navigation and accessibility.
- **Swiper**: Provides a touch-enabled slider/carousel component, enhancing the presentation of content such as testimonials or featured talent.

## Features

- **Dynamic Content**: Fetches and displays talent profiles, events, and other data from Airtable CMS dynamically.
- **Smooth Animations**: Utilizes AOS library to add smooth animations on scroll, enhancing the visual appeal of the website.
- **Responsive Design**: Ensures the website is fully responsive and optimized for various screen sizes and devices.
- **Loading Spinners**: Displays loading spinners during data fetching or processing to indicate progress to users.
- **Smooth Scrolling**: Implements smooth scrolling to specific sections of the website for improved navigation and user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jbsmall17/The4thEntWebsite.git
2. Install dependencies:
    ```bash
    cd The4thEntWebsite
    npm install
3. Create a .env file in the root directory and add your Airtable API key:
  VITE_BASE_ID=
  VITE_BASE_TOKEN=
  VITE_PLAYLIST_ID=
  VITE_EVENT_ID=
  VITE_BLOG_ID=
  VITE_SUBSCRIBERS_ID=
  VITE_SONG_ID=
  VITE_EXECS_PICTURE_ID=
  VITE_HOME_MEDIA_ID=
  VITE_SERVICE_ID=
  VITE_TALENT_ID=
  VITE_ENDPOINT=
4. Start the development server:
   ```bash
   npm run dev
5. Open http://localhost:5173 in your browser to view the website.
