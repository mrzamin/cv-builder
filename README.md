# Benjamin Franklin's Resume

<div align="center">
  
[See it live](#)

![App Preview](#)

</div>
  
## About This Project
 My very first React project! In this project I got a React environment up and running using Vite's React Config and practiced writing reusable components with React state and props.

### Requirements

Build a Resume Builder App that has:

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

- Although I had just learned React concepts including components, JSX, rendering techniques, keys, passing data, and state... I was completely stuck on how to begin this project! I was not yet "thinking in React." I think that takes time and willingness to keep trying. Luckily, the React docs were extremely helpful. They provided detailed examples that I was able to use to identify patterns between the problems they were solving and the problems I was trying to solve. One component pattern that I learned about from the React docs, and implemented, is the Accordion Menu. My resume builder features an Accordion with vertically stacked headers that reveal a different section of the resume form when triggered by mouse click.

Why build a resume builder? Certainly no one is asking for another one to hit the internet. The main learning objective here was to use state and props in my code so that my components can remember things about themselves and be able to display previous form submissions when prompted. This assignment helped me better understand state visually with realtime errors in the console. I also encountered linter warnings about props validation, because I had not yet learned about type checking yet. After doing a bit of research online, I found I could add propTypes, which fixed it.

## What I'd Like to Work On in the Future

- Add a custom JavaScript + CSS solution to maintain the resume's 8.5 x 11 aspect ratio across various screen sizes
- Add option to print and download resume
- Add form validation
- Make it mobile friendly -- note: Responsiveness was not a focus for this one, but I did add media queries to ensure my app would not completely break at smaller screen sizes. I would rework my CSS and layout so that it's cleaner.

## Credits

Color palette from [Tailwind CSS](https://tailwindcss.com/)

Fonts and icons from [Google](https://fonts.google.com/)

## License

© 2024 mrzamin

Licensed under the [MIT License](#)
