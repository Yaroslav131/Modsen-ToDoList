import { TaskType } from '@/types';
import { FlatList, ListRenderItem } from 'react-native';
import Task from '../Task';

interface TaskFlatListProps {
    tasks: TaskType[]
}

function TaskFlatList(props: TaskFlatListProps) {
    const renderItem: ListRenderItem<TaskType> = ({ item }) => (
        <Task
            forTime={item.forTime}
            description={item.description}
            id={item.id}
            isCompleted={item.isCompleted}
            tillTime={item.tillTime}
            title={item.title}
        />
    );

    const keyExtractor = (item: TaskType) => item.id;

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={props.tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={1}
        />
    );
}

export default TaskFlatList;