const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './employeeList_commands'
import './login_commands'
import './ourPeople_commands'
import './pagination_commands'
import './searchOurPeople_commands'
import './searchPIM_commands'
import './userProfileDisplay_commands'
import './userProfileDetails_commands'
import './newsFeed_commands'
import './newsFeedEditPost_commands'
import './newsfeed_addPost_commands'
import './newfeed_deletePost_commands'
import './newsFeed_AddComment_commands'
import './newsfeed_deleteComment_commands'
import './admin_editSkill_commands'
import'./admin_getSkills_commands'
import './userProfileSkillList_commands'
import './admin_deleteSkill_commands'
import './admin_addSkills_commands'
import './userProfileUpdateSkills_commands'
import './admin_getProjectsList_commands'
import './userProfileProjectsList_commands'
import './admin_addProject_commands'
import './admin_deleteProject_commands'
import './admin_updateProject_commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')