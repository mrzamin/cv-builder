# Benjamin Franklin's Resume

<div align="center">
  
[Live Demo](https://resume-builder-lime-gamma.vercel.app/)

![App Preview](https://github.com/mrzamin/cv-builder/assets/142754418/bfdeddbd-d270-43d0-9870-f1960900982c)


</div>
  
## About This Project
 My very first React project!!! In this project I got a React environment up and running using Vite's React Config and practiced writing reusable components with state and props.

### Requirements

A Resume Builder App that has:

- a contact information section
  - name
  - email
  - phone
- a section to add educational experiences
- a section to add practical experiences
- a section to add skills
- Ability to edit and re-submit submissions

### Deployment

- Deploy the app with Netlify, Vercel, or Cloudflare

## Lessons Learned

- Although I had just learned React concepts including components, JSX, rendering techniques, keys, passing data, and state... I was completely stuck on how to begin this project! I was not yet "thinking in React." Luckily, the [React docs](https://react.dev/learn) were extremely helpful. They provided detailed examples that I was able to use to identify patterns between the problems they were solving and the problems I was trying to solve. One component pattern that I learned about from the React docs, and implemented, is the Accordion Menu. My Resume Builder features an Accordion with vertically stacked headers that reveal a different section of the form when triggered by mouse click.
- I encountered linter warnings about props validation, because I had not yet learned about type checking yet. After doing a bit of research online, I found that I could add propTypes, which fixed the problem.
- The main learning objective here was to use state and props in my code so that my components remember things about themselves and are able to display previous form submissions when prompted. This assignment helped me better understand state visually with realtime errors in the console. I also discovered [React Dev tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

## What I'd Like to Work On in the Future

- Add a custom JavaScript + CSS solution to maintain the resume's 8.5 x 11 aspect ratio across various screen sizes
- Add option to print and download resume
- Add form validation
- Make it mobile friendly -- note: Responsiveness was not a focus for this one, but I did add media queries to ensure my app would not completely break at smaller screen sizes. In the future I would rework my CSS and layout so that it has optimal responsiveness.

## Credits

Color palette from [Tailwind CSS](https://tailwindcss.com/)

Fonts and icons from [Google](https://fonts.google.com/)

## License

© 2024 mrzamin

Licensed under the [MIT License](#)
