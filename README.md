# PSST

Pretty Sweet Streaming Tools.

Made with Deno and React.

[See it live here!](https://psst.smessina.com/)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development](#development)
3. [Contributing](#contributing)
4. [Authors](#authors)
5. [License](#license)

## Introduction

I do some streaming and have found a few needs when doing so. This app is meant to remedy those needs, one-by-one.

## Development

```
git clone https://github.com/regexpressyourself/psst.git
cd psst
```

First, you'll need a `.env` file in the root directory with the following information:

```
LASTFM_KEY={Last.fm API key}
LASTFM_SECRET={Last.fm API secret}
```

More on these things below:

### Server

First, you need Deno. Deno's new, so the best way to get it may change over time. Generally, following the instructions at [deno.land](https://deno.land/) should help.

Next, you need a [Last.fm API key and password](https://www.last.fm/api/account/create). Add them to the `.env` file as detailed above.

- Quick note: make sure you save this -- Last.fm doesn't let you access them again.

Finally, run:

```
deno run --allow-net --allow-read --allow-env back/serve.ts
```

Your Deno server will be running off of [http://localhost:8123](http://localhost:8123).

(Side note: I like using [denon](https://deno.land/x/denon) for auto-reload. Just replace `deno` with `denon` in the command above)

### Client

The client is a [Create React App](https://github.com/facebook/create-react-app) build.

To run it, just install and start her up!

```
cd front
yarn
yarn start
```

The React server is on [http://localhost:3000](http://localhost:3000).

### Production Build

To create a production build, you'll just need to create a production-ready front end bundle.

```
make build
```

The server is already pointing at the production build location, so opening up the same routes on port `:3011` should show your production app.

## Contributing

I'm always happy to receive pull requests, questions/issues regarding code, and feature requests on all my projects. Please feel free to open an issue or submit a pull request.

## Authors

- **[Sam Messina](https://smessina.com)** - _Sole Developer_

## License

WAILto is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

**[Back to top](#table-of-contents)**
