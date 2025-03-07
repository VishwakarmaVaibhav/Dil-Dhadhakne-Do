import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

import BottomBar from "../components/BottomBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import StepTracker from "../components/StepTracker.jsx";
import SleepTracker from "../components/SleepTracker.jsx";
import WaterTracker from "../components/WaterTracker.jsx";
import HeartRateTracker from "../components/HeartRateTracker.jsx";
import WorkoutTracker from "../components/WorkoutTracker.jsx";

const componentsList = [
  { id: "profile", component: <ProfileCard /> },
  { id: "step", component: <StepTracker /> },
  { id: "sleep", component: <SleepTracker /> },
  { id: "water", component: <WaterTracker /> },
  { id: "heart", component: <HeartRateTracker /> },
  { id: "workout", component: <WorkoutTracker /> },
];

// Helper function to get saved order or default
const getSavedOrder = () => {
  try {
    const savedOrder = localStorage.getItem("dashboardOrder");
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);

      // Validate that each component exists in `componentsList`
      const validOrder = parsedOrder
        .map((item) => componentsList.find((c) => c.id === item.id) || null)
        .filter(Boolean);

      return validOrder.length > 0 ? validOrder : componentsList;
    }
  } catch (error) {
    console.error("Error loading from localStorage:", error);
  }
  return componentsList;
};

const HomePage = () => {
  const [components, setComponents] = useState(getSavedOrder);

  useEffect(() => {
    localStorage.setItem("dashboardOrder", JSON.stringify(components));
  }, [components]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = [...components];
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);

    setComponents(reordered);
  };

  const SafeComponent = ({ component }) => {
    try {
      return component;
    } catch (error) {
      console.error("Component rendering error:", error);
      return <div className="text-red-500">Component Error</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 content-center pb-24 p-4">
      <HeroSection title="Dil Dhadhakne Do" tagline="Your catchy slogan goes here!" />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-4">
              {components.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <motion.div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: snapshot.isDragging ? 0.8 : 1 }}
                      transition={{ duration: 0.2 }}
                      
                    >
                      <SafeComponent component={item.component} />
                    </motion.div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>



      <BottomBar />
    </div>
  );
};

export default HomePage;
