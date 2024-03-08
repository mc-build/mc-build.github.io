# Getting Started with MC-Build

Getting started with MC-Build is easy! This guide will walk you through the process of installing MC-Build and creating your first project.

## Installing MC-Build
In order to install MC-Build, You'll first need Node.js.

If you don't already have Node.js, visit their site ([nodejs.org](https://nodejs.org/en/)) and download and run the installer.

Once you've installed Node.js, open a command prompt and run the following command:

```bash
npm i -g mc-build
```

That's it! MC-Build is now installed.

You can run `mcb` in the command prompt to verify that MC-Build is installed correctly:

```
$ mcb
MCB - A Minecraft Data Pack build tool.

Usage: ...
```

## Creating a New Project.

MC-Build comes with a command to help you quickly setup a new project. Simply navigate to your chosen `world/datapacks` folder, then run the following command:

```bash
mcb create my_epic_datapack
```

This will create a new folder called `my_epic_datapack` in your `world/datapacks` folder, and set up a basic project structure for you.

## The Project Structure

- `my_epic_datapack` - This is the root folder of your project.
    - `pack.mcmeta` - This file is identical to a vanilla `pack.mcmeta` file.
    - `src` - This folder is where you'll write your MC-Build code.
    - `data` - MC-Build will compile your code into this folder, which is the same structure as a vanilla data pack.
    - `mcb.config.js` - The configuration file for your project.

## Building Your Project

Navigate to your project folder and run the following command:

```bash
mcb watch
```

This will start the MC-Build compiler in watch mode, which will automatically compile your code whenever you make changes.

You can also run `mcb build` to compile your code once, without watch mode.

That's it! Your project is now ready for development.

## What's Next?

Check out the [Language Features](language-features/index.md) documentation for more information on how to write MC-Build code. 
