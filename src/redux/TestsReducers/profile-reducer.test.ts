import {v1} from "uuid";
import {addPostActionCreator, profileReducer, updateProfileMessageActionCreator} from "../profile-reducer";

export type PostsType = {
    id: string
    message: string
    likeCount: string
}

test('post should be correct added', ()=> {

    let initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ] as PostsType[],
    profileMessage: '',
}

 const endState = profileReducer(initialState ,addPostActionCreator())

    expect(endState).not.toBe(initialState)
    expect(endState.profileMessage).toBe('')
    expect(endState.posts.length).toBe(4)

})

test('profileMessage should be correct updated', ()=> {
    let initialState = {
        posts: [
            {id: v1(), message: 'How are you?', likeCount: '12'},
            {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
            {id: v1(), message: 'Yo!', likeCount: '17'},
        ] as PostsType[],
        profileMessage: '',
    }

    const endState = profileReducer(initialState, updateProfileMessageActionCreator('hello'))

    expect(endState).not.toBe(initialState)
    expect(endState.profileMessage).toBe('hello')
})

