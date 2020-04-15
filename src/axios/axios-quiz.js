import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiz-react-7b148.firebaseio.com/'
})