That is normal browser behavior.

For a file input, `e.target.value` shows a fake path like:

```js
"C:\\fakepath\\image.png";
```

Browsers hide the user’s real computer path for privacy/security. A website should not be able to learn something like:

```txt
C:\Users\KESHAV\Pictures\private-image.png
```

So:

```js
e.target.value;
```

is only a fake string—don’t use it for the image.

Use this instead:

```js
const file = e.target.files[0];
```

`file` contains the real selected file object:

```js
console.log(file.name); // 2c6a7756-44ba-4d00-bef7-7795238205dd.png
console.log(file.type); // image/png
console.log(file.size); // file size in bytes
```

For preview:

```js
const previewUrl = URL.createObjectURL(file);
```

So remember:

```js
// Text input
e.target.value;

// File/image input
e.target.files[0];
```

`URL.createObjectURL(file)` creates a temporary local URL for the selected file, so the browser can display it immediately.

```jsx
const file = e.target.files[0];

const previewUrl = URL.createObjectURL(file);

console.log(previewUrl);
// blob:http://localhost:5173/a1b2c3...
```

Then use that URL in `<img>`:

```jsx
<img src={previewUrl} alt="Preview" />
```

Flow:

```txt
User selects image
      ↓
e.target.files[0]  → actual File object
      ↓
URL.createObjectURL(file) → temporary browser URL
      ↓
<img src={temporary URL} /> → image preview
```

It does **not** upload the image to a server. It only lets your React app preview/display that local selected image.

When you no longer need the preview, clean it up:

```jsx
URL.revokeObjectURL(previewUrl);
```

For your current form, this is enough:

```jsx
const file = e.target.files[0];
const previewUrl = URL.createObjectURL(file);

setWrestlersData((currentData) => ({
  ...currentData,
  wrestlerImage: file,
  previewUrl,
}));
```
