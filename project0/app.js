import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native'
import { Constants } from 'expo'

let id = 0

const Todo = props => { <
    View >
        <
        Button > < /Button> <
        Text > { props.todo.text } < /Text> <
        /View>
}

class App extends React.Component {

    state = {
        todos: []
    }

    addTodo() {
        id++
        const text = `item # ${id}`
        this.setState({
            todo: [
                ...this.state.todos,
                { id = id, text: text, isChecked: false }
            ]
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id != id)
        })
    }

    toggleChecked(id) {
        this.setState({
            todos: this.state.todo.map(todo => {
                if (todo.id !== id) return todo
                return {
                    isChecked = !todo.isChecked
                }

            })
        })
    }




    render() {
        return null
    }

}