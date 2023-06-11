# Alphitter - Simple Twitter Clone

### 📜 Table of Contents 

<details>
<summary>Click me</summary>

- [Alphitter - Simple Twitter Clone](#alphitter---simple-twitter-clone)
  - [📜 Table of Contents](#-table-of-contents)
  - [💡 Overview](#-overview)
    - [👀 Live demo: https://weilocus.github.io/twitter/](#-live-demo-httpsweilocusgithubiotwitter)
    - [🧩 Built with](#-built-with)
    - [💪 Our Team 小組成員](#-our-team)
      - [前端組員](#前端組員)
      - [後端組員](#後端組員)
  - [✨ Features](#-features)
    - [User Features](#user-features)
      - [首頁](#首頁)
      - [使用者個人頁面](#使用者個人頁面)
      - [設定頁面](#設定頁面)
      - [互動](#互動)
    - [Admin Features 後台功能](#admin-features-後台功能)
    - [Mobile Preview 手機版畫面](#mobile-preview-手機版畫面)
  - [🚀 Getting Started 開始使用](#-getting-started-開始使用)
  - [💻 Technologies 開發環境與工具](#-technologies-開發環境與工具)
    - [📦 File Structure 專案結構](#-file-structure-專案結構)
  - [🙏 Acknowledgements 致謝](#-acknowledgements-致謝)

</details>

## 💡 Overview

Alphitter is the final collaborative project for Alpha Camp, which is developed within 2 weeks using Agile methodology by four team members, two of whom are responsible for the front-end and two for the back-end. This repo shows the front-end part of the project. For the back-end code, please refer to [this link](https://github.com/yhhuangfrank/twitter-api-2020).

### 👀 Live demo: https://weilocus.github.io/twitter/

### 🧩 Built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 💪 Our Team

#### Front-end team

- Weii
- Kelly CHI

#### Back-end team

- Frank
- Wei Lin

### Mobile Preview

![](public/mobile-preview.jpg)

## ✨ Features

- Publish tweets and see the updated feed immediately

  ![Tweet Demo](/public/tweet-demo.gif)
  
- Like and leave comments to the tweets you like

  ![Reply](/public/reply-demo.gif)
 
- Customzie your profile pictures and introduction easily

![Edit](/public/edit-user-info-demo.gif)

### User Features

#### Home page

- Click on the input box to send tweets
- View all tweets on the site, sorted by publish time from newest to oldest
- View a specific tweet and replies listed from newest to oldest

#### Personal page

- View tweets from a specific user, sorted from newest to oldest
- View replies from a specific user, sorted from newest to oldest
- View a a specific user's liked tweets, sorted from newest to oldest
- Edit your user name, introduction, cover photo, and profile picture

#### Settings page

- Manage your account, username, email and password settings

#### Interact with other users

- Reply to other users' tweets
- Click to like or unlike your own tweets or those of other users
- See the top 10 users that have the most followers on the 'Recommended' section
- Click to follow or unfollow users

### Admin Features

- Log in as an administrator and get a clear message if you make a mistake when logging in
- View all tweets on the 'Tweet list page'
- Click to delete any tweet on the tweet list page and a confirmation window will pop up
- Browse all registered users on 'User list page', sorted by the number of tweets, with the most being the first

## 🚀 Run locally

1. Clone the project to your loacl enviroment：

```bash
$ git clone "https://github.com/WeiLocus/twitter.git"
```

2. 在本地開啟之後，透過終端機進入資料夾，輸入：

```bash
$ npm install
```

3. 安裝完畢後，繼續輸入：

```bash
$ npm run dev
```

4. 打開瀏覽器輸入網址：`http://localhost:5173/twitter` 即可進入網站

5. 前台測試帳號：

```
帳號：user1
密碼：12345678
```

6. 後台測試帳號：

```
帳號：root
密碼：12345678
```

7. 若要暫停使用，可在終端機輸入以下指令：

```bash
ctrl + c
```

## 💻 Technologies

- node.js 16.16.0
- vite 4.2.1
- vite-plugin-svgr 2.4.0
- react 18.2.0
- react-dom 18.2.0
- react-router-dom 6.9.0
- react-spinners 0.13.8
- styled-components 5.3.9
- clsx 1.2.1
- axios 1.3.4
- eslint 8.36.0
- prettier 2.8.4

### 📦 File Structure

```
-- public
-- src
  |__ app.jsx
  |__ api
  |__ assets
    |__ icons
  |__ components
    |__ elements
    |__ layouts
  |__ contexts
  |__ pages
```

## 🙏 Acknowledgements

A million thanks to all the team members for successfully completing the goal in just two weeks with the highest standard, it was great to work with you guys!
