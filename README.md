# BillEazzy Webpage

A modern React website for BillEazzy business with a homepage and privacy policy page.

## Features

- Modern, responsive design
- Homepage with hero section, features, and call-to-action
- Privacy Policy page
- Navigation between pages using React Router
- Clean and professional UI

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Project Structure

```
src/
  components/
    HomePage.js          # Main homepage component
    HomePage.css         # Homepage styles
    PrivacyPolicy.js     # Privacy policy page component
    PrivacyPolicy.css    # Privacy policy styles
  App.js                 # Main app component with routing
  App.css                # App-wide styles
  index.js               # Entry point
  index.css              # Global styles
public/
  index.html             # HTML template
```

## Pages

- **Home** (`/`) - Main landing page with business information
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page

## Technologies Used

- React 18
- React Router DOM 6
- CSS3
