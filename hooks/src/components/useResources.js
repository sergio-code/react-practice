import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
	const [resources, setResources] = useState([])

	const fetchResource = async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		setResources(response.data)
	}

	useEffect(() => {
		fetchResource(resource)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resource])

	return resources
}

export default useResources
