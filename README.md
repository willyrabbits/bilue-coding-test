# React Dev Test Assignment ⚛️

https://user-images.githubusercontent.com/12231393/136546219-a49c6ea7-fd63-48b5-8906-04ce8c04a181.mp4

## Description
Try to finish as much TODO's as possible. These are found within the React app codebase. When you view the `/src` folder you will find an application for users that want to create their own addressbook (also shown in the video above). But as mentioned before there are some TODO's to be completed in order to make the application work as expected.

In order to start this assignment you need to:
- ⬇️ Clone this repository
- 👨‍💻 Open up your preferred editor (mine is VS Code)
- 🏃🏻‍♂️ Run `npm install` and then `npm start`
- 🔎  Search for all `TODO:` strings within the `/src` folder and start building!

> Note: You will find some Bonus TODO's. These are not mandatory for completing this assignment. Feel free to flex your programming skills 💪

## TODO's 
Here is a list of all the TODO's to make life a bit easier:

### Styling
- [ ] Add the 'Roboto' font from Google fonts and add it as a global CSS var called `--font-primary`.
- [ ] Make application responsive. It is already for the most part, but it is not optimal for smaller screens.
- [ ] Create separate styles for .primary and .secondary variants of the button component.

### React
- [ ] Write a custom hook to set form fields in a more generic way.
- [ ] Fetch addresses based on houseNumber and postCode.
- [ ] Create generic `<Form />` component to display form rows, legend and a submit button.
- [ ] Create an `<ErrorMessage />` component for displaying an error message.
- [ ] Add a button to clear all form fields. Button must look different from the default primary button, see design.
- [ ] Add conditional classNames for `primary` and `secondary` variant in `<Button />` component

### Redux
- [ ] Prevent duplicate addresses.
- [ ] Write a state update which removes an address from the addresses array.

### Bonus
- [ ] Refactor the code in pages/api/getAddresses so that there is no duplication of logic for street number and postcode digit checking


