# Nikhil Gaur — Portfolio

A single-page React portfolio built from your resume content (Vite + plain JavaScript, no TypeScript).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Adding your profile picture

Right now the sidebar shows a placeholder badge with your initials ("NG") instead of a photo.

1. Drop your photo into `public/`, e.g. `public/profile.jpg`.
2. Open `src/components/Sidebar.jsx` and replace:

   ```jsx
   <div className="avatar-placeholder" aria-label="Profile photo placeholder">
     NG
   </div>
   ```

   with:

   ```jsx
   <img className="avatar-placeholder" src="/profile.jpg" alt="Nikhil Gaur" />
   ```

3. The `.avatar-placeholder` CSS class already sizes and circles the image — for an `<img>` you'll also want to add `object-fit: cover;` to that class in `src/App.css` so the photo crops nicely instead of stretching.

## Contact form (sending real email)

The Contact section now has a working form, not just a mailto link.

- **Zero setup**: out of the box, submitting the form opens the visitor's own email client with your address, subject, and their message pre-filled.
- **Real in-page sending (optional)**: to have the form send email directly without opening a mail client, sign up for a free [EmailJS](https://www.emailjs.com) account, then fill in `src/emailConfig.js`:

  ```js
  export const EMAILJS_SERVICE_ID = "your_service_id";
  export const EMAILJS_TEMPLATE_ID = "your_template_id";
  export const EMAILJS_PUBLIC_KEY = "your_public_key";
  ```

  Your EmailJS template should expect the variables `from_name`, `from_email`, `message`, and `to_email`. Once all three values are filled in, the form automatically switches to sending through EmailJS instead of the mailto fallback.

## What's new in this pass

- Scroll-triggered reveal animations on every section (`src/components/Reveal.jsx`), plus an animated hero on load and a spinning gradient ring around the avatar.
- A self-drawn, continuously scrolling tech-logo marquee under the hero (`src/components/TechLogos.jsx`, `LogoMarquee.jsx`) — these are original simplified icons, not copies of any company's official logo artwork.
- Colored "logo" badges (initials in a rounded square) next to each employer in Experience — swap `CompanyBadge` for a real `<img>` once you have logo files.
- A floating "back to top" button, hover-lift on project rows, skill tags, and tech tags.
- The layout now fills the full browser width instead of capping at ~960px.

## Structure

```
src/
  data.js                 → all resume content lives here (edit freely)
  emailConfig.js           → EmailJS credentials (optional)
  App.jsx                    → composes the page sections
  App.css                     → theme tokens + animations + styling
  components/
    Sidebar.jsx               → nav rail + photo placeholder + background blobs
    Hero.jsx                   → summary + illustration + logo marquee
    HeroGraphic.jsx              → animated node illustration
    TechLogos.jsx, LogoMarquee.jsx → scrolling tech-stack strip
    Experience.jsx                 → work history timeline + company badges
    CompanyBadge.jsx                 → logo placeholder
    Projects.jsx                      → project write-ups
    Skills.jsx                         → grouped tech tags
    Credentials.jsx                     → certifications + achievements
    Education.jsx                        → education history
    Contact.jsx, ContactForm.jsx           → contact section + working form
    Reveal.jsx                              → scroll-triggered animation wrapper
    BackToTop.jsx                            → floating scroll-to-top button
    Blobs.jsx                                 → decorative background shapes
```

## Notes

- Certifications and Achievements were pulled from your base resume version.
- The Interests section was intentionally left out, per your request.
- LinkedIn/GitHub links in `src/data.js` are placeholders (`#`) — add your real URLs there.
