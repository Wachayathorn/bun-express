import { GetUsers } from "./get-users"

describe("Test_GetUsers" , () => {
    it("Should be success" , ()=> {
        const user = GetUsers()
        expect(user).toEqual("users")
    })
})