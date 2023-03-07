# Frontend Mentor - Stats preview card component solution

This is a solution to
the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
  - for me the goal was exact replica for dektop and phone

### Links

[//]: # (- Solution URL: [Add solution URL here]&#40;https://your-solution-url.com&#41;)

- Live Site URL: [https://rb-fem.netlify.app/stats-preview/v1](https://rb-fem.netlify.app/stats-preview/v1)

## My process

- analyzed spacings and correlations in figma
- started fumbling around with flexbox and grid
- settled to work only with flex (after really fighting with both)
- got the desktop version looking close
- started mobile looking for solutions without media queries
- finally introduced a media query due lack of flexpertise
- got mobile design close
- added my debug layer to get exact spacings
- fumbled a lot with margins, paddings and line-heights
- profit

### Built with

- Something like BEM
- Flexbox
- Desktop-first workflow

### What I learned

- fitting an image nicely into a parent
  ```css
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* fills the parent without stretching the image */
      object-position: top right; /* opt. chose a corner for centering */
    }
  ```
- That an easy looking card can take alot of time when not working with a ui library

### Continued development

- improving the mid-width range layout (ex. tablet)
- general improvement of css, full sass usage
- maybe try it again with a mobile-first approach later
