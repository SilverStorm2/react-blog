# Blog.app

Modern React + Redux blog playground that lets you browse articles, read their details, add new entries, edit existing ones, and remove those you no longer need. The UI is built on React Bootstrap components and the data layer is backed by a tiny Redux store with selectors for each view.

## Live demo

> Replace the placeholder below with the deployed Replit URL after you run `http-server ./build` on your Replit instance.
>
> https://your-replit-url.replit.app

## Tech stack

- React 19 with React Router 6 and Redux for routing and state management.
- React Bootstrap for layout and components.
- Sass for custom styling.
- `http-server` serves the production-ready bundle (perfect for Replit or any static host).

## Available scripts

Run everything with Yarn (preferred) or npm.

| Command | Description |
| ------- | ----------- |
| `yarn start` | Launches CRA dev server on <http://localhost:3000>. |
| `yarn build` | Produces an optimized build inside `build/`. |
| `yarn serve:prod` | (Optional) Add `\"serve:prod\": \"http-server ./build\"` to `package.json` or run `npx http-server ./build` to preview the production bundle locally. |

## Deploying to Replit

1. Push this repository to GitHub.
2. Create a new Replit project from the repo.
3. In the “Run” command field enter `http-server ./build`.
4. Hit **Run** – Replit will install dependencies, use the pre-built files from `build/`, and serve them via HTTP.
5. Copy the public URL Replit shows and place it in the “Live demo” section above.

## Project structure

```
src/
├── components/
│   ├── features/   # shared, state-aware widgets like forms and modals
│   ├── pages/      # route-level views (Home, PostAdd, PostEdit, SinglePost, etc.)
│   └── views/      # layout pieces such as NavBar, Header, Footer
├── styles/         # global SCSS overrides
├── postsRedux.js   # selectors + reducer (add/edit/remove posts)
├── initialState.js # seed data
└── store.js        # Redux store setup
```

## Development notes

- Posts are stored in Redux, seeded via `initialState.js`, and can be created/edited/deleted through dedicated forms.
- Shared `<PostForm>` handles all controlled form logic; `<AddPostForm>` and `<EditPostForm>` simply inject submit handlers.
- Deleting a post uses a confirmation modal and navigates back to the home screen automatically.

## License

MIT © Blog.app
