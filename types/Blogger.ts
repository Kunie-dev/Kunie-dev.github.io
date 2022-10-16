export type Post = {
  kind: string
  id: string
  blog: {
    id: string
  }
  published: string
  updated: string
  url: string
  selfLink: string
  title: string
  content: string // html string
  author: {
    id: string
    displayName: string
    url: string
    img: {
      url: string
    }
  }
  replies: {
    totalItems: string
    selfLink: string
  }
  labels: string[]
  etag: string
}

export type PostsResponse = {
  kind: string
  etag: string
  items: Post[]
}
