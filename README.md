# [Session 0 - GA Capstone](http://session-0-frontend.vercel.app/)
## Description

**Session 0** is a social groups app designed to help tabletop roleplayers find groups to join! There are many features in the pipeline for further functionality, but this initial prototype is an example of how the app would function at a small scale.

The new tech I'll be learning for this project is FaunaDB and FQL. This will be used to manage the social connections at the center of the app. 

### Project Links
- [Back end Github](https://github.com/davidvdev/session-0-backend)
- [Front end Github](https://github.com/davidvdev/session-0-frontend)
- [Back end deployment](https://session-0-dv.herokuapp.com/)
- [Front end deployment](https://session-0-frontend.vercel.app/)

### Wireframes and React Architecture
- [Basic Wireframe and Data Relationships](https://i.imgur.com/IhOJ7pu.jpg?1)
- [Onboarding Screens and Logic](https://i.imgur.com/suEb8NB.jpg)
- [User Data Model Concept](https://i.imgur.com/F77zwtc.jpg)

### Routes Table
- Due to the way Fauna handles authentication, all requests from logged in users are POST requests. 

| Url | Method | Collection | Index |  Function |
| --- | ------ | ---------- | ----- | --------- |
| `/` | GET | none | - | Test route to show DB is online |
| `/login` | POST | Users | users_by_email | login a user has already created an account, returns a token and userRef |
| `/signup` | POST | Users | users_by_email | creates a new user and then immediately logs them in. also fills in boilerplate profile information | 
| `/logout` | POST | - | - | invalidates usertoken to confirm logout (not yet implemented on frontend)|
| `/user/:id` | POST | Users | - | get a users profile by their userRef |
| `/user` | PUT | Users | - | allows the logged in user to update their profile |
| `/group` | POST | Groups | - | create a new group (doesn't assign user relationships to group)|
| `/group/:id` | POST | Groups | member_by_group, member+role_by_group | Returns all info needed to render a group's page, including user roles and relationships to the group |
| `/allgroups` | POST | Groups | all_groups_paginate | returns a list of all groups and their information |
| `/group/:id` | PUT | Groups | update a group's information |
| `/joingroup` | POST | Relationships, Groups, Users | - | uses the logged in users userRef and targeted group's userRef to create a new relationship in the Relationships collection. A role is also assigned based on which button triggered this event|
| `/home` | POST | Groups, Users | group_by_member | returns a list of all groups the logged in user has a relationship to |

### Original Time/Priority Matrix

| Component                             | Priority | Est. Time | Actual Time |
| ------------------------------------- |:-:| :-------: | :---------: |
| Collection setup                      | H | 4 hrs |   |
| CRUD route                            | H | 2 hrs |   |
| Social connections                    | H | 2 hrs |   |
| Home Page/Feed                        | H | 3 hrs |   |
| User Profile Page                     | H | 1 hrs |   |
| User Profile - Player section         | M | 2 hrs |   |
| User Profile - GM section             | M | 2 hrs |   |
| Group Search Page                     | H | 2 hrs |   |
| Group Details Page                    | M | 3 hrs |   |
| User login/authentication             | H | 4 hrs |   |
| Functional Styling                    | M | 3 hrs |   |
| Final Styling                         | L | 4 hrs |   |   
| Total                                 |   | 32 hrs |   |

### Actual Task-Time Tracking

| Loc | Task | Time |
| :-: | ----|-----:|
|  B  | Repos & Deployment | 0.5hrs |
|  B  | User Login | 2hrs |
|  B  | New Account Creation | 0.5 hrs |
|  B  | Authenticated User Requests | 2 hrs |
|  F  | Learning Recoil | 0.5 hrs |
|  F  | Frontend Setup | 1 hr |
|  F  | Onboarding Screens & Forms | 3.5 hrs |
|  F  | User Login | 2hrs |
|  F  | User Account Creation | 2 hrs |
|  F  | Profile pages/components | 2 hrs |
|  F  | Search Page (nonfunctional) |  1 hr |
|  F  | Persistant login | 0.5 hrs |
|  F  | Create a Group | 1 hr |
|  F  | Fetch profile info on page load | 1.5 hr |
|  B  | Create a Group |  1 hr |
|  F  | Fetch Group info on page load |  0.5 hr |
|  F  | Group collections in search | 2 hrs | 
| F/B | Can Update Group(not permission restricted) | 1 hr |
|  F  | Final(ish) Styling Session 1 | 1.5 hrs |
| B/F | Return groups the logged in user belongs to | 1.5 hrs |
|  F  | Style Onboarding Forms | 1.5 hrs |
|  F  | Better profile editor | 4 hrs |
|  B  | Add roles to group relationships | 1 hr |
| B/F | Final bug fixing and feature implementation | 5 hrs |
|  F  | Final Styling Session 2 | ----- |
| B/F | Total Time: | 41 hrs |

## MVP/Post-MVP
### MVP
- User can create a profile
    - each profile has two views Player, and Game Master
- User can create a group
- User can join a group
- User can find a group via in-app searching

### Post-MVP
- Desktop Layout
- In group roles
    - who are the players, who is the GM?
- support searching for different game systems
- support a "character" section of the player profile that allows them to store their character sheets as a part of their profile
- Users can follow other users

## Components - Descriptions
| Page | Description |
| ---- | ----------- |
| **EditProfile** | Page holds a Header and the form required to edit a user's profile |
| **FormPage** | Page holds a Header and the GroupForm component |
| **Group** | Contains a Header and displays all information to the selected group |
| **Home** | Main landing page once a user logs in contains a Header, Footer, and GroupsDisplay |
| **Login** | Contains a LogoSplash and LoginForm. User must go through this page or SignUp to access App |
| **Profile** | Contains a Header, ProfileGM, and ProfilePC. Includes all information relevant to selected user |
| **Search** | Contains a Header, GroupsDisplay, and search form that filters what groups are passed to GroupsDisplay |
| **SignUp** | Contains a LogoSplash and SignUpForm. Part of the onboarding process, and pushes user to SignUpDetails before Home |
| **SignUpDetails** | Collects some additional information to be displayed in the user's profile, can be skipped without consequence |
| **Welcome** | Contains a LogoSplash and allows a user to login or signup |

| Component | Description |
| --------- | ----------- |
| **CreateGroup** | small card that displays on the Home page and Search page directing users to create a new group |
| **Footer** | appears on the home page and allows the user to access their profile as well as the group search |
| **GroupForm** | form that is used to create a new group as well as edit an existing group |
| **GroupsDisplay** | displays a list of cards with a small amount of group info, redirects to group page on click |
| **Header** | displays on almost every page, displays page name and optional edit and navigation functions |
| **HeroImage** | used on group pages and profiles. renders the bannerimg for groups. renders the bannerimg + profileimg for users |
| **LoginForm** | form component used for logging in |
| **LogoSplash** | Used on onboarding screens to display logo, tagline, and other graphical elements |
| **Participants** | shows the members of a group and allows users to click through to each profile |
| **ProfileGM** | user profile component that displays the information about that user's GM profile |
| **ProfilePC** | user profile component that displays the information about that user's PC profile  |
| **SignUpForm** | form component that captures crucial account information for new users |

## Database & Collections
- Users
- Groups
- Relationships

### Indexes
- all_groups
- all_groups_paginate
- group_by_member
- groups_by_name
- member_by_group
- member+role_by_group
- users_by_email
- users_by_name

## Additional Libraries
- FaunaDB as database
    - (might look into other graph dbs for social network purposes)
- React Recoil
    - for state management across pages & components
