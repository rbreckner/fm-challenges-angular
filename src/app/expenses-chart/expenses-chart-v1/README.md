# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart


## Links

[//]: # (- Solution URL: [Add solution URL here]&#40;https://your-solution-url.com&#41;)
- Live Site URL: [https://rb-fem.netlify.app/expenses-chart/v1](https://rb-fem.netlify.app/expenses-chart/v1)

## My process

- imported all color and text properties into scss
- tried to give everything a unique class and created mixins for everything
- discovered a lot of returning patterns and duplication
- media queries dont work in nested mixins 
  - converted text mixins to classes and used them directly
- created a rough version of mobile and desktop style
- used [PixelParallel Extension](https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob) to create exact matches

### Built with

- CSS custom properties
- Mixins + Media Queries
- Flexbox & Grid
- Mobile-first workflow
- Angular


### What I learned

---

#### Angular
style units can get bound directly
  ```html
  <div [style.height.%]="item.amount / maxAmount * 100">...</div>
  ```

---

#### scss / css: 
easy breakpoints with combination of mixin + media query
```scss
@mixin for-desktop-up {
  @media (min-width: 650px) {
    @content;
  }
}
```
Read more here: [Writing Media Queries with Sass Mixins](https://itnext.io/writing-media-queries-with-sass-mixins-3ea591ea3ea4)

<br />

 using mixins for building complex styles
```scss
@mixin text-base() {
  font-family: 'DM Sans', 'sans-serif';
  font-style: normal;
  text-decoration: none;
  text-transform: none;
}
    
.text-body {
  @include text-base;
  font-size: 15px;
  font-weight: 400;
  @include for-desktop-up {
    font-size: 18px;
  }
    
  &-bold {
    font-weight: 700;
  }
}
```

<br />

centering an element by its own center (without margin to something else)
```css
.tooltip {
  ...
  left: 50%;
  transform: translateX(-50%);
}
```

---


### Useful resources
- [Writing Media Queries with Sass Mixins](https://itnext.io/writing-media-queries-with-sass-mixins-3ea591ea3ea4) - Great Medium article about that topic
- [PixelParallel Extension](https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob) - A neat extension to compare the result with the design directly in the browser

