<h3 align="center">Bootstrap Coded Templates by TheNocturnalDevGypsy</h3>
<p align="center"><strong>You like the Repo? Don't forget to 🌟, 👁️, 🔱 and ❤️!</strong></p>
<p align="center">
   <img src="https://img.shields.io/badge/Purpose-PLAYGROUND%20+%20EXPLORING-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Purpose-PLAYGROUND + EXPLORING">
   <img src="https://img.shields.io/badge/Version-3.0.0-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Version 3.0.0">
   <img src="https://img.shields.io/badge/Lang-HTML%20|%20CSS%20|%20JavaScript-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Lang-HTML|CSS|JavaScript">
   <img src="https://img.shields.io/badge/Framework-Bootstrap%205.3.3-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Framework-Bootstrap 5.3.3">
   <img src="https://img.shields.io/badge/Contribute-OPEN-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Contribute-OPEN">
   <img src="https://img.shields.io/badge/License-MIT-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="License MIT">
   <img src="https://img.shields.io/badge/Last%20Update-12.04.2025-%2300416a?logoColor=white&labelColor=%2300416a&color=%2324292e&textColor=white" alt="Last Update 12.04.2025">
  <a href="https://ko-fi.com/thenocturnaldevgypsy"><img src="https://img.shields.io/badge/Support%20me%20via%20Ko--Fi-%2300416a?logo=ko-fi&logoColor=white&color=%2300416a&textColor=white" alt="Support me via Ko-Fi"></a>
  <a href="https://github.com/sponsors/thenocturnaldevgypsy"><img src="https://custom-icon-badges.demolab.com/badge/Sponsor%20me%20at%20GitHub-%2300416a?logo=heart&logoColor=white&color=%2300416a&textColor=white" alt="Sponsor me at GitHub"></a>
</p>

## ![SECTION About this Repository](https://custom-icon-badges.demolab.com/badge/-About%20this%20Repository-2471AE?logo=repo&logoColor=white&labelColor=2471AE)

`bootstrap-coded-templates` is one of my ongoing personal projects aimed at refreshing and leveling up my skills with the latest Bootstrap release. The focus is on designing and building a collection of responsive themes, optimized for `mobile`, `tablet`, and `desktop`, across various subjects and use cases.

