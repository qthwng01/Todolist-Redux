import { Col, Row, Input, Button, Select, Tag, Form } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todosRemainingSelector } from '../../redux/selectors'

export default function TodoList() {
  const dispatch = useDispatch()
  const [todoName, setName] = useState('')
  const [todoPriority, setPriority] = useState('Medium')
  //const [todoCompleted, setCompleted] = useState(false)

  const dataTodoList = useSelector(todosRemainingSelector)

  const handleAddButtonClick = () => {
    if (!!todoName) {
      dispatch(
        addTodo({
          id: uuidv4(),
          name: todoName,
          completed: false,
          priority: todoPriority,
        })
      )
      setName('')
      setPriority('Medium')
    }
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {dataTodoList.map((item) => (
          <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed={item.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Form>
          <Input.Group style={{ display: 'flex' }} compact>
            <Input value={todoName} onChange={handleInputChange} placeholder="Add something..." />
            <Select defaultValue="Medium" value={todoPriority} onChange={handlePriorityChange}>
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
            <Button type="primary" onClick={handleAddButtonClick}>
              Add
            </Button>
          </Input.Group>
        </Form>
      </Col>
    </Row>
  )
}
