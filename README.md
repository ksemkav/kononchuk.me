# Kononchuk + ceramics

This is my small static landing page, showcasing me and my hobbies.

## Deployment

This project is deployed to GitHub Pages with a custom domain: [kononchuk.me](https://kononchuk.me). Deployment is handled by the [gh-pages](https://www.npmjs.com/package/gh-pages) package.

To deploy the application (builds and pushes to `gh-pages` branch):

1. Build the app
    ```bash
    npm run build
    ```
1. Deploy to `kononchuk.me`

    ```bash
    npm run deploy_me
    ```
1. Deploy to `kononchuk.ru`

    ```bash
    npm run deploy_ru
    ```
1. **OR** Deploy both

    ```bash
    npm run deploy
    ```
