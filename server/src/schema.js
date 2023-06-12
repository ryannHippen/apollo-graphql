const gql = require("graphql-tag")

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
    }
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "AUthor of a complete Track"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`

module.exports = typeDefs;