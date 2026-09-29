# PKI USM Student Feedback Portal

An anonymous feedback portal for Indian students at Universiti Sains Malaysia (USM), built for
PKI (Persatuan Kebudayaan India). Part of **Manifesto Initiative #2: Empowering Every Student Voice.**

Students can submit academic, welfare, sporting, cultural, and facilities feedback with full
control over anonymity and visibility. The PKI committee reviews everything through a protected
dashboard with search, filters, status tracking, and statistics.

## Tech stack

- **React 18** + **Vite** — app shell and build tooling
- **Tailwind CSS** — styling, dark mode via the `class` strategy
- **React Router** — client-side routing
- **Firebase Firestore** — feedback storage
- **Firebase Authentication** — committee/admin login
- **Recharts** — dashboard statistics and charts
- **lucide-react** — icons

## Project structure

```
pki-usm-feedback-portal/
├── src/
│   ├── components/       # Navbar, Footer, ManifestoBanner, FeedbackCard, StatCard
│   ├── context/           # ThemeContext (dark mode)
│   ├── lib/                # firebase.js, feedbackService.js (Firestore access layer)
│   ├── pages/             # Home, FeedbackForm, StudentVoices, AdminLogin, Dashboard,
│   │                        About, FAQ, Contact, PrivacyPolicy, NotFound
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── firestore.rules         # Security rules — copy into your Firebase project
├── vercel.json              # SPA rewrite rule for Vercel
├── .env.example
└── tailwind.config.js
```

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Firebase project credentials
npm run dev
```

## Firebase setup

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Firestore Database** (production mode).
3. Enable **Authentication → Email/Password**, and manually create one account per committee
   member who should access the dashboard at `/committee/login`.
4. In the Firestore console, go to **Rules** and paste the contents of `firestore.rules`. This
   ensures:
   - Anyone can create a feedback document (students never need to sign in).
   - Only `public` feedback is readable by anonymous visitors (Student Voices page).
   - Private feedback and full detail require a signed-in committee account.
   - Only the `upvotes`/`upvotedBy` fields can be touched without signing in — status changes
     require a committee login.
5. Copy your Firebase web app config into `.env` (see `.env.example`).

## Deploying to Vercel

```bash
npm run build
```

1. Push this project to a GitHub repository.
2. Import it in [vercel.com/new](https://vercel.com/new).
3. Add the same environment variables from `.env` in the Vercel project settings
   (Settings → Environment Variables).
4. Deploy — `vercel.json` already includes the rewrite rule needed for React Router.

## Notes on privacy

- Anonymous submissions never include a name, matric number, or email — those fields are simply
  omitted from the write, not just hidden in the UI.
- Public submissions on the Student Voices page never reveal identity unless a student both
  disabled anonymity **and** filled in their name.
- See `src/pages/PrivacyPolicy.jsx` for the full policy shown to students in the app.

## Customisation

- **Logo**: replace the `Mic` icon placeholder in `src/components/Navbar.jsx` and
  `src/pages/Home.jsx` with an `<img>` tag pointing at your PKI crest.
- **Colours**: all brand colours (`ink`, `crimson`, `marigold`, `sand`, `leaf`) are defined in
  `tailwind.config.js`.
- **Categories**: edit the `CATEGORIES` array in `src/pages/FeedbackForm.jsx`,
  `src/pages/StudentVoices.jsx`, and `src/pages/Dashboard.jsx` to add or rename categories.
