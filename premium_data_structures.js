// --- Data Source ---
const rawData = {
    name: "DATA STRUCTURES",
    type: "root",
    children: [
        {
            name: "Primitive",
            type: "category",
            children: [
                { name: "Integer", type: "item" },
                { name: "Float / Double", type: "item" },
                { name: "Character", type: "item" },
                { name: "String", type: "item" },
                { name: "Boolean", type: "item" },
                { name: "Pointer / Reference", type: "item" },
                { name: "Void", type: "item" }
            ]
        },
        {
            name: "Non-Primitive",
            type: "category",
            children: [
                {
                    name: "Linear",
                    type: "subcategory",
                    children: [
                        {
                            name: "Array",
                            type: "group",
                            children: [
                                { name: "Static Array", type: "item" },
                                { name: "Dynamic Array", type: "item" },
                                { name: "Multi-dimensional Array", type: "item" },
                                { name: "Sparse Array", type: "item" },
                                { name: "Circular Array", type: "item" },
                                { name: "Prefix Sum Array", type: "item" },
                                { name: "Difference Array", type: "item" },
                                { name: "Hashed Array Tree", type: "item" },
                                { name: "Judy Array", type: "item" },
                                { name: "VList", type: "item" },
                                { name: "Tiered Vector", type: "item" }
                            ]
                        },
                        {
                            name: "Linked List",
                            type: "group",
                            children: [
                                { name: "Singly Linked List", type: "item" },
                                { name: "Doubly Linked List", type: "item" },
                                { name: "Circular Linked List", type: "item" },
                                { name: "Circular Doubly Linked List", type: "item" },
                                { name: "Skip List", type: "item" },
                                { name: "Unrolled Linked List", type: "item" },
                                { name: "XOR Linked List", type: "item" }
                            ]
                        },
                        {
                            name: "Stack",
                            type: "group",
                            children: [
                                { name: "Array-based Stack", type: "item" },
                                { name: "Linked List Stack", type: "item" },
                                { name: "Min Stack", type: "item" },
                                { name: "Max Stack", type: "item" },
                                { name: "Persistent Stack", type: "item" }
                            ]
                        },
                        {
                            name: "Queue",
                            type: "group",
                            children: [
                                { name: "Simple Queue", type: "item" },
                                { name: "Circular Queue", type: "item" },
                                { name: "Priority Queue", type: "item" },
                                { name: "Deque", type: "item" },
                                { name: "Monotonic Queue", type: "item" },
                                { name: "Blocking Queue", type: "item" },
                                { name: "Persistent Queue", type: "item" }
                            ]
                        }
                    ]
                },
                {
                    name: "Non-Linear",
                    type: "subcategory",
                    children: [
                        {
                            name: "Tree",
                            type: "group",
                            children: [
                                {
                                    name: "General Tree",
                                    type: "item",
                                    children: [
                                        { name: "N-ary Tree", type: "sub-item" },
                                        { name: "Rose Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Binary Tree",
                                    type: "item",
                                    children: [
                                        { name: "Full Binary Tree", type: "sub-item" },
                                        { name: "Complete Binary Tree", type: "sub-item" },
                                        { name: "Perfect Binary Tree", type: "sub-item" },
                                        { name: "Balanced Binary Tree", type: "sub-item" },
                                        { name: "Degenerate Binary Tree", type: "sub-item" },
                                        { name: "Skewed Binary Tree", type: "sub-item" },
                                        { name: "Threaded Binary Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Binary Search Tree",
                                    type: "item",
                                    children: [
                                        { name: "AVL Tree", type: "sub-item" },
                                        { name: "Red-Black Tree", type: "sub-item" },
                                        { name: "AA Tree", type: "sub-item" },
                                        { name: "WAVL Tree", type: "sub-item" },
                                        { name: "2-3 Tree", type: "sub-item" },
                                        { name: "2-3-4 Tree", type: "sub-item" },
                                        { name: "Splay Tree", type: "sub-item" },
                                        { name: "Treap", type: "sub-item" },
                                        { name: "Zip Tree", type: "sub-item" },
                                        { name: "Randomized BST", type: "sub-item" },
                                        { name: "Cartesian Tree", type: "sub-item" },
                                        { name: "Scapegoat Tree", type: "sub-item" },
                                        { name: "Weight-Balanced Tree", type: "sub-item" },
                                        { name: "Tango Tree", type: "sub-item" },
                                        { name: "T-Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Heap",
                                    type: "item",
                                    children: [
                                        { name: "Min Heap", type: "sub-item" },
                                        { name: "Max Heap", type: "sub-item" },
                                        { name: "Binary Heap", type: "sub-item" },
                                        { name: "Fibonacci Heap", type: "sub-item" },
                                        { name: "Binomial Heap", type: "sub-item" },
                                        { name: "Pairing Heap", type: "sub-item" },
                                        { name: "Leftist Heap", type: "sub-item" },
                                        { name: "Skew Heap", type: "sub-item" },
                                        { name: "d-ary Heap", type: "sub-item" },
                                        { name: "Radix Heap", type: "sub-item" },
                                        { name: "Brodal Queue", type: "sub-item" },
                                        { name: "Soft Heap", type: "sub-item" },
                                        { name: "Weak Heap", type: "sub-item" },
                                        { name: "Beap", type: "sub-item" },
                                        { name: "Randomized Meldable Heap", type: "sub-item" },
                                        { name: "Interval Heap", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Trie",
                                    type: "item",
                                    children: [
                                        { name: "Standard Trie", type: "sub-item" },
                                        { name: "Compressed Trie", type: "sub-item" },
                                        { name: "Suffix Tree", type: "sub-item" },
                                        { name: "Suffix Array", type: "sub-item" },
                                        { name: "Ternary Search Tree", type: "sub-item" },
                                        { name: "HAT-trie", type: "sub-item" },
                                        { name: "HAMT", type: "sub-item" },
                                        { name: "Ctrie", type: "sub-item" },
                                        { name: "X-Fast Trie", type: "sub-item" },
                                        { name: "Y-Fast Trie", type: "sub-item" },
                                        { name: "Palindrome Tree", type: "sub-item" },
                                        { name: "AC Automaton", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Segment Tree",
                                    type: "item",
                                    children: [
                                        { name: "Range Sum Segment Tree", type: "sub-item" },
                                        { name: "Range Min/Max Segment Tree", type: "sub-item" },
                                        { name: "Lazy Propagation Segment Tree", type: "sub-item" },
                                        { name: "Persistent Segment Tree", type: "sub-item" },
                                        { name: "2D Segment Tree", type: "sub-item" },
                                        { name: "Dynamic Segment Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Fenwick Tree",
                                    type: "item",
                                    children: [
                                        { name: "1D Fenwick Tree", type: "sub-item" },
                                        { name: "2D Fenwick Tree", type: "sub-item" },
                                        { name: "Range Update Fenwick Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Other Range Query",
                                    type: "item",
                                    children: [
                                        { name: "Sparse Table", type: "sub-item" },
                                        { name: "Sqrt Decomposition", type: "sub-item" },
                                        { name: "Mo's Algorithm Structure", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "B-Tree Family",
                                    type: "item",
                                    children: [
                                        { name: "B-Tree", type: "sub-item" },
                                        { name: "B+ Tree", type: "sub-item" },
                                        { name: "B* Tree", type: "sub-item" },
                                        { name: "Counted B-Tree", type: "sub-item" },
                                        { name: "UB-Tree", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Spatial & Metric",
                                    type: "item",
                                    children: [
                                        { name: "Quadtree", type: "sub-item" },
                                        { name: "Octree", type: "sub-item" },
                                        { name: "K-D Tree", type: "sub-item" },
                                        { name: "R-Tree", type: "sub-item" },
                                        { name: "R* Tree", type: "sub-item" },
                                        { name: "R+ Tree", type: "sub-item" },
                                        { name: "Hilbert R-Tree", type: "sub-item" },
                                        { name: "Priority R-Tree", type: "sub-item" },
                                        { name: "X-Tree", type: "sub-item" },
                                        { name: "M-Tree", type: "sub-item" },
                                        { name: "VP-Tree", type: "sub-item" },
                                        { name: "Ball Tree", type: "sub-item" },
                                        { name: "Cover Tree", type: "sub-item" },
                                        { name: "BVH", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Dynamic Trees",
                                    type: "item",
                                    children: [
                                        { name: "Link/Cut Tree", type: "sub-item" },
                                        { name: "Euler Tour Tree", type: "sub-item" },
                                        { name: "Top Tree", type: "sub-item" },
                                        { name: "Dynamic Connectivity", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Advanced Trees",
                                    type: "item",
                                    children: [
                                        { name: "Van Emde Boas Tree", type: "sub-item" },
                                        { name: "Merkle Tree", type: "sub-item" },
                                        { name: "Interval Tree", type: "sub-item" },
                                        { name: "Range Tree", type: "sub-item" },
                                        { name: "Finger Tree", type: "sub-item" },
                                        { name: "Fusion Tree", type: "sub-item" },
                                        { name: "Wavelet Tree", type: "sub-item" },
                                        { name: "Exponential Tree", type: "sub-item" },
                                        { name: "Dancing Links", type: "sub-item" },
                                        { name: "Zipper", type: "sub-item" },
                                        { name: "Order Statistic Tree", type: "sub-item" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Graph",
                            type: "group",
                            children: [
                                {
                                    name: "By Direction",
                                    type: "item",
                                    children: [
                                        { name: "Directed Graph", type: "sub-item" },
                                        { name: "Undirected Graph", type: "sub-item" },
                                        { name: "Bidirectional Graph", type: "sub-item" },
                                        { name: "Mixed Graph", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "By Weight",
                                    type: "item",
                                    children: [
                                        { name: "Weighted Graph", type: "sub-item" },
                                        { name: "Unweighted Graph", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "By Connectivity",
                                    type: "item",
                                    children: [
                                        { name: "Connected Graph", type: "sub-item" },
                                        { name: "Disconnected Graph", type: "sub-item" },
                                        { name: "Strongly Connected", type: "sub-item" },
                                        { name: "Weakly Connected", type: "sub-item" },
                                        { name: "k-Connected Graph", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Special Graphs",
                                    type: "item",
                                    children: [
                                        { name: "Complete Graph", type: "sub-item" },
                                        { name: "Bipartite Graph", type: "sub-item" },
                                        { name: "Multigraph", type: "sub-item" },
                                        { name: "Hypergraph", type: "sub-item" },
                                        { name: "Planar Graph", type: "sub-item" },
                                        { name: "Tree (as Graph)", type: "sub-item" },
                                        { name: "Forest", type: "sub-item" },
                                        { name: "Sparse Graph", type: "sub-item" },
                                        { name: "Dense Graph", type: "sub-item" }
                                    ]
                                },
                                {
                                    name: "Graph Representation",
                                    type: "item",
                                    children: [
                                        { name: "Adjacency Matrix", type: "sub-item" },
                                        { name: "Adjacency List", type: "sub-item" },
                                        { name: "Edge List", type: "sub-item" },
                                        { name: "Incidence Matrix", type: "sub-item" },
                                        { name: "CSR", type: "sub-item" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Set Structures",
                            type: "group",
                            children: [
                                { name: "Hash Set", type: "item" },
                                { name: "Ordered Set", type: "item" },
                                { name: "Multiset", type: "item" },
                                { name: "Bit Set", type: "item" },
                                { name: "Disjoint Set", type: "item" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Hash-Based",
            type: "category",
            children: [
                {
                    name: "Hash Table",
                    type: "item",
                    children: [
                        { name: "Separate Chaining", type: "sub-item" },
                        {
                            name: "Open Addressing",
                            type: "sub-item",
                            children: [
                                { name: "Linear Probing", type: "leaf" },
                                { name: "Quadratic Probing", type: "leaf" },
                                { name: "Double Hashing", type: "leaf" },
                                { name: "Robin Hood Hashing", type: "leaf" }
                            ]
                        }
                    ]
                },
                { name: "Hash Map", type: "item" },
                { name: "Multi-map", type: "item" },
                { name: "Consistent Hashing", type: "item" },
                { name: "Cuckoo Hashing", type: "item" },
                { name: "Hopscotch Hashing", type: "item" },
                { name: "Perfect Hashing", type: "item" },
                { name: "Extendible Hashing", type: "item" }
            ]
        },
        {
            name: "Advanced",
            type: "category",
            children: [
                {
                    name: "Probabilistic",
                    type: "subcategory",
                    children: [
                        { name: "Bloom Filter", type: "item" },
                        { name: "Cuckoo Filter", type: "item" },
                        { name: "Count-Min Sketch", type: "item" },
                        { name: "Count Sketch", type: "item" },
                        { name: "HyperLogLog", type: "item" },
                        { name: "MinHash", type: "item" },
                        { name: "SimHash", type: "item" },
                        { name: "LSH", type: "item" }
                    ]
                },
                {
                    name: "Cache",
                    type: "subcategory",
                    children: [
                        { name: "LRU Cache", type: "item" },
                        { name: "LFU Cache", type: "item" },
                        { name: "MRU Cache", type: "item" },
                        { name: "ARC", type: "item" },
                        { name: "2Q Cache", type: "item" }
                    ]
                },
                {
                    name: "String",
                    type: "subcategory",
                    children: [
                        { name: "Rope", type: "item" },
                        { name: "Gap Buffer", type: "item" },
                        { name: "Piece Table", type: "item" },
                        { name: "Cord", type: "item" }
                    ]
                }
            ]
        }
    ]
};

// --- Metadata Lookup ---
const metadataLookup = {
    // Primitive
    "Integer": {
        description: "A primitive numeric data type representing whole numbers without any fractional component. It may be signed (negative, positive, zero) or unsigned depending on the language.",
        example: "int age = 25;",
        applications: ["Loop counters", "Array indexing", "Discrete mathematics", "Memory addressing", "Bit manipulation"]
    },
    "Float / Double": {
        description: "Floating-point numeric types used to represent real numbers with fractional parts, typically following the IEEE 754 standard. 'double' provides higher precision than 'float'.",
        example: "double price = 19.99;",
        applications: ["Scientific simulations", "Financial calculations", "Graphics rendering", "Physics engines", "GPS coordinates"]
    },
    "Character": {
        description: "A primitive data type that stores a single character encoded using standards such as ASCII or Unicode.",
        example: "char grade = 'A';",
        applications: ["Text processing", "Parsing input", "String construction", "Encoding systems"]
    },
    "String": {
        description: "A sequence of characters representing textual data. Typically implemented as an array of characters or an immutable object.",
        example: "string name = \"Structure.io\";",
        applications: ["User interfaces", "Data serialization (JSON/XML)", "Search systems", "Cryptography", "File handling"]
    },
    "Boolean": {
        description: "A logical data type that represents one of two possible values: true or false.",
        example: "bool isLoaded = true;",
        applications: ["Conditional branching", "State tracking", "Search filters", "Digital logic systems"]
    },

    // Arrays
    "Array": {
        description: "A linear data structure storing elements of the same type in contiguous memory locations, allowing O(1) indexed access.",
        example: "int[] scores = {90, 85, 95};",
        applications: ["Matrix representation", "Image grids", "Buffers", "Implementing stacks and queues"]
    },
    "Static Array": {
        description: "A fixed-size array allocated at compile time with a predetermined capacity.",
        example: "int arr[5] = {1, 2, 3, 4, 5};",
        applications: ["Lookup tables", "Embedded systems", "Performance-critical systems"]
    },
    "Dynamic Array": {
        description: "A resizable array that automatically reallocates memory when capacity is exceeded.",
        example: "std::vector<int> v; v.push_back(10);",
        applications: ["Dynamic collections", "Unknown dataset sizes", "Language-level list implementations"]
    },
    "Multi-dimensional Array": {
        description: "An array composed of multiple nested arrays, typically used to represent grids or matrices.",
        example: "int matrix[3][3] = {{1,0,0}, {0,1,0}, {0,0,1}};",
        applications: ["Game boards", "Matrix operations", "Image processing", "Scientific computing"]
    },
    "Sparse Array": {
        description: "An array representation optimized for cases where most elements are zero or default values, storing only non-default entries.",
        example: "Map: {index: 5, value: 100}, {index: 1000, value: 50}",
        applications: ["Large sparse matrices", "Graph adjacency lists", "Recommendation systems"]
    },
    "Circular Array": {
        description: "An array treated as circular, where the end wraps around to the beginning using modular indexing.",
        example: "queue[tail % size] = val;",
        applications: ["Ring buffers", "CPU scheduling", "Streaming systems"]
    },
    "Prefix Sum Array": {
        description: "An auxiliary array where each index stores the cumulative sum from the start to that position, enabling O(1) range queries after preprocessing.",
        example: "orig=[1,2,3] -> prefix=[1,3,6]",
        applications: ["Range queries", "Subarray problems", "Image summed-area tables"]
    },
    "Difference Array": {
        description: "A technique used to perform efficient range updates by storing incremental changes instead of updating each element individually.",
        example: "diff[L] += X; diff[R+1] -= X;",
        applications: ["Batch updates", "Simulation models", "Competitive programming optimizations"]
    },

    // Linked Lists
    "Linked List": {
        description: "A linear dynamic data structure consisting of nodes where each node stores data and a reference to the next node.",
        example: "Head -> Node1(A) -> Node2(B) -> NULL",
        applications: ["Dynamic memory allocation", "Undo/redo systems", "Playlists", "Hash table chaining"]
    },
    "Singly Linked List": {
        description: "A linked list where each node points only to its next node.",
        example: "Node{data, next}",
        applications: ["Stacks", "Simple dynamic sequences", "Adjacency lists"]
    },
    "Doubly Linked List": {
        description: "A linked list where each node maintains references to both its previous and next nodes.",
        example: "Node{prev, data, next}",
        applications: ["LRU caches", "Browser navigation", "Deque implementation"]
    },
    "Skip List": {
        description: "A probabilistic multi-level linked structure that allows average O(log n) search, insertion, and deletion.",
        example: "Layer2: 1--5; Layer1: 1-3-5",
        applications: ["In-memory databases", "Sorted sets", "Concurrent systems"]
    },
    "XOR Linked List": {
        description: "A memory-efficient doubly linked list storing the XOR of previous and next node addresses in a single field.",
        example: "ptr = addr(prev) ^ addr(next)",
        applications: ["Embedded systems", "Memory-optimized implementations"]
    },

    // Stacks & Queues
    "Stack": {
        description: "A linear structure following the LIFO (Last-In-First-Out) principle.",
        example: "push(A); push(B); pop(); // returns B",
        applications: ["Function calls", "Expression parsing", "Backtracking", "DFS"]
    },
    "Min Stack": {
        description: "A stack that supports retrieving the minimum element in O(1) time.",
        example: "push(5), push(2) -> min=2",
        applications: ["Streaming minimum tracking", "Constraint problems"]
    },
    "Queue": {
        description: "A linear structure following the FIFO (First-In-First-Out) principle.",
        example: "enqueue(A); enqueue(B); dequeue(); // returns A",
        applications: ["Scheduling", "BFS", "Buffering systems"]
    },
    "Deque": {
        description: "A double-ended queue allowing insertion and deletion from both ends.",
        example: "push_front(A); push_back(B);",
        applications: ["Sliding window algorithms", "Palindrome checking", "Work-stealing schedulers"]
    },
    "Monotonic Queue": {
        description: "A specialized queue maintaining elements in sorted order to efficiently retrieve min or max in sliding windows.",
        example: "Queue: [5, 3] -> push(4) -> [5, 4]",
        applications: ["Sliding window maximum", "DP optimizations"]
    },

    // Trees
    "Tree": {
        description: "A hierarchical acyclic structure consisting of nodes connected by edges with a single root.",
        example: "Root -> Child1, Child2",
        applications: ["File systems", "DOM trees", "Decision systems"]
    },
    "Binary Search Tree": {
        description: "A binary tree where left subtree values are smaller and right subtree values are larger than the root.",
        example: "Node(10) -> Left(5), Right(15)",
        applications: ["Ordered maps", "Symbol tables", "Search operations"]
    },
    "AVL Tree": {
        description: "A self-balancing BST maintaining a height difference of at most one between subtrees.",
        example: "Rebalanced via rotations",
        applications: ["Search-intensive systems", "Memory-resident indexes"]
    },
    "Red-Black Tree": {
        description: "A self-balancing BST enforcing structural constraints through node coloring to maintain near logarithmic height.",
        example: "Each node is Red or Black",
        applications: ["Ordered maps/sets", "Kernel scheduling"]
    },
    "Heap": {
        description: "A complete binary tree satisfying the heap property (min-heap or max-heap).",
        example: "Root holds minimum in Min-Heap",
        applications: ["Priority queues", "Graph algorithms", "Scheduling"]
    },
    "Trie": {
        description: "A prefix tree used for efficient retrieval of strings based on shared prefixes.",
        example: "Root -> 'a' -> 'p' -> 'p' -> 'l' -> 'e'",
        applications: ["Autocomplete", "Spell checking", "Routing tables"]
    },
    "Segment Tree": {
        description: "A binary tree structure used for efficient range queries and updates.",
        example: "Root stores sum of entire range",
        applications: ["Range queries", "Interval problems"]
    },
    "Fenwick Tree": {
        description: "Also called Binary Indexed Tree, supports prefix sum queries and updates in O(log n).",
        example: "idx += idx & -idx",
        applications: ["Frequency counting", "Inversion counting"]
    },
    "B-Tree": {
        description: "A balanced multi-way search tree optimized for disk and large block storage.",
        example: "Node with multiple keys and children",
        applications: ["Databases", "File systems"]
    },
    "Quadtree": {
        description: "A tree structure dividing 2D space into four quadrants recursively.",
        example: "Each node splits into 4 regions",
        applications: ["Spatial indexing", "Image compression", "2D collision detection"]
    },

    // Graphs
    "Graph": {
        description: "A non-linear structure consisting of vertices connected by edges, which may be directed or undirected.",
        example: "Users connected by friendships",
        applications: ["Social networks", "Routing algorithms", "Dependency resolution"]
    },
    "Disjoint Set": {
        description: "Also called Union-Find, efficiently tracks connected components using path compression and union by rank.",
        example: "find(A) == find(B)",
        applications: ["MST algorithms", "Connectivity problems", "Cycle detection"]
    },

    // Advanced & Probabilistic
    "Rose Tree": {
        description: "A general tree where each node may have an arbitrary number of children.",
        example: "Node(val, [Child1, Child2, ...])",
        applications: ["Directory systems", "DOM representation"]
    },
    "Splay Tree": {
        description: "A self-adjusting BST that moves recently accessed elements to the root.",
        example: "splay(node);",
        applications: ["Caching systems", "Access locality optimization"]
    },
    "Treap": {
        description: "A randomized balanced BST maintaining heap order on priorities and BST order on keys.",
        example: "Node{key, priority}",
        applications: ["Order statistics", "Randomized balanced trees"]
    },
    "B+ Tree": {
        description: "A B-Tree variant storing all records in linked leaf nodes for efficient range traversal.",
        example: "Leaves linked sequentially",
        applications: ["Database indexing", "Filesystem indexing"]
    },
    "Merkle Tree": {
        description: "A hash-based tree where parent nodes store hashes of their children, ensuring data integrity.",
        example: "RootHash = hash(left + right)",
        applications: ["Blockchain", "Data verification", "Distributed systems"]
    },
    "Bloom Filter": {
        description: "A probabilistic structure for fast membership testing with possible false positives but no false negatives.",
        example: "Bit array with k hash functions",
        applications: ["Caching filters", "Spam detection", "Distributed databases"]
    },
    "HyperLogLog": {
        description: "A probabilistic algorithm estimating cardinality of large datasets using minimal memory.",
        example: "Estimate billions with kilobytes",
        applications: ["Analytics systems", "Network monitoring"]
    },
    "LRU Cache": {
        description: "A cache replacement policy removing the least recently accessed item when capacity is exceeded.",
        example: "HashMap + Doubly Linked List",
        applications: ["Web caching", "OS memory management", "Database buffers"]
    },
    "Rope": {
        description: "A binary tree structure storing large strings in fragments for efficient concatenation and modification.",
        example: "Leaves store string chunks",
        applications: ["Text editors", "Large-scale string processing"]
    },
    "Hash Table": {
        description: "A key-value data structure using hashing to achieve average O(1) lookup, insertion, and deletion.",
        example: "index = hash(key)",
        applications: ["Caching", "Symbol tables", "Database indexing"]
    },

    // Primitives (missing)
    "Pointer / Reference": {
        description: "A variable that stores the memory address of another variable. Pointers enable direct memory manipulation; references are safer aliases to existing variables.",
        example: "int x = 10; int* p = &x; // p holds address of x",
        applications: ["Dynamic memory allocation", "Linked structures", "Pass-by-reference", "Hardware register access"]
    },
    "Void": {
        description: "A special type indicating the absence of a value. Used as return type for functions that produce no result, or as a generic pointer type.",
        example: "void printHello() { printf(\"Hello\"); }",
        applications: ["Function return types", "Generic pointers (void*)", "Callback signatures"]
    },

    // Array variants (missing)
    "Hashed Array Tree": {
        description: "A dynamic array variant that stores data in a two-level structure—a top-level array of pointers to fixed-size leaf arrays—reducing memory waste during resizing.",
        example: "Top array [ptr0, ptr1, ...] each pointing to leaf[SIZE]",
        applications: ["Dynamic arrays with lower reallocatoin cost", "Memory-efficient growable sequences"]
    },
    "Judy Array": {
        description: "A highly optimized associative array (sparse map) implemented with adaptive trie-like structures that minimize memory and cache misses for integer keys.",
        example: "JudyL: maps integer keys to word-size values",
        applications: ["High-performance dictionaries", "Counting unique IPs", "Network packet processing"]
    },
    "VList": {
        description: "A persistent, immutable list structure using an array of arrays of decreasing size. Prepend is O(1) amortized and indexing is O(log n).",
        example: "VList: [[1,2,3,4],[5,6],[7],[8]]",
        applications: ["Functional programming", "Persistent data", "Immutable list sharing"]
    },
    "Tiered Vector": {
        description: "A dynamic sequence structure splitting elements into fixed-size tiers or blocks, balancing insertion and random access costs.",
        example: "Tiers: [A,B,C] [D,E,F] [G,H]",
        applications: ["Efficient middle insertions", "Rope-like text buffers", "Sequence editors"]
    },

    // Linked List variants (missing)
    "Circular Linked List": {
        description: "A singly linked list where the last node's next pointer circles back to the head, forming a closed loop.",
        example: "A -> B -> C -> (back to A)",
        applications: ["Round-robin scheduling", "Circular buffers", "Game turn loops"]
    },
    "Circular Doubly Linked List": {
        description: "A doubly linked list where the tail points forward to the head and the head points backward to the tail, enabling traversal in both directions indefinitely.",
        example: "Head <-> B <-> C <-> (back to Head)",
        applications: ["Music playlists", "Undo/redo with wrap-around", "Operating system task management"]
    },
    "Unrolled Linked List": {
        description: "A linked list where each node stores multiple elements in a small fixed-size array, improving cache performance over traditional linked lists.",
        example: "Node[1,2,3] -> Node[4,5,6] -> NULL",
        applications: ["Cache-friendly dynamic sequences", "Text editors", "Memory-efficient lists"]
    },

    // Stack variants (missing)
    "Array-based Stack": {
        description: "A stack implemented using a contiguous array with a top-of-stack index, giving O(1) push/pop with cache-friendly memory layout.",
        example: "arr = []; top = -1; arr[++top] = x;",
        applications: ["Expression evaluation", "Browser history", "Function call stack simulation"]
    },
    "Linked List Stack": {
        description: "A stack implemented using a singly linked list where push/pop operate on the head node, allowing truly dynamic size without reallocation.",
        example: "push: newNode.next = head; head = newNode;",
        applications: ["Recursive algorithm simulation", "Memory-dynamic stacks", "Undo systems"]
    },
    "Max Stack": {
        description: "A stack that supports retrieving the current maximum element in O(1) time using an auxiliary structure alongside the main stack.",
        example: "push(3), push(7) -> max() = 7",
        applications: ["Streaming maximum tracking", "Stock span problems", "Sliding window variants"]
    },
    "Persistent Stack": {
        description: "A stack that preserves all previous versions after each push or pop operation, enabling time-travel through past states.",
        example: "v1 = push(A); v2 = push(B, v1); v1 still accessible",
        applications: ["Functional programming", "Version control internals", "Undo trees"]
    },

    // Queue variants (missing)
    "Simple Queue": {
        description: "A basic FIFO structure where elements are enqueued at the rear and dequeued from the front.",
        example: "enqueue(A); enqueue(B); dequeue() -> A",
        applications: ["Task scheduling", "Print spooling", "BFS traversal"]
    },
    "Circular Queue": {
        description: "A fixed-size queue that wraps the rear pointer back to the front when the end is reached, reusing freed slots efficiently.",
        example: "rear = (rear + 1) % capacity",
        applications: ["Operating system buffers", "Streaming pipelines", "Real-time data processing"]
    },
    "Priority Queue": {
        description: "A queue variant where each element has a priority and elements are dequeued in order of highest priority, typically implemented with a heap.",
        example: "enqueue(task, priority=5); dequeue() -> highest priority task",
        applications: ["Dijkstra's algorithm", "CPU scheduling", "Event-driven simulations"]
    },
    "Blocking Queue": {
        description: "A thread-safe queue that blocks producer threads when full and consumer threads when empty, facilitating producer-consumer patterns.",
        example: "producer.put(item); consumer.take() // waits if empty",
        applications: ["Multi-threaded systems", "Message passing", "Work queues in thread pools"]
    },
    "Persistent Queue": {
        description: "A queue implementation that retains all historical versions after each enqueue/dequeue, enabling access to past states.",
        example: "v1 = enqueue(A); v2 = enqueue(B, v1); v1 still accessible",
        applications: ["Functional programming", "Persistent data structures", "Replay systems"]
    },

    // Tree categories (missing)
    "General Tree": {
        description: "A tree in which each node can have any number of children, with no restriction on structure or ordering.",
        example: "Root -> [Child1, Child2, Child3]",
        applications: ["File system hierarchy", "XML/HTML DOM parsing", "Organizational charts"]
    },
    "N-ary Tree": {
        description: "A rooted tree where each node has at most N children. Generalizes binary trees to allow broader branching.",
        example: "3-ary tree: each node has up to 3 children",
        applications: ["Tries (26-ary)", "Game move trees", "Expression trees for multi-operand ops"]
    },
    "Binary Tree": {
        description: "A tree where each node has at most two children, commonly referred to as left and right.",
        example: "Root -> Left(5), Right(10)",
        applications: ["Expression parsing", "Huffman coding", "Heaps", "Binary search trees"]
    },
    "Full Binary Tree": {
        description: "A binary tree where every node has either 0 or exactly 2 children — never just one.",
        example: "Root(1-left, 1-right) -> both leaves have no children",
        applications: ["Huffman encoding trees", "Decision trees", "Expression trees"]
    },
    "Complete Binary Tree": {
        description: "A binary tree where all levels are fully filled except possibly the last, which is filled left to right.",
        example: "Level 0: [1], Level 1: [2,3], Level 2: [4,5]",
        applications: ["Heap storage in arrays", "Priority queue implementation"]
    },
    "Perfect Binary Tree": {
        description: "A binary tree where all internal nodes have exactly two children and all leaves are at the same depth.",
        example: "7-node tree with 3 levels fully filled",
        applications: ["Network topology models", "Full tournament brackets", "Heap analysis"]
    },
    "Balanced Binary Tree": {
        description: "A binary tree where the heights of left and right subtrees for every node differ by at most a defined constant (usually 1).",
        example: "AVL and Red-Black trees are examples",
        applications: ["Efficient searching", "Self-balancing sets and maps"]
    },
    "Degenerate Binary Tree": {
        description: "A binary tree where every internal node has only one child, effectively behaving like a linked list.",
        example: "Root -> Right -> Right -> Right (skewed)",
        applications: ["Worst-case BST analysis", "Understanding tree balancing need"]
    },
    "Skewed Binary Tree": {
        description: "A degenerate tree where all nodes are skewed to one side (left-skewed or right-skewed), resulting in O(n) operations.",
        example: "Left skewed: each node only has a left child",
        applications: ["Illustrating BST degeneration", "Linked-list equivalence proofs"]
    },
    "Threaded Binary Tree": {
        description: "A binary tree where null pointers are replaced with references to in-order predecessor or successor nodes, enabling in-order traversal without a stack.",
        example: "Null right pointer -> in-order successor node",
        applications: ["In-order traversal without recursion", "Embedded systems with limited stack"]
    },
    "AA Tree": {
        description: "A simplified variant of the Red-Black Tree that only allows right-leaning red nodes, reducing the number of balancing cases to simplify implementation.",
        example: "Level annotations enforce balance; only right links can be red",
        applications: ["Ordered maps where simpler code is preferred", "Educational BST implementations"]
    },
    "WAVL Tree": {
        description: "A Weak AVL tree that relaxes AVL's balance condition, allowing rank differences of 1 or 2, resulting in fewer rotations during deletion than AVL trees.",
        example: "Ranks assigned to nodes; adjacent ranks differ by 1 or 2",
        applications: ["High-performance sorted containers", "Databases requiring frequent deletions"]
    },
    "2-3 Tree": {
        description: "A balanced search tree where each internal node has either 2 or 3 children and all leaves are at the same level.",
        example: "Node[10,20] -> children: <10, 10-20, >20",
        applications: ["Database indexing", "Ordered set foundations", "Predecessor of B-Trees"]
    },
    "2-3-4 Tree": {
        description: "A perfectly balanced tree where internal nodes can have 2, 3, or 4 children. Directly corresponds to the Red-Black tree structure.",
        example: "4-node: [10,20,30] with 4 children",
        applications: ["Database engines", "Theoretical foundation for RB trees", "Persistent data"]
    },
    "Zip Tree": {
        description: "A randomized BST using geometric random ranks, similar to a treap, but uses a different structural property (zip/unzip) for insertions and deletions.",
        example: "Nodes ranked geometrically; zip on insert, unzip on delete",
        applications: ["Concurrent data structures", "Randomized balanced trees"]
    },
    "Randomized BST": {
        description: "A binary search tree where each insert or delete is performed with random priority, giving O(log n) expected height without complex rotations.",
        example: "Insert randomly into subtrees with probability n/(n+1)",
        applications: ["Simple probabilistic balanced trees", "Teaching randomized algorithms"]
    },
    "Cartesian Tree": {
        description: "A binary tree derived from a sequence where the structure obeys BST order on indices and heap order on values simultaneously.",
        example: "Array [3,2,6,1,9] builds a tree where min is root",
        applications: ["Lowest common ancestor", "Range minimum queries", "Sorting algorithms"]
    },
    "Scapegoat Tree": {
        description: "A binary search tree that lazily rebalances by rebuilding a 'scapegoat' subtree when the tree becomes too unbalanced after insertions.",
        example: "Rebuild subtree rooted at scapegoat node when weight imbalanced",
        applications: ["Memory-efficient balanced BSTs", "Batch insertions"]
    },
    "Weight-Balanced Tree": {
        description: "A balanced BST where balance is maintained by keeping the ratio of subtree sizes within a fixed constant, rather than by height.",
        example: "Left size / right size <= delta",
        applications: ["Persistent data structures", "Functional language libraries (Haskell Set)"]
    },
    "Tango Tree": {
        description: "An online BST that achieves O(log log n) competitive ratio against the optimal offline BST, using preferred paths to adapt to access patterns.",
        example: "Preferred path = most recently accessed path in tree",
        applications: ["Dynamic optimality research", "Competitive BST analysis"]
    },
    "T-Tree": {
        description: "A balanced BST variant designed for in-memory databases where each node stores a sorted array of keys, combining features of AVL and B-Trees.",
        example: "Node stores [10,15,20]; child if < 10 or > 20",
        applications: ["In-memory relational databases", "Main-memory OLTP systems"]
    },

    // Heap variants (missing)
    "Min Heap": {
        description: "A complete binary tree where every parent node's value is less than or equal to its children, ensuring the minimum is always at the root.",
        example: "Root=1, children=3,5; always parent <= children",
        applications: ["Dijkstra's shortest path", "Prim's MST", "Priority queues"]
    },
    "Max Heap": {
        description: "A complete binary tree where every parent node's value is greater than or equal to its children, ensuring the maximum is always at the root.",
        example: "Root=10, children=7,8; always parent >= children",
        applications: ["HeapSort", "Job scheduling", "Bandwidth management"]
    },
    "Binary Heap": {
        description: "A heap implemented as a complete binary tree stored in an array. Parent of node i is at i/2; children at 2i and 2i+1.",
        example: "Array [1,3,5,7,9] represents heap; parent(i) = i//2",
        applications: ["Priority queues", "HeapSort", "Graph algorithms"]
    },
    "Fibonacci Heap": {
        description: "A lazy heap with amortized O(1) insert, decrease-key, and merge — and O(log n) delete-min. Consolidation is deferred.",
        example: "Multiple trees; mark nodes for cascading cuts",
        applications: ["Dijkstra's and Prim's with best asymptotic complexity", "Network optimization"]
    },
    "Binomial Heap": {
        description: "A collection of binomial trees satisfying heap order, supporting O(log n) merge, insert, and delete-min.",
        example: "B0, B1, B2 trees merged by linking equal-order trees",
        applications: ["Mergeable heaps", "Priority queue merging", "Discrete event simulations"]
    },
    "Pairing Heap": {
        description: "A simple heap variant with excellent practical performance, where decrease-key and merge are O(1) amortized.",
        example: "Pairing: link two heaps by attaching root with higher key as child",
        applications: ["Graph algorithms in practice", "Simple mergeable priority queues"]
    },
    "Leftist Heap": {
        description: "A heap-ordered binary tree that always merges along the rightmost path, maintaining the leftist property (left subtree is always heavier).",
        example: "Null path length: NPL(left) >= NPL(right)",
        applications: ["Efficient heap merging", "Event queues in simulations"]
    },
    "Skew Heap": {
        description: "A self-adjusting heap similar to leftist heap but simpler — unconditionally swaps children during merging.",
        example: "Merge: always swap left/right after merging right spine",
        applications: ["Amortized efficient merges", "Simple meldable heap implementation"]
    },
    "d-ary Heap": {
        description: "A generalization of binary heap where each node has d children instead of 2, improving decrease-key operations at the cost of slower delete-min.",
        example: "4-ary heap: parent at i, children at 4i+1 to 4i+4",
        applications: ["Dijkstra's with frequent decrease-key", "Graph processing"]
    },
    "Radix Heap": {
        description: "A bucket-based heap for non-negative integer keys where elements are grouped into buckets by bit ranges, enabling O(1) amortized insert for monotone sequences.",
        example: "Buckets by leading bit: [0], [1], [2-3], [4-7], ...",
        applications: ["Dijkstra's algorithm with integer weights", "Network routing"]
    },
    "Brodal Queue": {
        description: "A meldable heap with worst-case O(1) insert, decrease-key, and merge, and O(log n) delete-min — theoretically optimal.",
        example: "Complex structure with guiding trees enforcing rank invariants",
        applications: ["Theoretical optimal priority queues", "Algorithm complexity proofs"]
    },
    "Soft Heap": {
        description: "An approximate priority queue that allows a bounded fraction of elements to be 'corrupted' (raised in key), achieving O(1) amortized all operations.",
        example: "At most epsilon*n items corrupted at any time",
        applications: ["Approximate MST algorithms", "Selection algorithms in linear time"]
    },
    "Weak Heap": {
        description: "A heap variant using a forest of heap-ordered trees stored in an array with an extra bit per node. Enables O(n) construction and O(log n) extraction.",
        example: "Bit array selects which child is the distinguished child",
        applications: ["HeapSort optimization", "Sorting with fewer comparisons"]
    },
    "Beap": {
        description: "A bi-parental heap (also called bi-heap) where each internal node has two parents and two children, forming a unique triangular structure.",
        example: "Level 1: [1], Level 2: [2,3], Level 3: [4,5,6]",
        applications: ["Theoretical study of heap structures", "Search optimization"]
    },
    "Randomized Meldable Heap": {
        description: "A heap that merges two heaps by randomly choosing which subtree to recurse into, giving O(log n) expected merge time with simple implementation.",
        example: "merge(h1,h2): if rand()%2 == 0 recurse left, else right",
        applications: ["Simple meldable heaps", "Functional languages with randomization"]
    },
    "Interval Heap": {
        description: "A double-ended priority queue stored in an array where each node holds both a minimum and maximum element from a pair, supporting O(log n) min and max operations.",
        example: "Node[min, max]: root holds global min and max",
        applications: ["Double-ended priority queues", "Min-max scheduling"]
    },

    // Trie variants (missing)
    "Standard Trie": {
        description: "The classic prefix tree where each node represents one character. Strings are stored by traversing character-by-character from root to a terminal node.",
        example: "Inserting 'apple': root->a->p->p->l->e(end)",
        applications: ["Autocomplete engines", "Dictionary lookups", "Spell checkers"]
    },
    "Compressed Trie": {
        description: "A space-optimized trie that merges chains of single-child nodes into single edges labeled with substrings, reducing node count significantly.",
        example: "'app' and 'apple' share edge 'app'; leaf edges store 'le'",
        applications: ["IP routing tables", "Compact prefix matching", "String databases"]
    },
    "Suffix Tree": {
        description: "A compressed trie containing all suffixes of a string, enabling O(m) pattern matching and many linear-time string operations.",
        example: "Suffixes of 'banana': 'banana','anana','nana','ana','na','a'",
        applications: ["Substring search", "Longest common substring", "DNA pattern matching"]
    },
    "Suffix Array": {
        description: "A sorted array of all suffixes of a string, providing a compact alternative to suffix trees with the same O(m) search capability.",
        example: "SA of 'banana': [5,3,1,0,4,2] (sorted suffix start indices)",
        applications: ["Full-text search engines", "Bioinformatics sequence alignment", "Data compression"]
    },
    "Ternary Search Tree": {
        description: "A trie-like structure where each node has three children: less-than, equal, and greater-than. Combines BST and trie properties.",
        example: "Search 'cat': left if < 'c', middle if == 'c', right if > 'c'",
        applications: ["Spell checking with near-matches", "Auto-suggest systems", "Symbol tables"]
    },
    "HAT-trie": {
        description: "A cache-conscious trie variant that uses hash array mapped tries for subtrees, combining the speed of hash tables with the ordering of tries.",
        example: "Hybrid: array-mapped trie nodes + hash containers at leaves",
        applications: ["High-performance string maps", "Competitive real-time search"]
    },
    "HAMT": {
        description: "A Hash Array Mapped Trie that maps a hash to a trie path using bitmasks and compact arrays, offering O(1) average operations with good cache behavior.",
        example: "Bit partitioning: hash bits select child at each level",
        applications: ["Immutable maps in functional languages", "Persistent hash maps", "Clojure's PersistentHashMap"]
    },
    "Ctrie": {
        description: "A concurrent, lock-free variant of HAMT that supports non-blocking reads and atomic updates using CAS operations.",
        example: "Read without locks; write uses compare-and-swap on I-nodes",
        applications: ["Concurrent key-value stores", "Lock-free dictionaries in Scala"]
    },
    "X-Fast Trie": {
        description: "A trie on the binary representations of keys combined with hash tables at each level, achieving O(log log U) predecessor/successor queries.",
        example: "Levels 0..log U each hash-mapped; binary search on levels",
        applications: ["Integer predecessor queries", "Computational geometry"]
    },
    "Y-Fast Trie": {
        description: "Improves X-Fast Trie by grouping keys into balanced BSTs, reducing space from O(n log U) to O(n) while maintaining O(log log U) query time.",
        example: "X-Fast layer + groups of O(log U) keys in BSTs",
        applications: ["Fast integer predecessor/successor", "Priority queues over bounded integers"]
    },
    "Palindrome Tree": {
        description: "A tree (also called Eertree) that stores all distinct palindromic substrings of a string as nodes, enabling real-time palindrome processing.",
        example: "String 'abaab': palindromes stored as nodes; suffix links for transitions",
        applications: ["Counting palindromic substrings", "DNA analysis", "String compression"]
    },
    "AC Automaton": {
        description: "An Aho-Corasick automaton built on a trie with failure links added, enabling simultaneous multi-pattern string matching in O(n + m + z) time.",
        example: "Patterns: ['he','she','his']; text traversal matches all at once",
        applications: ["Network intrusion detection", "Spam filtering", "Multi-keyword search"]
    },

    // Segment Tree subtypes (missing)
    "Range Sum Segment Tree": {
        description: "A segment tree where each node stores the sum of its range. Supports point updates and range sum queries in O(log n) time.",
        example: "Query sum[2..5] in O(log n) after O(n) build",
        applications: ["Range sum queries", "Prefix sums with updates", "Finance summaries"]
    },
    "Range Min/Max Segment Tree": {
        description: "A segment tree storing the minimum or maximum of each range, enabling O(log n) range minimum/maximum queries.",
        example: "Range Min Query: min of arr[l..r] in O(log n)",
        applications: ["Sliding window problems", "Lowest common ancestor preprocessing", "Stock price extremes"]
    },
    "Lazy Propagation Segment Tree": {
        description: "A segment tree with deferred range updates stored as 'lazy' tags that are pushed down only when needed, enabling O(log n) range updates.",
        example: "Add 5 to arr[2..7]: store lazy tag at node, push down on query",
        applications: ["Range assignment/addition problems", "Interval scheduling", "Competitive programming"]
    },
    "Persistent Segment Tree": {
        description: "A segment tree that preserves all previous versions after updates by sharing unchanged subtrees between versions (path copying).",
        example: "Version k: only O(log n) new nodes created per update",
        applications: ["Offline range queries", "Version control of sequences", "Merge sort tree"]
    },
    "2D Segment Tree": {
        description: "A nested segment tree where the outer tree covers one dimension and each node stores an inner segment tree for the second dimension.",
        example: "Query rectangle sum in 2D grid in O(log^2 n)",
        applications: ["2D range sum/min/max queries", "Image processing", "Spatial analytics"]
    },
    "Dynamic Segment Tree": {
        description: "A segment tree built on-demand by creating nodes only when first accessed, supporting huge value ranges (e.g., 10^18) without pre-allocating all nodes.",
        example: "Build node only when update/query reaches that range",
        applications: ["Sparse range problems", "Coordinate compression alternatives", "Online queries"]
    },

    // Fenwick Tree subtypes (missing)
    "1D Fenwick Tree": {
        description: "The classic Binary Indexed Tree over a 1D array. Supports prefix sum queries and point updates in O(log n) with a simple bit-trick for traversal.",
        example: "Update index i: i += i & -i; Query prefix: i -= i & -i",
        applications: ["Prefix sums with updates", "Order statistics", "Inversion counting"]
    },
    "2D Fenwick Tree": {
        description: "An extension of the Fenwick Tree to two dimensions, enabling O(log n * log m) 2D prefix sum updates and queries.",
        example: "Update (r,c): update both row and column BIT indices",
        applications: ["2D range sum queries", "Image batch updates", "Grid problems in competitive programming"]
    },
    "Range Update Fenwick Tree": {
        description: "A Fenwick Tree augmented with a second BIT to support range additions and point/range queries using the difference array concept.",
        example: "Add X to [l..r]: BIT1[l]+=X, BIT1[r+1]-=X, BIT2 adjusted",
        applications: ["Range update + range query", "Traffic flow simulation", "Batch histogram updates"]
    },

    // Other Range Query (missing)
    "Sparse Table": {
        description: "A static data structure built in O(n log n) that answers range minimum/maximum queries in O(1) using precomputed overlapping blocks.",
        example: "RMQ[l..r] = min(table[l][k], table[r-2^k+1][k]) where 2^k <= r-l+1",
        applications: ["Static RMQ", "Lowest common ancestor (with Euler tour)", "Read-only interval queries"]
    },
    "Sqrt Decomposition": {
        description: "A general technique splitting an array into blocks of size sqrt(n), allowing O(sqrt n) range queries and updates with simple implementation.",
        example: "Block sum: full blocks O(sqrt n), partial blocks O(sqrt n)",
        applications: ["Mo's algorithm", "Range updates when simpler code is needed", "Offline query processing"]
    },
    "Mo's Algorithm Structure": {
        description: "An offline query processing technique that sorts range queries by block of left index then right index, achieving O((n + q) * sqrt(n)) total complexity.",
        example: "Sort queries: (l//sqrt, r). Move pointers to answer each.",
        applications: ["Offline range queries", "Counting distinct elements in ranges", "Data analysis"]
    },

    // B-Tree Family (missing)
    "B* Tree": {
        description: "A variant of B-Tree that delays splits by redistributing keys to siblings first, keeping nodes at least 2/3 full instead of 1/2, increasing space utilization.",
        example: "On overflow: try to push key to left/right sibling before splitting",
        applications: ["High-utilization file systems", "Write-optimized database storage"]
    },
    "Counted B-Tree": {
        description: "A B-Tree augmented with subtree size counts in each node, enabling O(log n) order-statistic queries (e.g., find k-th element).",
        example: "Node stores: [keys] + [child sizes]; rank query uses child sizes",
        applications: ["Rank/select operations", "Order-statistic databases", "Sorted sequence with rank"]
    },
    "UB-Tree": {
        description: "A B-Tree variant that stores multidimensional data by interleaving coordinate bits (Z-order/Morton curve), supporting spatial range queries.",
        example: "2D point (x,y) -> Morton code -> stored in B-Tree leaf",
        applications: ["Spatial databases", "Geographical information systems", "Multidimensional indexing"]
    },

    // Spatial & Metric (missing)
    "Octree": {
        description: "A tree that recursively subdivides 3D space into eight octants. Each node represents a cubic region and subdivides until a stopping condition.",
        example: "3D bounding box split into 8 sub-cubes at each level",
        applications: ["3D graphics and rendering", "Collision detection", "3D point cloud compression"]
    },
    "K-D Tree": {
        description: "A binary tree that partitions k-dimensional space by cycling through dimensions as split axes, enabling efficient nearest-neighbor and range searches.",
        example: "2D: split by x at level 0, by y at level 1, repeating",
        applications: ["Nearest-neighbor search", "Machine learning (KNN)", "3D scene management"]
    },
    "R-Tree": {
        description: "A tree for spatial access where each node stores a minimum bounding rectangle (MBR) enclosing all its children, supporting 2D/3D range and nearest-neighbor queries.",
        example: "Node MBR: smallest rectangle covering all children MBRs",
        applications: ["Geographic databases", "Spatial joins", "Geospatial search engines"]
    },
    "R* Tree": {
        description: "An improved R-Tree that uses a more sophisticated insertion strategy (forced reinsertion) to minimize MBR overlap and area, improving query performance.",
        example: "On overflow: reinsert 30% of entries before splitting",
        applications: ["High-performance spatial databases", "PostGIS", "OpenStreetMap indexing"]
    },
    "R+ Tree": {
        description: "An R-Tree variant where rectangles don't overlap at the same level (objects may appear in multiple nodes), simplifying search at the cost of duplication.",
        example: "An object spanning two cells is stored in both covering nodes",
        applications: ["Window queries", "Map overlay operations"]
    },
    "Hilbert R-Tree": {
        description: "An R-Tree variant that inserts objects in Hilbert curve order, improving space utilization and query performance by preserving spatial locality.",
        example: "Sort MBRs by Hilbert value of centroid before inserting",
        applications: ["Database spatial indexing", "Warehouse spatial data"]
    },
    "Priority R-Tree": {
        description: "An R-Tree designed for efficient k-nearest-neighbor queries using a priority-based branch-and-bound traversal.",
        example: "Search: expand branches in order of min distance to query point",
        applications: ["K-nearest neighbor search", "Spatial proximity queries"]
    },
    "X-Tree": {
        description: "A high-dimensional R-Tree variant that uses super-nodes (large nodes) when splits would cause too much overlap, avoiding performance degradation in high dimensions.",
        example: "If split causes >threshold overlap: create super-node instead",
        applications: ["High-dimensional data indexing", "Feature vector databases"]
    },
    "M-Tree": {
        description: "A metric tree for generic metric spaces that organizes objects by their pairwise distances using any distance function, not just Euclidean space.",
        example: "Each node stores a routing object and a covering radius",
        applications: ["Similarity search", "Content-based image retrieval", "Metric databases"]
    },
    "VP-Tree": {
        description: "A vantage-point tree partitioning a metric space into two halves: objects within radius r of a chosen 'vantage point' and those outside.",
        example: "Pick vantage p; left: dist(x,p) < r; right: dist(x,p) >= r",
        applications: ["Nearest-neighbor in metric spaces", "Text similarity", "Audio fingerprinting"]
    },
    "Ball Tree": {
        description: "A space-partitioning tree where each node defines a hypersphere (ball) containing a subset of points, enabling efficient nearest-neighbor search.",
        example: "Node: center c, radius r; all points within ball",
        applications: ["KNN in machine learning", "High-dimensional nearest neighbor", "Scikit-learn KNeighborsClassifier"]
    },
    "Cover Tree": {
        description: "A leveled tree for nearest-neighbor in metric spaces that guarantees O(log n) search. Each node at level i covers points within 2^i distance.",
        example: "Level i nodes: each has a child within 2^(i-1), covers 2^i radius",
        applications: ["Exact nearest-neighbor in metric spaces", "Low intrinsic dimension data"]
    },
    "BVH": {
        description: "A Bounding Volume Hierarchy groups primitives (triangles, objects) into a tree of nested bounding volumes for fast ray intersection and collision detection.",
        example: "Root BV contains all; split into left/right BVs recursively",
        applications: ["Ray tracing engines", "Game physics collision", "Robotics motion planning"]
    },

    // Dynamic Trees (missing)
    "Link/Cut Tree": {
        description: "A dynamic forest data structure that supports path queries and updates in O(log n) amortized via preferred-path decomposition using splay trees.",
        example: "link(u,v): connect trees; cut(u,v): disconnect; path(u,v): query",
        applications: ["Dynamic graph connectivity", "Network flow algorithms", "LCT-based MST"]
    },
    "Euler Tour Tree": {
        description: "Represents a forest by storing the Euler tour (DFS traversal) of each tree in a balanced BST, enabling O(log n) link, cut, and subtree queries.",
        example: "Euler tour of tree T stored in a BST; link = concatenate tours",
        applications: ["Dynamic forest maintenance", "Subtree aggregate queries", "Competitive programming"]
    },
    "Top Tree": {
        description: "A hierarchical decomposition of a tree into clusters, supporting O(log n) path and subtree queries/updates with arbitrary path functions.",
        example: "Clusters merged bottom-up; each merge applies an associative function",
        applications: ["Diameter queries on dynamic trees", "Heavy path decomposition generalization"]
    },
    "Dynamic Connectivity": {
        description: "A data structure supporting edge insertions and deletions in a graph while answering connectivity queries, using Euler Tour Trees or similar structures.",
        example: "insert(u,v), delete(u,v), connected(u,v) all in O(log^2 n)",
        applications: ["Dynamic graph algorithms", "Online network topology changes", "Streaming graph analysis"]
    },

    // Advanced Trees (missing)
    "Van Emde Boas Tree": {
        description: "A tree-based structure for integer keys in [0, U) that achieves O(log log U) time for all operations by recursively subdividing the universe.",
        example: "Universe [0..15] split into sqrt(16)=4 clusters of size 4",
        applications: ["Integer priority queues", "Predecessor/successor on bounded integers", "Network routing"]
    },
    "Interval Tree": {
        description: "A tree storing intervals that allows efficient retrieval of all intervals overlapping a given point or range.",
        example: "Query point 5: returns all intervals [3,7], [4,9] that contain 5",
        applications: ["Calendar event overlap detection", "Genomic interval queries", "Windowing systems"]
    },
    "Range Tree": {
        description: "A multi-level tree structure that enables orthogonal range searching — finding all points in a d-dimensional rectangle in O(log^d n + k) time.",
        example: "2D: outer BST on x; each node has inner BST on y-coords",
        applications: ["2D/3D point range queries", "Geographic data systems", "Database spatial joins"]
    },
    "Finger Tree": {
        description: "A functional, persistent sequence data structure allowing O(1) amortized access from either end and O(log n) split and concatenation.",
        example: "Deque ops: push/pop both ends O(1); split at position O(log n)",
        applications: ["Functional sequence containers", "Text editor ropes", "Haskell Data.Sequence"]
    },
    "Fusion Tree": {
        description: "A static tree for w-bit integers that achieves O(log n / log w) query time by packing multiple keys into a machine word and using bitwise tricks.",
        example: "Pack keys into 64-bit words; compare multiple keys in O(1)",
        applications: ["Integer dictionaries on RAM model", "Theoretical optimal integer search"]
    },
    "Wavelet Tree": {
        description: "A tree built by binary partitioning a sequence by value, enabling O(log σ) range rank/select and range median queries (σ = alphabet size).",
        example: "Root: partition by median value; recurse left/right on halves",
        applications: ["Range frequency queries", "Suffix array applications", "Compressed text indexes"]
    },
    "Exponential Tree": {
        description: "A search tree where the root has degree n^(1/2), and recursively, node at depth d has degree n^(1/2^d), enabling O(log n / log log n) search.",
        example: "Root: sqrt(n) children; each child: n^(1/4) children; ...",
        applications: ["Theoretical fast searching", "Bridging RAM and comparison model"]
    },
    "Dancing Links": {
        description: "A technique by Donald Knuth for efficiently implementing backtracking by using circular doubly linked lists to represent a sparse matrix for Algorithm X (exact cover).",
        example: "Cover column: detach nodes in O(1); uncover: relink in O(1)",
        applications: ["Sudoku solving", "N-Queens problem", "Exact cover / pentomino puzzles"]
    },
    "Zipper": {
        description: "A functional data structure that provides a 'cursor' or focus point in an immutable structure, enabling O(1) local updates by decomposing context and focus.",
        example: "List zipper: (left=[3,2,1], focus=4, right=[5,6])",
        applications: ["Functional tree/list editing", "Navigating ASTs in compilers", "Purely functional text editors"]
    },
    "Order Statistic Tree": {
        description: "A BST augmented with subtree size information, enabling O(log n) rank (position of key) and select (k-th smallest key) queries.",
        example: "select(k): traverse subtree sizes to find k-th element in O(log n)",
        applications: ["Rank queries", "Dynamic median", "Online leaderboards"]
    },

    // Graph subtypes (missing)
    "Directed Graph": {
        description: "A graph where each edge has a direction, going from one vertex (source) to another (destination). Also called a digraph.",
        example: "A->B means you can go from A to B but not necessarily B to A",
        applications: ["Web page link analysis", "Task dependency graphs", "Traffic flow modeling"]
    },
    "Undirected Graph": {
        description: "A graph where edges have no direction — a connection between two vertices is bidirectional and symmetric.",
        example: "Edge {A,B} means both A-B and B-A are traversable",
        applications: ["Social network friendships", "Network topology", "Undirected road maps"]
    },
    "Bidirectional Graph": {
        description: "A directed graph where every edge (u,v) has a corresponding reverse edge (v,u), effectively making all connections traversable in both directions.",
        example: "A->B and B->A both present for every edge",
        applications: ["Bidirectional BFS for shortest paths", "Two-way road networks"]
    },
    "Mixed Graph": {
        description: "A graph containing both directed and undirected edges simultaneously.",
        example: "A--B (undirected) and C->D (directed) in the same graph",
        applications: ["Transportation networks with one-way and two-way streets", "Mixed-constraint scheduling"]
    },
    "Weighted Graph": {
        description: "A graph where each edge carries a numeric weight or cost, representing distance, time, capacity, or any relevant metric.",
        example: "Edge A-B with weight 5 (e.g., 5 km between cities)",
        applications: ["Shortest path (Dijkstra)", "Minimum spanning tree", "Network routing costs"]
    },
    "Unweighted Graph": {
        description: "A graph where all edges are treated as equal with no associated cost or weight.",
        example: "Adjacency list: A->[B,C]; all edges cost 1",
        applications: ["BFS shortest path in hops", "Social connections", "Dependency graphs"]
    },
    "Connected Graph": {
        description: "An undirected graph where there is a path between every pair of vertices.",
        example: "All nodes reachable from any starting node",
        applications: ["Network reliability analysis", "Connected component verification"]
    },
    "Disconnected Graph": {
        description: "A graph with at least two vertices where no path exists between them, i.e., it has multiple connected components.",
        example: "Components: {A,B,C} and {D,E} with no edges crossing",
        applications: ["Isolated network segments", "Clustering analysis", "Island detection"]
    },
    "Strongly Connected": {
        description: "A directed graph where every vertex is reachable from every other vertex via directed paths.",
        example: "A->B->C->A: all reachable from each other",
        applications: ["Compiler optimizations (SCCs)", "Web crawling", "Deadlock detection"]
    },
    "Weakly Connected": {
        description: "A directed graph that is connected when all edges are treated as undirected — but lacks full strong connectivity.",
        example: "A->B, B->C: connected undirected, but A unreachable from C",
        applications: ["Social media influence analysis", "Citation network components"]
    },
    "k-Connected Graph": {
        description: "A graph that remains connected after removing any k-1 vertices or edges. Higher k means greater fault tolerance.",
        example: "2-connected: no single vertex removal disconnects the graph",
        applications: ["Network reliability", "Fault-tolerant system design", "Bridge detection"]
    },
    "Complete Graph": {
        description: "A simple graph where every pair of vertices is connected by exactly one edge. A complete graph with n nodes has n*(n-1)/2 edges.",
        example: "K4: 4 nodes, 6 edges — every node connects to all others",
        applications: ["Tournament scheduling", "Worst-case analysis", "Clique problems"]
    },
    "Bipartite Graph": {
        description: "A graph where vertices can be split into two disjoint sets such that every edge connects a vertex from one set to the other.",
        example: "Set U = {jobs}, Set V = {workers}; edges = assignments",
        applications: ["Job matching", "Recommendation systems", "Network flow"]
    },
    "Multigraph": {
        description: "A graph that allows multiple edges between the same pair of vertices, and possibly self-loops.",
        example: "A->B via two different routes (e.g., flight routes)",
        applications: ["Transport networks with multiple routes", "Electrical circuit modeling"]
    },
    "Hypergraph": {
        description: "A generalization of a graph where each edge (hyperedge) can connect any number of vertices, not just two.",
        example: "Hyperedge {A, B, C} connects 3 nodes simultaneously",
        applications: ["Database schema relationships", "Collaborative filtering", "VLSI circuit design"]
    },
    "Planar Graph": {
        description: "A graph that can be drawn on a plane without any edge crossings.",
        example: "K4 is planar; K5 is not — it cannot be drawn without crossings",
        applications: ["Geographic maps (countries as nodes)", "Circuit board layout", "Geographic routing"]
    },
    "Tree (as Graph)": {
        description: "A connected, acyclic undirected graph with exactly n-1 edges for n vertices — the minimal structure to maintain connectivity.",
        example: "n=5 nodes, 4 edges, no cycles, fully connected",
        applications: ["Spanning tree algorithms", "Hierarchical clustering", "Network broadcast trees"]
    },
    "Forest": {
        description: "An acyclic undirected graph, which may consist of multiple disconnected trees (connected components that are trees).",
        example: "Two trees: {A-B-C} and {D-E} with no edges between them",
        applications: ["Disjoint set forests", "Spanning forests", "Dependency resolution across modules"]
    },
    "Sparse Graph": {
        description: "A graph where the number of edges is significantly less than the maximum possible edges (O(V) edges vs O(V^2) max).",
        example: "100 nodes, 120 edges — much fewer than possible 4950",
        applications: ["Road networks", "Social networks", "Adjacency list representation preferred"]
    },
    "Dense Graph": {
        description: "A graph where the number of edges is close to the maximum possible — nearly every vertex is connected to every other.",
        example: "100 nodes, ~4900 edges — close to complete",
        applications: ["Fully connected neural networks", "Complete tournament schedules", "Matrix representation preferred"]
    },

    // Graph Representations (missing)
    "Adjacency Matrix": {
        description: "A 2D matrix where entry [i][j] = 1 if an edge exists from vertex i to vertex j, enabling O(1) edge queries at the cost of O(V^2) space.",
        example: "Matrix[0][1] = 1 means edge from node 0 to node 1",
        applications: ["Dense graphs", "Floyd-Warshall algorithm", "Graph connectivity checks"]
    },
    "Adjacency List": {
        description: "Each vertex stores a list of its neighbors. Space-efficient for sparse graphs: O(V+E) space with O(degree) neighbor traversal.",
        example: "Node 0: [1,2,3]; Node 1: [0,3]",
        applications: ["Sparse graph traversal (BFS/DFS)", "Dijkstra's algorithm", "Most graph algorithms"]
    },
    "Edge List": {
        description: "A simple list of all edges as pairs (u, v) with optional weight. Minimal space but O(E) for neighbor lookup.",
        example: "[(0,1,5), (1,2,3), (2,0,4)] for a weighted triangle",
        applications: ["Kruskal's MST (sort edges by weight)", "Graph serialization", "Edge-centric algorithms"]
    },
    "Incidence Matrix": {
        description: "A V×E matrix where entry [v][e] = 1 if vertex v is incident to edge e. Used in circuit and hypergraph analysis.",
        example: "Row = vertex, Column = edge; 1 at intersection if incident",
        applications: ["Electrical network analysis", "Hypergraph representation", "Linear algebraic graph methods"]
    },
    "CSR": {
        description: "Compressed Sparse Row format stores a graph as three arrays: values, column indices, and row pointers — enabling memory-efficient traversal of sparse graphs.",
        example: "row_ptr=[0,2,3,5]; col_idx=[1,2,0,0,3]; values=[w...]",
        applications: ["High-performance graph processing", "Sparse matrix-vector multiplication", "Graph neural networks"]
    },

    // Set Structures (missing)
    "Hash Set": {
        description: "A set implementation using a hash table for O(1) average insert, delete, and membership queries. Does not maintain order.",
        example: "set = {3, 7, 1}; contains(7) -> true; insert(5)",
        applications: ["Deduplication", "Membership testing", "Visited node tracking in BFS"]
    },
    "Ordered Set": {
        description: "A set that maintains elements in sorted order, typically implemented with a balanced BST (like Red-Black Tree), supporting O(log n) operations.",
        example: "set = {1, 3, 5}; lower_bound(4) -> 5",
        applications: ["Sorted uniqueness", "Range membership queries", "std::set in C++"]
    },
    "Multiset": {
        description: "A collection like a set but allowing duplicate elements. Each element can appear multiple times and its count is tracked.",
        example: "multiset = {1, 2, 2, 3}; count(2) -> 2",
        applications: ["Frequency counting", "Sorted bags", "std::multiset in C++"]
    },
    "Bit Set": {
        description: "A compact array of bits where each bit represents membership of an element, enabling fast set operations using bitwise operations.",
        example: "BitSet of {0,2,4}: 10101...  ; union = bitwise OR",
        applications: ["Set operations in O(n/64)", "Sieve of Eratosthenes", "Compiler reachability analysis"]
    },

    // Hash-Based structures (missing)
    "Hash Map": {
        description: "A key-value store mapping arbitrary keys to values using a hash function, offering O(1) average access, insertion, and deletion.",
        example: "map['name'] = 'Alice'; map['age'] = 25;",
        applications: ["Caches", "Frequency maps", "Index structures", "Memoization"]
    },
    "Multi-map": {
        description: "A hash map that allows multiple values for the same key, storing multiple entries under a single key.",
        example: "map.put('color', 'red'); map.put('color', 'blue'); -> ['red','blue']",
        applications: ["Tag-to-items mapping", "Reverse indexes", "Graph adjacency lists"]
    },
    "Consistent Hashing": {
        description: "A hashing scheme where both keys and nodes are placed on a ring, minimizing redistribution when nodes are added or removed.",
        example: "Key K maps to first node >= hash(K) on the circular ring",
        applications: ["Distributed caches (Memcached)", "Load balancing", "Distributed databases"]
    },
    "Cuckoo Hashing": {
        description: "A hash table using two hash functions; if a slot is occupied, the existing element is 'kicked out' to its alternative slot, guaranteeing O(1) worst-case lookup.",
        example: "Insert x: try h1(x); if occupied, displace to h2(x), chain as needed",
        applications: ["Hardware packet forwarding tables", "High-speed routers", "IP lookup"]
    },
    "Hopscotch Hashing": {
        description: "An open addressing scheme where each bucket has a neighborhood of H slots. Lookups check only that neighborhood, combining linear probing with chaining's locality.",
        example: "Item x stored within H slots of h(x); shift neighbors to maintain",
        applications: ["Concurrent hash tables", "Cache-efficient probing"]
    },
    "Perfect Hashing": {
        description: "A static hash function with no collisions for a predetermined, fixed set of keys, guaranteeing O(1) worst-case lookup.",
        example: "FKS scheme: two-level hashing with secondary table per bucket",
        applications: ["Read-only keyword lookup (compilers)", "Static routing tables", "Frozen dictionaries"]
    },
    "Extendible Hashing": {
        description: "A dynamic hashing scheme that uses a directory with a global depth and bucket local depths, splitting only the overflowing bucket when capacity is exceeded.",
        example: "Directory doubles only if local depth == global depth",
        applications: ["Dynamic databases", "File system indexing", "External storage hashing"]
    },
    "Separate Chaining": {
        description: "A collision resolution strategy where each hash table slot points to a linked list (or other structure) of all elements hashing to that slot.",
        example: "slot[3] -> [key1, key5, key12] (all hash to 3)",
        applications: ["Hash map collision handling", "Java HashMap", "Simple hash table implementation"]
    },
    "Open Addressing": {
        description: "A collision resolution where all elements are stored within the hash table itself. On collision, a probing sequence finds the next available slot.",
        example: "On collision at slot h(k): try h(k)+1, h(k)+4, ... until empty",
        applications: ["Cache-friendly hash tables", "Python dict", "High-load-factor tables"]
    },
    "Linear Probing": {
        description: "An open addressing strategy that resolves collisions by checking consecutive slots one by one until an empty slot is found.",
        example: "Collision at i: check i+1, i+2, i+3, ... (mod table size)",
        applications: ["Simple hash tables", "Cache-friendly implementations", "Hash map with linear scan"]
    },
    "Quadratic Probing": {
        description: "An open addressing strategy that checks slots at quadratic intervals (i + 1^2, i + 2^2, ...) to reduce primary clustering compared to linear probing.",
        example: "Collision at i: check i+1, i+4, i+9, ...",
        applications: ["Hash tables with reduced clustering", "General purpose hash maps"]
    },
    "Double Hashing": {
        description: "An open addressing strategy using a second hash function to determine the probe step size, minimizing clustering by making each key follow a unique probe sequence.",
        example: "Probe: h1(k) + i * h2(k) mod m for i = 0,1,2,...",
        applications: ["High-performance hash tables", "Minimal collision hash maps"]
    },
    "Robin Hood Hashing": {
        description: "An open addressing scheme where 'rich' elements (close to their ideal slot) are displaced by 'poor' elements (far from ideal), equalizing probe distances.",
        example: "Insert x: if probe_len(x) > probe_len(stored), displace stored element",
        applications: ["Low-variance hash tables", "Rust's HashMap", "High-load-factor tables"]
    },

    // Probabilistic structures (missing)
    "Cuckoo Filter": {
        description: "A probabilistic filter like Bloom but supporting deletion. Uses cuckoo hashing to store fingerprints in a table, supporting ~95% space efficiency.",
        example: "Insert: store fingerprint in bucket h1 or h2; delete by removing fingerprint",
        applications: ["CDN and proxy cache filters", "Network packet deduplication"]
    },
    "Count-Min Sketch": {
        description: "A probabilistic frequency estimation structure using multiple hash functions and a 2D array of counters, giving approximate item frequency with controlled error.",
        example: "Increment d rows at hash positions; query takes minimum across rows",
        applications: ["Network traffic frequency estimation", "Trending words detection", "Heavy hitters"]
    },
    "Count Sketch": {
        description: "Similar to Count-Min but uses +1/-1 signed increments to improve accuracy, providing unbiased frequency estimates with lower error in practice.",
        example: "For each hash fn: counter[h(x)] += sign_fn(x)",
        applications: ["Streaming frequency estimation", "Feature hashing in ML", "Online sketching"]
    },
    "MinHash": {
        description: "A locality-sensitive hashing technique estimating Jaccard similarity between sets by computing the minimum hash across multiple permutations.",
        example: "MinHash(A) ≈ MinHash(B) probability = Jaccard(A,B)",
        applications: ["Near-duplicate document detection", "Similarity search", "Recommendation systems"]
    },
    "SimHash": {
        description: "A locality-sensitive hashing algorithm that maps similar documents to similar binary hashes, enabling fast near-duplicate detection via Hamming distance.",
        example: "Documents with few differing bits in SimHash are near-duplicates",
        applications: ["Web-scale deduplication (Google)", "Similar page detection", "Plagiarism detection"]
    },
    "LSH": {
        description: "Locality-Sensitive Hashing maps similar items to the same bucket with high probability, enabling approximate nearest-neighbor search in high dimensions.",
        example: "Random hyperplane projection: similar vectors likely in same half-space",
        applications: ["Approximate nearest-neighbor search", "Image similarity", "Audio fingerprinting"]
    },

    // Cache structures (missing)
    "LFU Cache": {
        description: "A cache replacement policy that evicts the least frequently accessed item. Tracks access counts for all items.",
        example: "Items: A(3 hits), B(1 hit) -> evict B when full",
        applications: ["Long-term popularity caching", "Content delivery networks", "OS page replacement"]
    },
    "MRU Cache": {
        description: "A cache replacement policy that evicts the most recently used item — useful when recent items are unlikely to be needed again soon.",
        example: "Access A, B, C; cache full -> evict C (most recent)",
        applications: ["Sequential scan optimization", "Database buffer pools with scan workloads"]
    },
    "ARC": {
        description: "Adaptive Replacement Cache dynamically balances between recency (LRU) and frequency (LFU) by maintaining two lists, self-tuning based on access patterns.",
        example: "T1: recent once; T2: recent multiple; B1/B2: ghost lists",
        applications: ["ZFS file system cache", "Database buffer management", "Self-tuning cache systems"]
    },
    "2Q Cache": {
        description: "A two-queue cache that protects against sequential scan pollution by admitting items first into a FIFO queue before promoting to the main LRU queue.",
        example: "New item -> FIFO; re-accessed in FIFO -> promoted to LRU",
        applications: ["Database buffer pools", "Anti-scan pollution caching"]
    },

    // String advanced structures (missing)
    "Gap Buffer": {
        description: "A two-part array with a movable gap at the cursor position, enabling O(1) insertions and deletions at the cursor location.",
        example: "Buffer: 'Hello[   ]World'; insert at gap: shift gap right",
        applications: ["Text editors (Emacs internally)", "Local editing in documents"]
    },
    "Piece Table": {
        description: "A data structure storing original text and added text in immutable buffers, with a table of 'pieces' (spans) describing the current document order.",
        example: "Original: 'Hello'; Add: ' World'; pieces: [(O,0,5),(A,0,6)]",
        applications: ["Text editors (VSCode uses it)", "Undo-friendly document editing", "Large file editing"]
    },
    "Cord": {
        description: "Similar to a Rope, a persistent tree-based structure for large strings, where concatenation is O(1) by creating a new internal node without copying data.",
        example: "Cord = concat(Cord1, Cord2) via new node; O(1) no copy",
        applications: ["Functional string processing", "Persistent text manipulation", "Large string concatenation in functional languages"]
    }
};

// --- Stats Calculation ---
let totalCount = 0;

function traverseStats(node, currentCategory = null) {
    totalCount++;

    // Update category if this node is a classification type
    if (["category", "subcategory", "group"].includes(node.type)) {
        currentCategory = node.name;
    }

    if (currentCategory) {
        node.category = currentCategory;
    }

    if (node.children) {
        node.children.forEach(child => traverseStats(child, currentCategory));
    }
}
console.log('Running traverseStats...');
traverseStats(rawData);
console.log('traverseStats completed. Total nodes:', totalCount);
document.getElementById('stat-total').textContent = totalCount;

// --- Interaction Logic ---
function openDetails(data) {
    const panel = document.getElementById('detail-panel');
    const content = document.getElementById('detail-content');

    const badgeText = data.category || data.type;
    const badgeClass = `badge-${badgeText.toLowerCase().replace(/\s+/g, '-')}`;

    // Metadata lookup with fallback
    const metadata = metadataLookup[data.name] || {
        description: "A specialized data structure designed for specific computational efficiencies and memory management.",
        example: "// Implementation details vary for this specific structure.",
        applications: ["Specialized data management", "Algorithm optimization", "Advanced computing"]
    };

    if (data.type === "root") metadata.description = "The entire hierarchy of data structures known in modern computing.";
    if (data.type === "category") metadata.description = "A major classification of data structures based on their primary characteristics.";

    content.innerHTML = `
        <div class="detail-header">
            <span class="detail-badge ${badgeClass}">${badgeText}</span>
            <h2 class="detail-title" style="margin-top:10px;">${data.name}</h2>
        </div>
        <div class="detail-content">
            <h3>Description</h3>
            <p class="detail-desc">${metadata.description}</p>
            
            <h3>Example</h3>
            <div class="example-box">
                <code>${metadata.example}</code>
            </div>

            <h3>Practical Applications</h3>
            <ul class="apps-list">
                ${metadata.applications.map(app => `<li>${app}</li>`).join('')}
            </ul>

            <h3>Category</h3>
            <p class="detail-desc">${data.type.charAt(0).toUpperCase() + data.type.slice(1)}</p>
            ${data.children ? `<h3>Contains</h3><p class="detail-desc">${data.children.length} sub-structures</p>` : ''}
        </div>
    `;

    panel.classList.add('open');
}

function closeDetails() {
    document.getElementById('detail-panel').classList.remove('open');
}

// --- List View Implementation ---
function createListNode(data, level = 0) {
    const container = document.createElement('div');
    container.className = 'tree-node';
    if (level === 0) container.style.paddingLeft = '0';

    const content = document.createElement('div');
    content.className = `node-content ${data.children ? 'has-children' : ''}`;
    content.onclick = (e) => {
        e.stopPropagation();
        openDetails(data);
        if (data.children) {
            toggleBtn.classList.toggle('collapsed');
            childContainer.classList.toggle('collapsed');
        }
    };

    const toggleBtn = document.createElement('span');
    toggleBtn.className = 'node-toggle';
    if (data.children) {
        toggleBtn.innerHTML = '▼';
    } else {
        toggleBtn.innerHTML = '•';
    }
    content.appendChild(toggleBtn);

    const label = document.createElement('span');
    label.className = 'node-label';
    label.textContent = data.name;
    content.appendChild(label);

    container.appendChild(content);

    let childContainer;
    if (data.children) {
        childContainer = document.createElement('div');
        childContainer.className = 'children-container';
        // Auto-expand root
        if (level > 0) {
            // Keep others collapsed by default for cleaner look
            childContainer.classList.add('collapsed');
            toggleBtn.classList.add('collapsed');
        }

        data.children.forEach(child => {
            childContainer.appendChild(createListNode(child, level + 1));
        });
        container.appendChild(childContainer);
    }

    return container;
}

document.getElementById('list-view').appendChild(createListNode(rawData));


// --- D3 Graph Implementation ---
function initGraph() {
    const container = document.getElementById('graph-view');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Clean up previous
    container.innerHTML = '';

    const svg = d3.select("#graph-view").append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(d3.zoom().on("zoom", (event) => {
            g.attr("transform", event.transform);
        }))
        .append("g");

    const g = svg.append("g");

    const root = d3.hierarchy(rawData);

    // Tree Layout: Dynamic height based on node count to prevent overlapping
    const totalNodes = root.descendants().length;
    const dynamicHeight = Math.max(height, totalNodes * 30); // 30px per node
    const treeLayout = d3.tree().size([dynamicHeight, width * 0.8]);
    treeLayout(root);

    // Links
    g.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x)
        );

    // Nodes
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`)
        .on("click", (event, d) => {
            openDetails(d.data);
        })
        .on("mouseover", (event, d) => {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.opacity = 1;
            tooltip.innerHTML = `<strong>${d.data.name}</strong><br>${d.data.type}`;
            tooltip.style.left = (event.pageX + 10) + 'px';
            tooltip.style.top = (event.pageY + 10) + 'px';
        })
        .on("mouseout", () => {
            document.getElementById('tooltip').style.opacity = 0;
        });

    node.append("circle")
        .attr("r", 4);

    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -8 : 8)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);

    // Center the tree initially
    const initialTransform = d3.zoomIdentity.translate(100, 0).scale(0.8);
    svg.call(d3.zoom().transform, initialTransform);
}

// --- View Switching ---
function switchView(viewName) {
    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.controls button').forEach(el => el.classList.remove('active'));

    document.getElementById(`${viewName}-view`).classList.add('active');
    document.getElementById(`btn-${viewName}`).classList.add('active');

    if (viewName === 'graph') {
        // Initialize graph only when visible to get correct dimensions
        requestAnimationFrame(initGraph);
    }
}

// --- Search ---
const searchInput = document.getElementById('search-input');
console.log('Initializing search input listener...');
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    let matchesFound = 0;

    const allTreeNodes = document.querySelectorAll('.tree-node');
    const allNodeContents = document.querySelectorAll('.node-content');
    const feedback = document.getElementById('search-feedback');
    const listView = document.getElementById('list-view');
    const graphView = document.getElementById('graph-view');

    // Reset state
    allTreeNodes.forEach(node => {
        if (term) node.classList.add('search-hidden');
        else node.classList.remove('search-hidden');
    });
    allNodeContents.forEach(content => {
        content.style.borderColor = '';
        content.style.backgroundColor = '';
    });

    if (term) {
        allNodeContents.forEach(content => {
            const text = content.querySelector('.node-label').textContent.toLowerCase();
            if (text.includes(term)) {
                matchesFound++;
                // Show this node and all ancestors
                let current = content.closest('.tree-node');
                while (current) {
                    current.classList.remove('search-hidden');
                    // Also expand children container to show path
                    const nextChildren = current.querySelector('.children-container');
                    if (nextChildren && nextChildren.parentElement === current) {
                        nextChildren.classList.remove('collapsed');
                        const btn = current.querySelector('.node-toggle');
                        if (btn) btn.classList.remove('collapsed');
                    }
                    current = current.parentElement.closest('.tree-node');
                }
                content.style.borderColor = 'var(--accent)';
                content.style.backgroundColor = 'rgba(45, 212, 191, 0.1)';
            }
        });

        if (matchesFound === 0) {
            feedback.style.display = 'block';
            listView.style.opacity = '0.3';
            graphView.style.opacity = '0.3';
        } else {
            feedback.style.display = 'none';
            listView.style.opacity = '1';
            graphView.style.opacity = '1';
        }
    } else {
        feedback.style.display = 'none';
        listView.style.opacity = '1';
        graphView.style.opacity = '1';

        // Re-collapse non-root levels
        document.querySelectorAll('.children-container').forEach(c => {
            if (!c.parentElement.classList.contains('view-container') && c.parentElement.parentElement.id !== 'list-view') {
                c.classList.add('collapsed');
                const btn = c.parentElement.querySelector('.node-toggle');
                if (btn) btn.classList.add('collapsed');
            }
        });
    }

    // Graph search
    if (graphView.classList.contains('active')) {
        const nodes = d3.selectAll(".node");
        nodes.select("circle").style("fill", d =>
            term && d.data.name.toLowerCase().includes(term) ? "var(--accent)" : ""
        );
        nodes.select("circle").style("r", d =>
            term && d.data.name.toLowerCase().includes(term) ? 8 : 4
        );
    }
});

// Handle resize
window.addEventListener('resize', () => {
    if (document.getElementById('graph-view').classList.contains('active')) {
        initGraph();
    }
});