![SUBSECTION Live URLs](https://custom-icon-badges.demolab.com/badge/-Live%20URLs-24292e?logo=globe&logoColor=white&labelColor=00416a)

- Via GitHub Pages: https://
- Via Vercel : https://

## ![SECTION Available Bootstrap coded Templates](https://custom-icon-badges.demolab.com/badge/-Available%20Bootstraps%20coded%20Templates-2471AE?logo=book&logoColor=white&labelColor=2471AE)
| Template | Pages | # of Styles | Description |
| ------------- | ------------- | ------------- | ------------- |
| Personal Site - Nightfall | Multi-page | 1 | A multi-page personal website. Has the basic pages needed: Home, About, Education, Experience, Portfolio, Services, Contact Details (no contact form yet) |
| Link in Bio - Simple | One Page | 6 | A simple template/theme for Link in Bio. Comes with a profile image, cover/banner, social medial icons, link buttons with descriptions, and different backgrounds |
| Link in Bio - Lite | One Page | 6 | A lite template/theme for Link in Bio. Just a profile image, social medial icons, link buttons, and different backgrounds |


## ![SECTION Build With ❤️ and ...](https://custom-icon-badges.demolab.com/badge/-Build%20With%20❤️%20and%20...-2471AE?logo=tools&logoColor=white&labelColor=2471AE)

**IDE and OS**
```
Visual Studio Code
Version: 1.99.0 (user setup)
Commit: 4437686ffebaf200fa4a6e6e67f735f3edf24ada
Date: 2025-04-02T21:35:19.530Z
Electron: 34.3.2
ElectronBuildId: 11161073
Chromium: 132.0.6834.210
Node.js: 20.18.3
V8: 13.2.152.41-electron.0
OS: Windows_NT x64 10.0.19045
```
**Docker and Nginx Details**
- [Docker .env](.env)
- [docker-compose.yml](docker-compose.yml)
- [Nginx Config](nginx\default.conf)

**Frameworks, Libraries and Tools**
- Bootstrap 5.3.3 https://github.com/twbs/bootstrap
- Bootstrap Icons https://github.com/twbs/icons
- FontAwesome 6 Icons (Free) https://github.com/FortAwesome/Font-Awesome
- Google Font: Ubuntu https://fonts.google.com/specimen/Ubuntu
- AOS (Animate on scroll) https://github.com/michalsnik/aos
- imagesLoaded https://github.com/desandro/imagesloaded
- Isotope https://github.com/metafizzy/isotope
- purecounterjs https://github.com/srexi/purecounterjs
- Swiper.js https://github.com/nolimits4web/swiper
- Typed.js https://github.com/mattboldt/typed.js
- Waypoint.js (No Framework) https://github.com/imakewebthings/waypoints
- Nginx 1.27.4 (Docker Image Tag: `nginx:latest`)

## ![SECTION Folders and Files Structure](https://custom-icon-badges.demolab.com/badge/-Folders%20and%20Files%20Structure-2471AE?logo=file-submodule&logoColor=white&labelColor=2471AE)

At the moment, the repository contains the following files and directory structure, where:
```
project-root/
├─ .github/                                   # for FUNDING.yml and future GH workflows (if needed)
├─ md_assets/                                 # assets folder for markdown files (repo documentation)
├─ nginx/                                     # Nginx configuration directory
│    └─ default.conf                          # Nginx configurations (DEV Env)
├─ source code/                               # App's source code
│    ├─ assets/                               # assets folder for images, css, js and libraries for index.html
│    │    ├─ css/                             # main directory for storing css file for index.html
│    │    ├─ images/                          # main directory for storing image files for index.html
│    │    │   ├─ favicons/                    # favicons for the website for index.html
│    │    │   └─ portfolio/                   # portfolio mockup images for index.html
│    │    ├─ js/                              # main directory for storing js files for index.html
│    │    └─ library/                         # main directory for the framework and libraries used for index.html
│    ├─ template-linkinbio-lite/              # bootstrap theme, also contain their own assets folder
│    ├─ template-linkinbio-simple/            # bootstrap theme, also contain their own assets folder
│    ├─ template-personalsite-nightfall/       # bootstrap theme, also contain their own assets folder
│    └─ index.html                            # inventory/catalog page of the bootstrap templates available
├─ .env                                       # .env for docker-compose.yml (DEV Env)
├─ .gitignore                                 # files ignored by Git
├─ bootstrap-coded-templates.code-workspace   # VS Code workspace config
├─ CHANGELOG.md                               # project changelog documentation
├─ CONTRIBUTING.md                            # contribution protocol documentation
├─ docker-compose.yml                         # Docker setup for this project (DEV Env)
├─ LICENSE                                    # license file
└─ README.md                                  # project documentation
```
Templates are stored separately in their dedicated directories (e.g. `template-linkinbio-lite` , `template-personalsite-detailed`) and it has the following files and directory arrangement. For example:
```
├─ source code/ 
│    └─ template-linkinbio-lite/
│          ├─ assets/                        # assets folder for images, css, js and libraries
│          │    ├─ css/                      # main directory for storing css file
│          │    ├─ images/                   # main directory for storing image files
│          │    │   └─ favicons/             # favicons for the website
│          │    ├─ js/                       # main directory for storing js files
│          │    └─ library/                  # main directory for the framework and libraries used
│          ├─ template-linkinbio-lite.zip    # zip file of the template
│          └─ index.html                     # homepage / index of the template/theme
```

## ![SECTION Roadmap](https://custom-icon-badges.demolab.com/badge/-Roadmap-2471AE?logo=tasklist&logoColor=white&labelColor=2471AE)
See the [open issues](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/issues) and [backlog](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/milestones) for the list of proposed features (and known issues).

## ![SECTION Changelog](https://custom-icon-badges.demolab.com/badge/-Changelog-2471AE?logo=log&logoColor=white&labelColor=2471AE)

Below is the latest updates, go to the [Changelog Listing](CHANGELOG.md) for the complete information.

| Version | Date | Commit/Issue/PR | Type | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 3.0.0 | 12.04.2025 | [I#9](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/issues/9), [PR#](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/pull/) | refactor, build, docs | - Renamed the repo to `bootstrap-coded-templates`<br>- Added Docker and Nginx setup/config (Dev Env)<br>- Merged all Bootstrap templates I've made into this repo, changed the directory setup for easy management<br>- Updated Labels and enabled discussions in this repo<br>- Updated documentation and contribution guidelines<br>- Deployed at Vercel and GitHub Pages |

## ![SECTION Contribute](https://custom-icon-badges.demolab.com/badge/-Contribute-2471AE?logo=code-of-conduct&logoColor=white&labelColor=2471AE)
Contributions are welcome! Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for more details on how to contribute to the project.

## ![SECTION Forking the Repo](https://custom-icon-badges.demolab.com/badge/-Forking%20the%20Repo-2471AE?logo=repo-forked&logoColor=white&labelColor=2471AE)

If you'd like to use this repo for your own project, I would like to ask a favor from you:
- Please do `Star` and `Watch` this repo? Or, maybe ❤️ by:
  
  <a href="https://ko-fi.com/thenocturnaldevgypsy"><img src="https://img.shields.io/badge/Support%20me%20via%20Ko--Fi-%2300416a?logo=ko-fi&logoColor=white&color=%2300416a&textColor=white" alt="Support me via Ko-Fi"></a> <a href="https://github.com/sponsors/thenocturnaldevgypsy"><img src="https://custom-icon-badges.demolab.com/badge/Sponsor%20me%20at%20GitHub-%2300416a?logo=heart&logoColor=white&color=%2300416a&textColor=white" alt="Sponsor me at GitHub"></a>
- Click `Fork` at the top of this page.
- Please be mindful of the [LICENSE](LICENSE.md) applicable

## ![SECTION License](https://custom-icon-badges.demolab.com/badge/-License-2471AE?logo=file-badge&logoColor=white&labelColor=2471AE)
Distributed under the MIT License by [Abegail Torrendon / thenocturnaldevgypsy](https://github.com/thenocturnaldevgypsy).
- You can freely modify and reuse.
- The original [LICENSE](LICENSE.md) must be included with copies of this software.
- Please link back (if you can fork, the better) to this repo. 

## ![SECTION Get in Touch](https://custom-icon-badges.demolab.com/badge/-Get%20in%20Touch-2471AE?logo=pencil&logoColor=white&labelColor=2471AE)
I'd love to hear your thoughts on the project and get your suggestions. Feel free to [create new issue](https://github.com/thenocturnaldevgypsy/gypsyshards-bootstrap-template-linkinbio/issues/new) on this repo or you can also contact me by [creating a new discussion](https://github.com/thenocturnaldevgypsy/thenocturnaldevgypsy/discussions/new?category=ask-me-anything-ama-and-q-a) at **💬 Ask Me Anything! (AMA and Q&A)** category under my GitHub Profile Repo's Discussions.

We would love to hear your thoughts on this project and get your suggestions and feedbacks (especially if you used it!). You can contact the maintainers in this project's [discussions](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/discussions) section.
- 📣 [Announcements & Updates](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/discussions/categories/announcements-updates) : Announcements, updates and roadmaps from maintainers.
- 💡 [Ideas + Community Vote!](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/discussions/categories/ideas-community-vote) : Share ideas for new features and let the community vote for it!
- 🎉 [IN ACTION! Show and Tell!](https://github.com/thenocturnaldevgypsy/bootstrap-coded-templates/discussions/categories/in-action-show-and-tell) : If you have a particularly cool way of using this project/repo, show it off by sharing it here!
- 💬 [Q & A](https://github.com/thenocturnaldevgypsy/REPONAME/bootstrap-coded-templates/categories/q-a) :  Ask the maintainers about... anything you want. Ask questions. Receive answers.

Also, feel free to contact me (author) by [creating a new discussion](https://github.com/thenocturnaldevgypsy/thenocturnaldevgypsy/discussions/new?category=ask-me-anything-ama-and-q-a) at **💬 Ask Me Anything! (AMA and Q&A)** category under my GitHub Profile Repo's Discussions.