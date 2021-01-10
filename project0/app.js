import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'

let id = 0

const Todo = props => (
    <View>
    <Switch value={props.todo.isChecked} onValueChange={props.onToggle} />
    <Text> {props.todo.text} </Text>
    <Button title="delete" onPress={props.onDelete} />
    </View>
)

class App extends React.Component {

    state = {
        todos: []
    }

    addTodo (){
        id++
        const text = `item # ${id}`
        this.setState ({
            todos: [
                ...this.state.todos,
                {id: id, text: text, isChecked: false},
            ],
        })
    }

    removeTodo (id){
        this.setState({
        todos: this.state.todos.filter(todo => todo.id != id)
    })
}

toggleChecked (id){
    this.setState({
        todos: this.state.todos.map (todo => {
            if (todo.id !== id) return todo
            return {
                id: todo.id,
                text: todo.text,
                isChecked: !todo.isChecked
            }

        })
    })
}


render() {
    return (
      <View>
        <Text>TODO LIST</Text>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text> Unchecked count: {this.state.todos.filter((todo) => !todo.isChecked).length} </Text>
        <Button onPress={() => this.addTodo()} title="Add todo" />
        <ScrollView>
          {this.state.todos.map((todo) => (
            <Todo
              onToggle={() => this.toggleChecked(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}