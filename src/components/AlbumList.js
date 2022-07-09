import React, { Component } from 'react'
import axios from "axios";
import './AlbumTable.css'

class AlbumList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            albums: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({albums: response.data })
            })
            .catch(errorMessage => {
                console.log(errorMessage)
                this.setState({errorMessage: 'There is an error' })
            })
    }

    deleteRow(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(() => {
                this.setState({albums: this.state.albums.filter(album => album.id !== id) })
            })
    }

    render() {
        const {albums, errorMessage} = this.state
        return (
            <div>
                <h1>Lists of Albums</h1>
                {albums.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Thumbnail</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {albums.map(album => (
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                    <td><img src={album.thumbnailUrl} alt=""/></td>
                                    <td>
                                        <button className='delete' onClick={element => this.deleteRow(album.id, element)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <div>{errorMessage}</div>
                }
            </div>
        )
    }
}

export default AlbumList;