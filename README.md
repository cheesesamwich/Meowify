# Meowify
An electron wrapper for the spotify web client with custom extensions and modding support

![banner](https://github.com/cheesesamwich/Meowify/assets/149597648/11b5891e-1725-4ad3-a249-aafd0e59ae82)

## Installation

### For now there are no builds, so you have to run the software directly from your terminal (feel free to build your own locally for proper use)

Install `pnpm`:

```shell
npm i -g pnpm
```

Clone the project:

```shell
git clone https://github.com/cheesesamwich/Meowify
cd Meowify
```

Install dependencies:

```shell
pnpm install --frozen-lockfile
```

Start Meowify:
```shell
pnpm start
```
## Custom extensions

### To install custom extensions, simply create a new folder with the path `Meowify/extensions/user` and place any extension folders in there, only unpacked chrome extensions are supported (don't quote me on that one).

## Included extension credits

[Ublock Origin](https://github.com/gorhill/uBlock)
