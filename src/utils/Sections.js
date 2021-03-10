const gabe = {
  name: "Gabe G'Sell",
  url: 'http://gabegsell.com/',
}

const jimmy = {
  name: '@jimmyliu',
  url: 'https://twitter.com/jimmyliu',
}

let sections = [
  {
    hidden: true,
    depth: 0,
    title: '学习React Native',
    slug: '',
    componentName: 'Introduction',
  },
  {
    depth: 0,
    title: '环境设置',
    slug: 'environment',
    componentName: 'Environment',
  },
  {
    depth: 1,
    title: '快速起步',
    slug: 'quick_start',
    componentName: 'QuickStart',
    author: jimmy,
  },

  {
    depth: 0,
    title: '现代 Javascript',
    slug: 'modern_javascript',
    componentName: 'ModernJavascript',
  },
  { depth: 1, title: 'ES2015', slug: 'es6', componentName: 'ES6' },

  {
    depth: 2,
    title: '块级作用域声明',
    slug: 'block_scoped_declarations',
    componentName: 'BlockScopedDeclarations',
  },
  {
    depth: 2,
    title: '箭头函数',
    slug: 'fat_arrow_functions',
    componentName: 'FatArrowFunctions',
  },
  {
    depth: 2,
    title: '解构',
    slug: 'destructuring',
    componentName: 'Destructuring',
  },
  {
    depth: 2,
    title: 'Imports 和 Exports',
    slug: 'imports_and_exports',
    componentName: 'ImportsAndExports',
  },
  {
    depth: 2,
    title: '默认参数',
    slug: 'default_parameters',
    componentName: 'DefaultParameters',
  },
  {
    depth: 2,
    title: 'Class',
    slug: 'classes',
    componentName: 'Classes',
    author: gabe,
  },
  {
    depth: 2,
    title: '动态 Object Keys',
    slug: 'dynamic_object_keys',
    componentName: 'DynamicObjectKeys',
    author: gabe,
  },
  {
    depth: 2,
    title: '数组 Spread 操作符',
    slug: 'array_spread',
    componentName: 'ArraySpread',
    author: gabe,
  },

  {
    depth: 1,
    title: 'ES2016+',
    slug: 'es7_and_beyond',
    componentName: 'ES7AndBeyond',
  },
  {
    depth: 2,
    title: 'Static Class Properties',
    slug: 'static_class_properties',
    componentName: 'StaticClassProperties',
  },
  {
    depth: 2,
    title: 'Property 初始化',
    slug: 'property_initializers',
    componentName: 'ClassInstanceProperties',
    author: gabe,
  },
  {
    depth: 2,
    title: '对象 Spread 操作符',
    slug: 'object_spread',
    componentName: 'ObjectSpread',
  },
  {
    depth: 2,
    title: 'Async 和 Await',
    slug: 'async_await',
    componentName: 'AsyncAwait',
  },
  { depth: 1, title: 'JSX', slug: 'jsx', componentName: 'JSX' },

  {
    depth: 0,
    title: 'React组件',
    slug: 'components',
    componentName: 'Component',
  },
  {
    depth: 1,
    title: 'Component API',
    slug: 'component_api',
    componentName: 'ComponentAPI',
  },
  {
    depth: 1,
    title: '生命周期 API',
    slug: 'lifecycle_api',
    componentName: 'LifecycleAPI',
  },

  {
    depth: 0,
    title: '核心组件',
    slug: 'core_components',
    componentName: 'CoreComponents',
  },
  { depth: 1, title: '容器组件', slug: 'view', componentName: 'View' },
  { depth: 1, title: 'Flex 布局', slug: 'flexbox', componentName: 'Flexbox' },
  { depth: 1, title: '文本组件', slug: 'text', componentName: 'Text' },
  { depth: 1, title: '图片组件', slug: 'image', componentName: 'Image' },
  {
    depth: 1,
    title: '滚动容器组件',
    slug: 'scrollview',
    componentName: 'ScrollView',
  },
  { depth: 1, title: '列表组件', slug: 'lists', componentName: 'Lists' },
  { depth: 2, title: 'FlatList', slug: 'flatlist', componentName: 'FlatList' },
  {
    depth: 2,
    title: 'SectionList',
    slug: 'sectionlist',
    componentName: 'SectionList',
  },

  {
    depth: 0,
    title: 'Component Libraries',
    slug: 'component_libraries',
    componentName: 'ComponentLibraries',
  },
  // {depth: 1, title: 'Shoutem UI', slug: 'shoutem_ui', componentName: 'ShoutemUI'},
  // {depth: 2, title: 'Themes', slug: 'shoutem_ui_theme', componentName: 'ShoutemUITheme', fullTitle: 'Shoutem Themes'},
  // {depth: 2, title: 'Animation', slug: 'shoutem_ui_animation', componentName: 'ShoutemUIAnimation', fullTitle: 'Shoutem Animation'},

  { depth: 0, title: 'Data Management', slug: 'data', componentName: 'Data' },
  {
    depth: 1,
    title: 'Component State',
    slug: 'data_component_state',
    componentName: 'ComponentState',
  },
  { depth: 1, title: 'Redux', slug: 'redux', componentName: 'Redux' },
  {
    depth: 2,
    title: 'React Redux',
    slug: 'react_redux',
    componentName: 'ReactRedux',
  },
  // { depth: 1, title: 'GraphQL', slug: 'graphql', componentName: 'GraphQL' },
  // {
  //   depth: 2,
  //   title: 'Communicating with a GraphQL API',
  //   slug: 'graphql_api',
  //   componentName: 'CommunicatingWithGraphQLAPI',
  // },
  // {
  //   depth: 2,
  //   title: 'The GraphQL Schema',
  //   slug: 'graphql_schema',
  //   componentName: 'GraphQLSchema',
  // },
  // {
  //   depth: 2,
  //   title: 'Getting Started with GraphQL',
  //   slug: 'graphql_getting_started',
  //   componentName: 'GettingStartedWithGraphQL',
  // },
  { depth: 1, title: 'Realm', slug: 'realm', componentName: 'Realm' },
  // {depth: 1, title: 'Firebase', slug: 'firebase_data'},

  {
    depth: 0,
    title: 'Persistence',
    slug: 'persistence',
    componentName: 'Persistence',
  },
  {
    depth: 1,
    title: 'AsyncStorage',
    slug: 'asyncstorage',
    componentName: 'AsyncStorage',
  },
  {
    depth: 1,
    title: 'Redux Persist',
    slug: 'redux_persist',
    componentName: 'ReduxPersist',
  },

  {
    depth: 0,
    title: 'Networking',
    slug: 'networking',
    componentName: 'Networking',
  },
  {
    depth: 1,
    title: 'With Redux',
    slug: 'networking_redux',
    componentName: 'NetworkingRedux',
    fullTitle: 'Networking with Redux',
  },

  {
    depth: 0,
    title: 'Animation',
    slug: 'animation',
    componentName: 'Animation',
  },
  { depth: 1, title: 'Animated', slug: 'animated', componentName: 'Animated' },
  {
    depth: 1,
    title: 'RN Animatable',
    slug: 'react_native_animatable',
    componentName: 'ReactNativeAnimatable',
  },
  { depth: 1, title: 'Gestures', slug: 'gestures', componentName: 'Gestures' },

  // {depth: 0, title: 'Navigation', slug: 'navigation'},
  // {depth: 1, title: 'React Native Router Flux', slug: 'react_native_router_flux'},
  // {depth: 1, title: 'React Native Navigation', slug: 'react_native_navigation'},

  {
    depth: 0,
    title: 'Boilerplates',
    slug: 'boilerplates',
    componentName: 'Boilerplates',
  },
  // {depth: 1, title: 'Ignite', slug: 'ignite'},

  // {
  //   depth: 0,
  //   title: 'Exercises',
  //   slug: 'exercises',
  //   componentName: 'Exercises',
  // },

  // {
  //   depth: 1,
  //   title: 'Todo List',
  //   slug: 'todo_list',
  //   componentName: 'TodoList',
  // },
  // {
  //   depth: 2,
  //   title: 'App Layout',
  //   slug: 'todo_list_1',
  //   componentName: 'TodoList1',
  // },
  // {
  //   depth: 2,
  //   title: 'Input & Adding',
  //   slug: 'todo_list_2',
  //   componentName: 'TodoList2',
  // },
  // {
  //   depth: 2,
  //   title: 'List and Checkbox',
  //   slug: 'todo_list_3',
  //   componentName: 'TodoList3',
  // },
  // {
  //   depth: 2,
  //   title: 'Removal & Styling',
  //   slug: 'todo_list_4',
  //   componentName: 'TodoList4',
  // },

  // { depth: 1, title: 'Reddit', slug: 'reddit', componentName: 'Reddit' },
  // { depth: 2, title: 'Router', slug: 'reddit_1', componentName: 'Reddit1' },
  // { depth: 2, title: 'OAuth', slug: 'reddit_2', componentName: 'Reddit2' },
  // {
  //   depth: 2,
  //   title: 'Persisting Token',
  //   slug: 'reddit_3',
  //   componentName: 'Reddit3',
  // },
  // {
  //   depth: 2,
  //   title: 'Fetch Posts',
  //   slug: 'reddit_4',
  //   componentName: 'Reddit4',
  // },
  // {
  //   depth: 2,
  //   title: 'Display Posts',
  //   slug: 'reddit_5',
  //   componentName: 'Reddit5',
  // },

  // { depth: 1, title: 'Uber', slug: 'uber', componentName: 'Uber' },
  // { depth: 2, title: 'Search Header', slug: 'uber_1', componentName: 'Uber1' },
  // { depth: 2, title: 'Results List', slug: 'uber_2', componentName: 'Uber2' },
  // {
  //   depth: 2,
  //   title: 'Map & Geolocation',
  //   slug: 'uber_3',
  //   componentName: 'Uber3',
  // },
  // { depth: 2, title: 'UI Polish', slug: 'uber_4', componentName: 'Uber4' },
]

