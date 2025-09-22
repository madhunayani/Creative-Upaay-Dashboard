// The initial state for our tasks, now updated with relevant GenAI and DevOps tasks.
const initialState = {
  // --- TO DO COLUMN ---
  'task-1': { id: 'task-1', title: 'Complete the RAG Pipeline Project', description: 'Integrate LangChain with a vector database like ChromaDB for the final project.', status: 'To Do', priority: 'High' },
  'task-2': { id: 'task-2', title: 'Fine-tune an Embedding Model', description: 'Use a custom dataset to fine-tune a sentence-transformer model for better domain-specific search.', status: 'To Do', priority: 'Medium' },
  'task-3': { id: 'task-3', title: 'Implement CI/CD for Frontend', description: 'Set up a GitHub Actions workflow to automatically build and deploy the React app to Vercel.', status: 'To Do', priority: 'High' },
  'task-4': { id: 'task-4', title: 'Explore Multi-modal GenAI Models', description: 'Research models that can process both text and images, like CLIP or LLaVA.', status: 'To Do', priority: 'Low' },

  // --- IN PROGRESS COLUMN ---
  'task-5': { id: 'task-5', title: 'Kubernetes and Deployment Course', description: 'Currently on Module 3: Service Meshes and Istio. Aim to finish by the end of the week.', status: 'In Progress', priority: 'High' },
  'task-6': { id: 'task-6', title: 'Containerize Microservices with Docker', description: 'Creating Dockerfiles for the user-auth and payment services. Next step is to set up docker-compose.', status: 'In Progress', priority: 'Medium' },
  'task-7': { id: 'task-7', title: 'Develop Prompt Engineering Guide', description: 'Documenting best practices for writing effective prompts for LLMs.', status: 'In Progress', priority: 'Low' },

  // --- DONE COLUMN ---
  'task-8': { id: 'task-8', title: 'Setup Initial Project Structure', description: 'Initialized React app, installed dependencies, and configured Redux store.', status: 'Done', priority: 'Completed' },
  'task-9': { id: 'task-9', title: 'Build Core UI Components', description: 'Created and styled the Sidebar, Header, and TaskCard components based on Figma.', status: 'Done', priority: 'Completed' },
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    // Note: We would add 'MOVE_TASK' and other actions here.
    default:
      return state;
  }
};

export default tasksReducer;
