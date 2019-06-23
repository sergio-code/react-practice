import jsonPlaceholder from "../apis/jsonPlaceholder"
import { uniq } from "lodash"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts())
	const userIds = uniq(getState().posts.map(post => post.userId))
	userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`)

	dispatch({
		type: "FETCH_USER",
		payload: response.data
	})
}

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts")

	dispatch({
		type: "FETCH_POSTS",
		payload: response.data
	})
}
