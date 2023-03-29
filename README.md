# React Dev Test Assignment ⚛️

https://user-images.githubusercontent.com/12231393/136546219-a49c6ea7-fd63-48b5-8906-04ce8c04a181.mp4

## Description
Try to finish as much TODO's as possible. These are found within the React app codebase. When you view the `/src` folder you will find an application for users that want to create their own addressbook (also shown in the video above). But as mentioned before there are some TODO's to be completed in order to make the application work as expected.

In order to start this assignment you need to:
- ⬇️ Clone this repository
- 👨‍💻 Open up your preferred editor (mine is VS Code)
- 🏃🏻‍♂️ Run `npm install`, and then `npm run dev`
- 🔎  Search for all `TODO:` strings within the `/src` folder and start building!

> Note: You will find some Bonus TODO's. These are not mandatory for completing this assignment. Feel free to flex your programming skills 💪

## TODO's 
Here is a list of all the TODO's to make life a bit easier:

### Styling
- [x] Add the 'Roboto' font from Google fonts and add it as a global CSS var called `--font-primary`.
- [x] Make application responsive. It is already for the most part, but it is not optimal for smaller screens.
- [x] Create separate styles for .primary and .secondary variants of the button component.

### React
- [x] Write a custom hook to set form fields in a more generic way.
- [x] Fetch addresses based on houseNumber and postCode.
- [x] Create generic `<Form />` component to display form rows, legend and a submit button.
- [x] Create an `<ErrorMessage />` component for displaying an error message.
- [x] Add a button to clear all form fields. Button must look different from the default primary button, see design.
- [x] Add conditional classNames for `primary` and `secondary` variant in `<Button />` component

### Redux
- [x] Prevent duplicate addresses.
- [x] Write a state update which removes an address from the addresses array.

### Bonus
- [x] Refactor the code in pages/api/getAddresses so that there is no duplication of logic for street number and postcode digit checking


