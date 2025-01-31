# palette-picker

### Layout: Structure

- [ ] There is a single `main` element on the page
- [ ] There is a single `h1` element on the page
- [ ] There is a `form`
- [ ] The form has an `h2` label
- [ ] The form has an `text` input and label for the palette title
- [ ] The form has 3 `color` type inputs and labels for the color inputs
- [ ] The form has a `fieldset` with a `legend` for the temperature setting
- [ ] The form has 3 `radio` inputs and `labels` for the temperature setting
- [ ] The form has `neutral` as the default temperature setting
- [ ] The form has a `button` to submit the form
- [ ] There is a `section` for the palettes
- [ ] There is an `h2` showing the palettes section
- [ ] The page has a `ul` and `li` items that show each palette
- [ ] Each palette has the 3 colors clearly visible somehow
- [ ] Each palette has white and black text overlaid on each of the colors
- [ ] Each palette _somehow_ has white and black border on each of the colors
- [ ] Each palette has 3 copy buttons that show the name of the color they _would_ copy
- [ ] Each palette has a delete button
- [ ] Each palette has a banner along the bottom with the name of the temperature
- [ ] Each palette has a banner along the bottom that is colored by the temperature
  - (gray = neutral, red = warm, blue = cool)
- [ ] Palettes appear next to each other in an organized, responsive, well-spaced layout (flex or grid presentations fine)

### layout: Accessibility

- [ ] The form has an `aria-label` or `aria-labelledby` attribute that describes the form
- [ ] The section has an `aria-label` or `aria-labelledby` attribute that describes the section
- [ ] There are no instances of recreating any semantic elements

### Functionality

- [ ] The title is a `required` field, and the form cannot be submitted without it
- [ ] Clicking the form submit button does not reload the page because the default behavior is prevented
- [ ] Clicking the form submit button creates a new palette in the palettes section
- [ ] Clicking the form submit button clears the form
- [ ] Clicking one of the copy buttons copies the hex code of the color to the clipboard
- [ ] Clicking the copy button copies the selected color to the user's clipboard
- [ ] Clicking the copy button alters the text for a second to say "Copied hex!" for 1 second before switching back
- [ ] Clicking the delete button removes the palette from the page
- [ ] Clicking the delete button removes the palette from localStorage (does not come back upon reload of page)
- [ ] On first visit to the page, there are 3 default palettes
- [ ] If a user deletes all their palettes, on next reload, the default palettes appear again
- [ ] A user's palettes are saved to localStorage

### Meta

- [ ] The project is created using Vite
- [ ] The code exists in more than one JS file
- [ ] The project is deployed via GitHub Pages properly
- [ ] The `palettes.json` file is read properly
- [ ] css flexbox or grid was used
- [ ] The code does not render unescaped text directly to the DOM (createElement or other escape method used)
- [ ] `.innerHTML` or `createElement/.append` is used properly at some point in the project
- [ ] `.innerHTML` or `.remove()` is used to delete elements from the DOM.
- [ ] The `setTimeout` method is used to rewrite the copy button text
