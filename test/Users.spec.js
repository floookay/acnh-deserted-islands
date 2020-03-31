// import { mount } from '@vue/test-utils'
import islands from '~/assets/islands.json'
const userData = {}

// Pre-requirement: Correctly formatted json files
// import all data from users
const requireComponent = require.context(
    '../assets/users/',
    false,
    /\w+\.json$/
)
requireComponent.keys().forEach((fileName) => {
    const user = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    if (user === '_template') return 0
    userData[user] = requireComponent(fileName)
})

describe('Users Visits', () => {
    it('only has known islands', () => {
        let atLeastOneIsland = false
        // go through all users
        for (const userName in userData) {
            if (Object.prototype.hasOwnProperty.call(userData, userName)) {
                const user = userData[userName]
                // go through each isle of the user
                for (const islandName in user.islands) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            user.islands,
                            islandName
                        )
                    ) {
                        atLeastOneIsland = true
                        // check if islandName is in islands.json
                        expect(
                            Object.prototype.hasOwnProperty.call(
                                islands,
                                islandName
                            )
                        ).toBe(true)
                    }
                }
            }
        }
        expect(atLeastOneIsland).toBe(true)
        // note: does not detect duplicate islands!
    })
})
