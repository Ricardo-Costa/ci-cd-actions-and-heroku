## CI/CD with GitHub Actions and Heroku

This project show how configure a `CI/CD` pipeline with NodeJs application and `GitHub Actions + Heroku services`.

Settings:
- Config two secrets on the project, `HEROKU_API_KEY` and `HEROKU_APP_NAME`.

Heroku CLI:
- https://devcenter.heroku.com/categories/command-line
- https://devcenter.heroku.com/articles/heroku-cli#download-and-install
- https://devcenter.heroku.com/articles/authentication

Heroku Commands:
- `heroku apps`
- `heroku login`
- `heroku apps:info --app my-app-name`
- `heroku logs --tail --app my-app-name`
- `heroku run bash --app my-app-name`

API:
- https://`my-app-name`.herokuapp.com/

References:
-  https://blog.logrocket.com/ci-cd-node-js-github-actions
-  https://github.com/Ricardo-Costa/start-with-github-actions