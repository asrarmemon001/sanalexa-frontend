export const NAV_ITEM = {
    superAdmin: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard"
      },
      {
        name: "Sector",
        path: "/sector",
        icon: "table_view"
      },
      {
        name: "Package",
        path: "/package",
        icon: "receipt_long"
      },
      {
        name: "Project",
        path: "/project",
        icon: "assignment"
      },
      { // Simulanis as a default organization for B2C
        name: "Organizations",
        path: "/organization",
        icon: "view_in_ar"
      },
      {// crate user 
        name: "Subscriptions",
        path: "/subscription",
        icon: "loyalty"
      },
    ],
    organization: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard"
      },
      {
        name: "Departments",
        path: "/department",
        icon: "business"
      },
      {
        name: "Project",
        path: "/project",
        icon: "assignment" //list
      },
      {
        name: "Users", // list create edit
        path: "/user",
        icon: "groups"
      },
      {
        name: "Psychometrics MCQ",
        path: "/psychometricMcq",
        icon: "quiz"
      },
      {
        name: "Game MCQ",
        path: "/gameMcq",
        icon: "feed"
      },
      {
        name: "Licence Management",
        path: "/licenceManagement",
        icon: "dashboard"
      },
      {
        name: "Quizbox", 
        path: "/quizbox",
        icon: "quiz",
        navItems:[
          {
            name: "App Status", 
            path: "/quizbox/application-status",
            icon: "autorenew", 
          },
          {
            name: "MCQ", 
            path: "/quizbox/mcq",
            icon: "quiz", 
          },
          {
            name: "Locations", 
            path: "/quizbox/locations",
            icon: "location_on", 
          },
          {
            name: "Teams", 
            path: "/quizbox/team",
            icon: "group", 
          },
          {
            name: "Categories", 
            path: "/quizbox/categories",
            icon: "category", 
          },
          {
            name: "Single Player", 
            path: "/quizbox/single-player",
            icon: "person", 
          },
          {
            name: "Multi Player", 
            path: "/quizbox/multi-player",
            icon: "groups", 
          },
          {
            name: "Live Feed", 
            path: "/quizbox/live-feed",
            icon: "feed", 
          },
          {
            name: "Leaderboard", 
            path: "/quizbox/leaderboard",
            icon: "leaderboard", 
          },
        ]
      },
    ],
    department: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard"
      },
      {
        name: "Project",
        path: "/project", // list
        icon: "assignment"
      },
      {
        name: "Users",
        path: "/user",
        icon: "view_in_ar" // list create edit
      },
    ],
    user: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard"
      },
      {
        name: "Project",
        path: "/project", // list
        icon: "assignment"
      },
      {
        name: "SOPs", // 
        path: "/sop",
        icon: "view_in_ar"
      },
    ]
  }
  