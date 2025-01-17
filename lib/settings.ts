interface Settings {
  metadata: {
    title: string
  }
  db: {
    path: string
    name: string
  }
  options: {
    tags: {
      [key: string]: string
    }
  }
  primaryRoutes: {
    [destination: string]: string
  }
}

export const settings: Settings = {
  metadata: {
    title: "Custom Blog"
  },
  db: {
    path: "./db",
    name: "users",
  },
  options: {
    tags: {
      Test: "bg-red-500",
      Dev: "bg-blue-400"
    }
  },
  primaryRoutes: {
    "About": "/about",
    "Contact": "/contact",
    "Blog": "/blog",
  }
}
