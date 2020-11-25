---
slug: /
---

# Installing mc-build

[Video Tutorial on installing mc-build (Credit - AncientKingg)](https://streamable.com/bcljw4)

To install mc-build on your device you must first install Node.js. Simply visit their site ([nodejs.org](https://nodejs.org/en/)) and download and run the installer.

Once node is finished installing open a command prompt and run this command: `npm i -g mc-build`

Tada! mc-build is now installed.

# Creating a development environment

To create a mc-build datapack, simply navigate to your chosen `world/datapacks` folder, and create a new datapack folder.

Then inside the datapack folder, create a `src` folder, and a pack.mcmeta file. (The pack.mcmeta is identical to a vanilla pack.mcmeta)

Then open a command prompt and navigate to your new datapack folder.

Once inside your datapack folder, run the command `mcb`.

That's it! Your datapack is now ready for development.

# Creating a config file

Open a command prompt and navigate to your datapack folder. Then:

- To create a JSON config: `mcb -config json`
- To create a JavaScript config: `mcb -config js`
