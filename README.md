# Novanet Ghost Theme

Custom Ghost theme for [blog.novanet.no]()

## How to run the Novanet Ghost theme locally

Requires [node js and npm](https://nodejs.org/en/download/)

### 1. Install Ghost

- Install Ghost-CLL   
  `npm i -g ghost-cli@latest`
- Create a local folder, `cd` into it and create a ghost instance   
  `ghost install local`
- Blog with standard theme should run at  
   http://localhost:2368/
- Create an account at http://localhost:2368/ghost/ and complete the first-time setup

### 2. Apply the Novanet theme and content

- Export current live content from  
  https://novanet-blog.ghost.io/ghost/#/settings/labs
- Import exported content to local blog at  
  http://localhost:2368/ghost/#/settings/labs
  (some images may have to be uploaded manually to be displayed correctly)
- Import the custom theme by
  - Clone the theme from git  
  `git clone https://github.com/novanet/Ghost-theme.git`  
  - Zip it
  - Upload by using the "Upload a theme" functionallity at   
  http://localhost:2368/ghost/#/settings/design

## Upload changes to theme in production

- Zip the content of the local theme
- Upload and activate by using the "Upload a theme" functionallity at   
  https://novanet-blog.ghost.io/ghost/#/settings/design


## Links

[Blog editor](https://novanet-blog.ghost.io/ghost/)
