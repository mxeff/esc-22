import "./DragDropList.scss";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface Props {
  children: (id: number, index: number, isDragging: boolean) => React.ReactNode;
  state: Array<number>;
  onDragEnd: (result: Array<number>) => void;
}

const DragDropList = ({
  children,
  state,
  onDragEnd,
}: Props) => {
  const reorder = (list: Array<number>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      state,
      result.source.index,
      result.destination.index
    );

    onDragEnd(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="drag-drop-list"
          >
            {state.map((id, index) => {
              return (
                <Draggable
                  draggableId={id.toString()}
                  index={index}
                  key={id.toString()}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {children(id, index, snapshot.isDragging)}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropList;
