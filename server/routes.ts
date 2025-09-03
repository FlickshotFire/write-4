import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for articles
  app.get("/api/articles", async (req, res) => {
    try {
      // In real implementation, you would fetch from database
      // For now, return mock data that matches the UI structure
      const articles = [
        {
          id: "1",
          title: "Building Neural Networks with TensorFlow: A Complete Guide",
          excerpt: "Explore the fundamentals of neural network architecture and learn how to implement powerful AI models using TensorFlow and modern best practices.",
          content: `# Building Neural Networks with TensorFlow: A Complete Guide

In this comprehensive guide, we'll explore the fascinating world of neural networks and learn how to implement them using TensorFlow, one of the most powerful machine learning frameworks available today.

## Introduction to Neural Networks

Neural networks are computational models inspired by the biological neural networks found in animal brains. They consist of interconnected nodes (neurons) that process and transmit information.

## Getting Started with TensorFlow

TensorFlow is an open-source machine learning library developed by Google. It provides a comprehensive ecosystem for building and deploying machine learning models.

### Installation

\`\`\`python
pip install tensorflow
\`\`\`

### Basic Concepts

1. **Tensors**: Multi-dimensional arrays that represent data
2. **Operations**: Mathematical operations performed on tensors
3. **Graphs**: Computational graphs that define the flow of operations

## Building Your First Neural Network

Let's create a simple neural network for image classification:

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Create a sequential model
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
\`\`\`

## Advanced Techniques

### Convolutional Neural Networks (CNNs)

CNNs are particularly effective for image processing tasks:

\`\`\`python
model = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.Flatten(),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])
\`\`\`

### Recurrent Neural Networks (RNNs)

RNNs are ideal for sequential data like text or time series:

\`\`\`python
model = keras.Sequential([
    keras.layers.LSTM(50, return_sequences=True, input_shape=(timesteps, features)),
    keras.layers.LSTM(50),
    keras.layers.Dense(1)
])
\`\`\`

## Best Practices

1. **Data Preprocessing**: Always normalize your data
2. **Regularization**: Use dropout and batch normalization
3. **Monitoring**: Implement early stopping and model checkpoints
4. **Hyperparameter Tuning**: Use techniques like grid search or random search

## Conclusion

Neural networks with TensorFlow offer incredible possibilities for solving complex problems. With proper understanding and practice, you can build powerful AI models that can revolutionize your applications.

Remember to experiment, iterate, and keep learning!`,
          category: "AI Development",
          readTime: "5 min read",
          imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          likes: 127,
          comments: 23,
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          title: "Modern React Patterns: From Hooks to Server Components",
          excerpt: "Discover the evolution of React development patterns and learn how to leverage the latest features for building performant applications.",
          content: `# Modern React Patterns: From Hooks to Server Components

React has evolved significantly since its inception, introducing powerful patterns that have transformed how we build user interfaces. Let's explore the modern React ecosystem and understand how to leverage these patterns effectively.

## The Evolution of React

React has grown from a simple library for building user interfaces to a comprehensive ecosystem that enables developers to build complex, performant applications.

### From Class Components to Hooks

The introduction of hooks in React 16.8 revolutionized component development:

\`\`\`jsx
// Old class component approach
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  componentDidMount() {
    fetchUser(this.props.userId).then(user => {
      this.setState({ user, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return <div>{user.name}</div>;
  }
}

// Modern hooks approach
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(user => {
      setUser(user);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

## Custom Hooks for Reusability

Custom hooks allow you to extract component logic into reusable functions:

\`\`\`jsx
// Custom hook for data fetching
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user.name}</div>;
}
\`\`\`

## Context and State Management

React Context provides a way to share data across components without prop drilling:

\`\`\`jsx
// Create context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const user = await authenticate(credentials);
    setUser(user);
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook for consuming context
function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within UserProvider');
  }
  return context;
}
\`\`\`

## Performance Optimization

### React.memo and useMemo

Prevent unnecessary re-renders with memoization:

\`\`\`jsx
// Memoize expensive calculations
function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  return <div>{expensiveValue}</div>;
}

// Memoize entire component
const MemoizedComponent = React.memo(function Component({ name, age }) {
  return <div>{name} is {age} years old</div>;
});
\`\`\`

### useCallback for Stable References

\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means it never changes

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}
\`\`\`

## Server Components (React 18+)

Server Components allow you to render components on the server:

\`\`\`jsx
// Server Component
async function UserList() {
  const users = await fetchUsers(); // This runs on the server

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Client Component (marked with 'use client')
'use client';
function UserCard({ user }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h3>{user.name}</h3>
      {isExpanded && <p>{user.bio}</p>}
    </div>
  );
}
\`\`\`

## Conclusion

Modern React patterns provide powerful tools for building scalable, performant applications. By understanding and implementing these patterns, you can create better user experiences and more maintainable codebases.

Key takeaways:
- Use hooks for cleaner, more reusable code
- Implement custom hooks for shared logic
- Optimize performance with memoization
- Consider Server Components for improved performance
- Always measure and profile your applications`,
          category: "Web Development",
          readTime: "8 min read",
          imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          likes: 89,
          comments: 15,
          createdAt: new Date().toISOString()
        }
      ];
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch articles" });
    }
  });

  app.get("/api/articles/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // In real implementation, fetch from database by ID
      const articles = [
        {
          id: "1",
          title: "Building Neural Networks with TensorFlow: A Complete Guide",
          excerpt: "Explore the fundamentals of neural network architecture and learn how to implement powerful AI models using TensorFlow and modern best practices.",
          content: `# Building Neural Networks with TensorFlow: A Complete Guide

In this comprehensive guide, we'll explore the fascinating world of neural networks and learn how to implement them using TensorFlow, one of the most powerful machine learning frameworks available today.

## Introduction to Neural Networks

Neural networks are computational models inspired by the biological neural networks found in animal brains. They consist of interconnected nodes (neurons) that process and transmit information.

## Getting Started with TensorFlow

TensorFlow is an open-source machine learning library developed by Google. It provides a comprehensive ecosystem for building and deploying machine learning models.

### Installation

\`\`\`python
pip install tensorflow
\`\`\`

### Basic Concepts

1. **Tensors**: Multi-dimensional arrays that represent data
2. **Operations**: Mathematical operations performed on tensors
3. **Graphs**: Computational graphs that define the flow of operations

## Building Your First Neural Network

Let's create a simple neural network for image classification:

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Create a sequential model
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
\`\`\`

## Advanced Techniques

### Convolutional Neural Networks (CNNs)

CNNs are particularly effective for image processing tasks:

\`\`\`python
model = keras.Sequential([
    keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.MaxPooling2D((2, 2)),
    keras.layers.Conv2D(64, (3, 3), activation='relu'),
    keras.layers.Flatten(),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])
\`\`\`

### Recurrent Neural Networks (RNNs)

RNNs are ideal for sequential data like text or time series:

\`\`\`python
model = keras.Sequential([
    keras.layers.LSTM(50, return_sequences=True, input_shape=(timesteps, features)),
    keras.layers.LSTM(50),
    keras.layers.Dense(1)
])
\`\`\`

## Best Practices

1. **Data Preprocessing**: Always normalize your data
2. **Regularization**: Use dropout and batch normalization
3. **Monitoring**: Implement early stopping and model checkpoints
4. **Hyperparameter Tuning**: Use techniques like grid search or random search

## Conclusion

Neural networks with TensorFlow offer incredible possibilities for solving complex problems. With proper understanding and practice, you can build powerful AI models that can revolutionize your applications.

Remember to experiment, iterate, and keep learning!`,
          category: "AI Development",
          readTime: "5 min read",
          imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          likes: 127,
          comments: 23,
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          title: "Modern React Patterns: From Hooks to Server Components",
          excerpt: "Discover the evolution of React development patterns and learn how to leverage the latest features for building performant applications.",
          content: `# Modern React Patterns: From Hooks to Server Components

React has evolved significantly since its inception, introducing powerful patterns that have transformed how we build user interfaces. Let's explore the modern React ecosystem and understand how to leverage these patterns effectively.

## The Evolution of React

React has grown from a simple library for building user interfaces to a comprehensive ecosystem that enables developers to build complex, performant applications.

### From Class Components to Hooks

The introduction of hooks in React 16.8 revolutionized component development:

\`\`\`jsx
// Old class component approach
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  componentDidMount() {
    fetchUser(this.props.userId).then(user => {
      this.setState({ user, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return <div>{user.name}</div>;
  }
}

// Modern hooks approach
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(user => {
      setUser(user);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

## Custom Hooks for Reusability

Custom hooks allow you to extract component logic into reusable functions:

\`\`\`jsx
// Custom hook for data fetching
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user.name}</div>;
}
\`\`\`

## Context and State Management

React Context provides a way to share data across components without prop drilling:

\`\`\`jsx
// Create context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const user = await authenticate(credentials);
    setUser(user);
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook for consuming context
function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within UserProvider');
  }
  return context;
}
\`\`\`

## Performance Optimization

### React.memo and useMemo

Prevent unnecessary re-renders with memoization:

\`\`\`jsx
// Memoize expensive calculations
function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  return <div>{expensiveValue}</div>;
}

// Memoized entire component
const MemoizedComponent = React.memo(function Component({ name, age }) {
  return <div>{name} is {age} years old</div>;
});
\`\`\`

### useCallback for Stable References

\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means it never changes

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}
\`\`\`

## Server Components (React 18+)

Server Components allow you to render components on the server:

\`\`\`jsx
// Server Component
async function UserList() {
  const users = await fetchUsers(); // This runs on the server

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Client Component (marked with 'use client')
'use client';
function UserCard({ user }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <h3>{user.name}</h3>
      {isExpanded && <p>{user.bio}</p>}
    </div>
  );
}
\`\`\`

## Conclusion

Modern React patterns provide powerful tools for building scalable, performant applications. By understanding and implementing these patterns, you can create better user experiences and more maintainable codebases.

Key takeaways:
- Use hooks for cleaner, more reusable code
- Implement custom hooks for shared logic
- Optimize performance with memoization
- Consider Server Components for improved performance
- Always measure and profile your applications`,
          category: "Web Development",
          readTime: "8 min read",
          imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
          likes: 89,
          comments: 15,
          createdAt: new Date().toISOString()
        }
      ];
      
      const article = articles.find(a => a.id === id);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });

  // API routes for thoughts
  app.get("/api/thoughts", async (req, res) => {
    try {
      const thoughts = [
        {
          id: "1",
          content: "The future of AI isn't just about replacing human tasks—it's about augmenting human creativity. Every breakthrough in machine learning should enhance our ability to solve complex problems, not eliminate the human element.",
          authorName: "Aman Bhardwaj",
          authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
          likes: 42,
          comments: 8,
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          content: "Just finished implementing a Three.js particle system that responds to user interaction. The intersection of WebGL and creative coding never fails to amaze me. #WebGL #ThreeJS #CreativeCoding",
          authorName: "Aman Bhardwaj",
          authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
          likes: 67,
          comments: 12,
          createdAt: new Date().toISOString()
        }
      ];
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch thoughts" });
    }
  });

  app.get("/api/thoughts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const thoughts = [
        {
          id: "1",
          content: "The future of AI isn't just about replacing human tasks—it's about augmenting human creativity. Every breakthrough in machine learning should enhance our ability to solve complex problems, not eliminate the human element.",
          authorName: "Aman Bhardwaj",
          authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
          likes: 42,
          comments: 8,
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          content: "Just finished implementing a Three.js particle system that responds to user interaction. The intersection of WebGL and creative coding never fails to amaze me. #WebGL #ThreeJS #CreativeCoding",
          authorName: "Aman Bhardwaj",
          authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
          likes: 67,
          comments: 12,
          createdAt: new Date().toISOString()
        }
      ];
      
      const thought = thoughts.find(t => t.id === id);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      
      res.json(thought);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch thought" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
