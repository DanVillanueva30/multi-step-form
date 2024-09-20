# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made


### Links

- Solution URL: https://your-solution-url.com
- Live Site URL: https://your-live-site-url.com

## My process

It was a really interesting and challenging project. At first, I thought it would be easy to complete, but when I started coding I realized the importance of the little details such as the steps spheres and how could I change their background color when someone navigates between the different steps of the project. Before adding any interaction or functionality to the site I decided to create "static" components meaning I did everything using only HTML and Tailwindcss, I wanted to make sure that the whole website looked exactly( or pretty close) like the design images. This decision helped me identify unnecessary or repeated code.

I decided to use react-router-dom because it's a really good library and I thought it was perfect for this project. With this tool, I was able to set different Routes for the different steps and create a unique Layout that contained the sidebar and another section where I could render different components, depending on the current step the user was on. It also allowed me to organize these components in a folder named "Views" like in the MVC pattern and render them into a specific Route. Using the useLocation() hook, it was really easy to change the background color of the steps spheres. I created an array of steps where each step is an object with a key named "href" with the same value as its description. By comparing the href value with the route pathname, I could change the color.

To validate the fields of the personal information form I used react-hook-form, this is a tool that I've recently started to use and I thought it was a great opportunity to implement it, However I later realized it might not be the best option because this is the only form and component where I can use it. Although it makes input validation easier I will start working on a solution without this tool.

Finally, to be able to show the summary information of the chosen options (subscription plan and the add-ons) I created a context that allowed me to handle a global state and set the different states for the components without creating a local state and having to pass it via props to another one. I'm not gonna lie, it was challenging and a bit difficult to set up, but I felt awesome when I made it work. Instead of importing the useContext hook and the AppContext every time, I created a custom hook that handles that, so I only need to import the custom hook.


### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev) - Is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org) - JS library
- [Tailwindcss](https://tailwindcss.com) - CSS framework
- [React Router](https://reactrouter.com/en/main) - React library
- [React Hook Form](https://react-hook-form.com) - React library


### What I learned

I learned more about TailwindCSS, for example, how to set custom colors, fonts,and how to add a background image, etc. The documentation is amazing, really easy to understand, and there are a lot of useful examples.
I reinforced my knowledge about how to handle  global state and learned new things as well without using a library like Zustand.


### Continued development

I'll keep practicing with TailwindCSS. I think it is a really good framework and also really easy to work with.

### Useful resources

- [hsl to rbg](https://hslpicker.com) - This helped me to convert hsl colors to rgb
- [tailwindcss docs](https://tailwindcss.com) 


## Author

- Frontend Mentor - [@DanVillanueva30](https://www.frontendmentor.io/profile/DanVillanueva30)