// Add section numbers. I use semver naming, since it's easy to remember
// how the sections should be numbered and arranged: {major}.{minor}.{patch}.
sections = sections.reduce(
  (acc, section) => {
    const { depth, hidden } = section
    let { major, minor, patch, sections } = acc

    if (hidden) {
      sections.push(section)
      return acc
    }

    if (depth === 0) {
      major++
      minor = 0
      patch = 0
    } else if (depth === 1) {
      minor++
      patch = 0
    } else {
      patch++
    }

    sections.push({ ...section, major, minor, patch })

    return { ...acc, major, minor, patch }
  },
  { sections: [], major: 0, minor: 0, patch: 0 }
).sections

// Add {parent} to patch sections
sections = sections.reduce(
  (acc, section) => {
    let { parent, sections } = acc
    const { depth } = section

    if (depth === 0) {
      sections.push(section)
      parent = null
    } else if (depth === 1) {
      sections.push(section)
      parent = section.slug
    } else {
      sections.push({ ...section, parent })
    }

    return { ...acc, parent }
  },
  { sections: [], parent: null }
).sections

export default sections

const matches = (path, section) => {
  let normalizedPath = path

  if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.slice(1)
  }

  return normalizedPath === section.slug
}

export const getSection = (path, offset = 0) => {
  const index = sections.findIndex(section => matches(path, section))

  if (index === -1) return null

  return sections[index + offset]
}

export const getNextSection = path => getSection(path, 1)

export const getPreviousSection = path => getSection(path, -1)

export const chapters = sections.reduce((ch, section) => {
  const { depth, hidden } = section

  if (hidden) {
    return ch
  }

  if (depth === 0) {
    ch.push([])
  }

  ch[ch.length - 1].push(section)

  return ch
}, [])
