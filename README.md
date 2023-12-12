<h3 align="center">
	<img width=400 src="https://github.com/DarkGuy10/Toodles/assets/62807269/ac26ae77-8c66-4179-8eeb-d9c6eaeefa3e"/><br><br>
	「Toodles」
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/toodles"><img src="https://img.shields.io/npm/v/toodles?colorA=1e1e28&colorB=f2cecf&style=for-the-badge&logo=npm"></a> 
  <a href="https://github.com/DarkGuy10/Toodles/stargazers"><img src="https://img.shields.io/github/stars/DarkGuy10/Toodles?colorA=1e1e28&colorB=c9cbff&logoColor=D9E0EE&style=for-the-badge&logo=starship"></a> 
  <a href="https://github.com/DarkGuy10/Nukecord/issues"><img src="https://img.shields.io/github/issues/DarkGuy10/Nukecord?colorA=1e1e28&colorB=bee4ed&logoColor=D9E0EE&logo=gitbook&style=for-the-badge"></a>
</p>

<p align="center">
Toodles is a very minimalist logger for javascript/typescript projects. It is a looks-first uitility and the colors used are based on the <a href="https://github.com/catppuccin/catppuccin#-palette">Catpuccin Mocha</a> color palette.
</p>

&nbsp;

### ⚙️ Installing

```
# With npm
npm i toodles

# With yarn
yarn add toodles

# With pnpm
pnpm add toodles
```

### 📚 Documentation

Toodles is an **ESM-only package**, meaning you cannot use `require()` statements for importing it. You will have to stick to the `import/export` format.

Start by importing the `Toodles` class.

```ts
import Toodles from "toodles";
```

All the log functions are static class fields of this class.

- ##### `plain(message)`

  returns: `void`

  Print a plain message (same as console.log)

- ##### `error(message)`

  returns: `void`

  Print an error message

- ##### `success(message)`

  returns: `void`

  Print a success message

- ##### `info(message)`

  returns: `void`

  Print an info message

- ##### `warn(message)`

  return: `void`

  Print a progress message

- ##### `progress(message)`

  return: `void`

  Print a progress message

&nbsp;

### 📜 License

<a href="https://github.com/darkguy10/Toodles/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/darkguy10/Toodles?style=for-the-badge&labelColor=302D41&color=C9CBFF"/></a>

Toodles is released under the MIT license, which grants the following permissions:

- Commercial use
- Distribution
- Modification
- Private use

For more convoluted language, see the [LICENSE](https://github.com/darkguy10/Toodles/blob/main/LICENSE.md).
