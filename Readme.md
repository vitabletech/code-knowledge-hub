# 🧠 Developer Knowledge Base (Offline App)

This is an offline-capable, searchable knowledge base for developers. It is a Progressive Web App (PWA), meaning it can be installed and accessed even without an internet connection after the first load.

---

## 🚀 Features

- Categorized accordion-style entries
- Searchable knowledge tips
- Random tip display on each load
- Offline support via Service Worker
- Installable as a PWA
- Bootstrap-based responsive UI

---

## 📁 Folder Structure

```

.
├── index.html
├── data.js
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
├── manifest.json
├── service-worker.js
└── icon.png (optional)

```

---

## 📦 Installation

1. **Download and extract** the ZIP file or Clone the repo.
2. Open `index.html` in a web browser.
3. The app will cache files automatically on first load.

---

## 📴 Offline Use

- After opening once online, the app will work offline.
- Uses a service worker to cache essential files.

---

## 📲 PWA Installation (Optional)

- On supported browsers, you'll see a prompt to install the app to your home screen.
- It runs like a native app after installation.

---

## 📝 Customize Your Knowledge

Edit ```data.js``` to update or expand the knowledge base. Format:

```js
const categorizedKnowledgeData = {
"Category": [
        { id: "1", content: "Tip content here" }
    ]
};
```
## 🔒 Notes

* Ensure your browser supports service workers (most modern browsers do).
* For full PWA functionality, consider serving over HTTPS.

---

## 🛠️ Credits

* Built with [Bootstrap 5](https://getbootstrap.com)
* Powered by Vanilla JS and Service Workers

---

## 📧 Feedback

Feel free to contribute or report issues!