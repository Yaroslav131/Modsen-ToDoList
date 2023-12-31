import { FlatList, ListRenderItem } from 'react-native';

import { SubTaskType } from '@/types';
import SubTask from '../SubTask';

interface SubTaskFlatListProps {
  tasks: SubTaskType[];
  onDeleteSubTasks?: (id: string) => void;
  isEdited?: boolean;
}

function SubTaskFlatList(props: SubTaskFlatListProps) {
  const renderItem: ListRenderItem<SubTaskType> = ({ item }) => (
    <SubTask
      id={item.id}
      isCompleted={item.isCompleted}
      title={item.title}
      onDeleteSubTasks={props.onDeleteSubTasks}
      isEdited={props.isEdited}
    />
  );

  const keyExtractor = (item: SubTaskType) => item.id;

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

export default SubTaskFlatList;
