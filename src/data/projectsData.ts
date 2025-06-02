export interface Project {
  id: string;
  title: string;
  description: string[]; // Array of bullet points
  technologies: string[];
  githubLink?: string;
  liveLink?: string; // Optional live link
  imagePlaceholder?: string; // Optional placeholder for image/graphic
}

export const projectsData: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: [
      "Developed a neural-network chatbot using Python, Keras, and NLTK to classify user intents and generate contextually appropriate responses.",
      "Implemented comprehensive NLP preprocessing pipeline including tokenization, stemming, and pattern matching.",
      "Built responsive Tkinter GUI with conversation history and real-time interaction capabilities.",
    ],
    technologies: ["Python", "Keras", "NLTK", "Tkinter"],
    githubLink: "https://github.com/MKempler/AIChatbot", // Assuming this is the correct link from your old site
    imagePlaceholder: "/placeholders/ai-chatbot-placeholder.png", // Example path
  },
  {
    id: "ai-finance-tracker",
    title: "AI Driven Finance Tracker",
    description: [
      "Designed and built a full-stack financial tracking web application with OpenAI API integration, featuring an automated insights dashboard for personalized spending analysis.",
      "Integrated a CAG-based AI pipeline (OpenAI GPT-4o-mini) to generate personalized spending insights and budget recommendations, storing insights in PostgreSQL for historical reference.",
      "Developed RESTful API backend with PostgreSQL database for transaction storage and insight persistence.",
    ],
    technologies: ["OpenAI API", "GPT-4o-mini", "PostgreSQL", "REST API", "Full-Stack"],
    // githubLink: "Your GitHub Link Here", // Add if available
    imagePlaceholder: "/placeholders/finance-tracker-placeholder.png",
  },
  {
    id: "java-compiler",
    title: "Java Compiler",
    description: [
      "Developed a fully functional compiler from scratch in Java, implementing a complete compilation pipeline from source code to executable output.",
      "Built core compiler phases including lexical analyzer with tokenization, recursive descent parser with AST generation, semantic analyzer with type checking, and code generator producing assembly/bytecode.",
      "Designed and executed a comprehensive test suite covering edge cases, error handling, and syntax validation.",
    ],
    technologies: ["Java", "Lexical Analysis", "Parsing", "AST", "Semantic Analysis", "Code Generation"],
    // githubLink: "Your GitHub Link Here", // Add if available
    imagePlaceholder: "/placeholders/java-compiler-placeholder.png",
  },
]; 