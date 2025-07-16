# YouTube Clone 🎥

A simplified YouTube-style video browser built with **React**, **Vite**, and the **YouTube Data API**.

## 🔍 Features

- Browse popular videos from YouTube
- Search for videos and channels
- View channel info and video details
- Responsive design for mobile and desktop
- Relative time display using Moment.js

## 🧠 What I Learned

This project helped me:

- Deepen my understanding of **REST APIs**, especially handling pagination and dynamic parameters with the YouTube Data API
- Manage **React Router v7** for dynamic routes like `/video/:id` and `/channel/:id`
- Format dates and durations cleanly with **Moment.js**
- Improve the UX by handling **loading states**, **API errors**, and **empty results**

## 🛠️ Tech Stack

- **React 19** – UI library
- **Vite** – Fast development build tool
- **React Router DOM v7** – Routing
- **YouTube Data API** – Fetching video and channel data
- **Moment.js** – Formatting time and durations
- **CSS** – Styling
- **Vercel** – Deployment

## 📦 Installation

```bash
git clone https://github.com/Klumpish/Project-youtube-clone
cd youtube-clone
npm install
npm run dev
```

## 🔑 API Key Setup

- Go to **Google Developers Console**

- Enable the **YouTube Data API v3**

- Create an API key

- Add it to a **.env** file:

```
VITE_API_YOUTUBE_KEY=your_api_key_here
```
