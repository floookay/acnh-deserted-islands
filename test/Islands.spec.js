// import { mount } from '@vue/test-utils'
import islands from '@/assets/islands.json'

describe('Islands JSON', () => {
    it('is a valid JSON', () => {
        // stringify throws an error with invalid json
        expect(JSON.stringify(islands).length).toBeGreaterThan(2)
        // note: does not detect duplicate keys!
    })
    // it('has no duplicate island names', () => {
    // })
    // it('has no duplicate images', () => {
    //     const imgs = {}
    //     for (const islandName in islands) {
    //         if (Object.prototype.hasOwnProperty.call(islands, islandName)) {
    //             const island = islands[islandName]
    //             if(!Object.prototype.hasOwnProperty.call(imgs, island.img)){
    //                 // duplicate
    //             } else {
    //                 // new island
    //                  imgs[islands.img] = true
    //             }
    //         }
    //     }
    // })
    // it('has an image (file check)', () => {

    // })
})
